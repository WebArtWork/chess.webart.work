import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const read = (file) => readFile(path.join(root, file), 'utf8');
const company = JSON.parse(await read('src/data/company/company.json'));
const prompts = JSON.parse(await read('tools/seo/image-prompts.json'));
const catalog = await read('src/app/feature/theory/theory.catalog.ts');
const routeSource = await read('src/app/app.routes.ts');
const expectedRoutes = new Set([
	'/',
	...Array.from(routeSource.matchAll(/page\('([^']+)'/g), (match) => match[1]),
	...Array.from(catalog.matchAll(/slug: '([^']+)'/g), (match) => `/theory/${match[1]}`),
]);
const errors = [];
const images = new Set();
const imageRoutes = new Map();

for (const route of expectedRoutes) {
	try {
		const seo = company.pageSeo[route];
		assert.ok(seo?.image, `${route}: missing page SEO image`);
		const url = new URL(seo.image, company.siteUrl);
		assert.equal(url.origin, new URL(company.siteUrl).origin, `${route}: image must be local`);
		const file = `src/assets${url.pathname}`;
		assert.ok(!imageRoutes.has(file), `${route}: shares its cover with ${imageRoutes.get(file)}`);
		imageRoutes.set(file, route);
		assert.ok(prompts.some((entry) => entry.file === file), `${route}: missing image provenance`);
		const bytes = await readFile(path.join(root, file));
		assert.ok(bytes.length > 1000, `${route}: empty or invalid image`);
		const [width, height] = jpegDimensions(bytes);
		assert.equal(width, 1200, `${route}: image width`);
		assert.equal(height, 630, `${route}: image height`);
		images.add(file);
		if (process.argv.includes('--built')) {
			await stat(path.join(root, 'dist/app/browser', url.pathname));
			if (!route.includes(':') && !seo.robots?.includes('noindex')) {
				const html = await read(`dist/app/browser${route === '/' ? '' : route}/index.html`);
				for (const key of ['og:image', 'twitter:image']) {
					const tags = html.match(/<meta\b[^>]*>/g) ?? [];
					assert.ok(tags.some((tag) => tag.includes(`="${key}"`) && tag.includes(`content="${url.href}"`)), `${route}: incorrect prerendered ${key}`);
				}
			}
		}
	} catch (error) {
		errors.push(`${route}: ${error.message}`);
	}
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exitCode = 1;
} else {
	console.log(`SEO images verified: ${expectedRoutes.size} pages, ${images.size} images, all 1200×630 JPEGs${process.argv.includes('--built') ? ', including prerendered social metadata' : ''}.`);
}

function jpegDimensions(bytes) {
	assert.equal(bytes.readUInt16BE(0), 0xffd8, 'Expected JPEG');
	let offset = 2;
	while (offset < bytes.length) {
		assert.equal(bytes[offset++], 0xff, 'Invalid JPEG marker');
		while (bytes[offset] === 0xff) offset++;
		const marker = bytes[offset++];
		const length = bytes.readUInt16BE(offset);
		if ([0xc0, 0xc1, 0xc2].includes(marker)) {
			return [bytes.readUInt16BE(offset + 5), bytes.readUInt16BE(offset + 3)];
		}
		offset += length;
	}
	throw new Error('JPEG dimensions not found');
}
