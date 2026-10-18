// Writes theories.md: every Theory lesson in English, in hub order, for editing and review.
// The lessons themselves live in src/app/feature/theory/ (catalog + lessons/<slug>.ts); edits made in
// theories.md are carried back there by hand, with the Ukrainian in src/i18n/theory/<slug>/ua.json.
// Run: node tools/theory/export-md.mjs [output path]
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const theoryDir = path.join(root, 'src/app/feature/theory');

/** Loads a TypeScript module that imports only types (erased on transpile). */
async function load(file) {
	const source = await readFile(file, 'utf8');
	const { outputText } = ts.transpileModule(source, {
		compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, verbatimModuleSyntax: false },
	});
	return import('data:text/javascript;base64,' + Buffer.from(outputText).toString('base64'));
}

const { THEORY_CATALOG, THEORY_CATEGORY_LABELS, THEORY_GROUPS, THEORY_INTRO } = await load(path.join(theoryDir, 'theory.catalog.ts'));
const lessons = {};
for (const card of THEORY_CATALOG) {
	const module = await load(path.join(theoryDir, 'lessons', `${card.slug}.ts`));
	lessons[card.slug] = Object.values(module)[0];
}

const out = [];
const line = (text = '') => out.push(text);
const list = (items, ordered) => items.forEach((item, i) => line(ordered ? `${i + 1}. ${item}` : `- ${item}`));

/** A TheorySection; `level` is the Markdown heading level of its heading. */
function section(block, level) {
	line(`${'#'.repeat(Math.min(level, 6))} ${block.heading}`);
	line();
	for (const paragraph of block.paragraphs ?? []) line(paragraph), line();
	if (block.points) list(block.points, block.ordered), line();
	for (const paragraph of block.after ?? []) line(paragraph), line();
	for (const part of block.parts ?? []) section(part, level + 1);
}

line('# Chess Training: Theory lessons (English)');
line();
line('Generated from the app by `node tools/theory/export-md.mjs`. The English here is the source text of every');
line('lesson; the Ukrainian is translated from it. Edit this file freely to improve the lessons, then ask for the');
line('changes to be applied to the app.');
line();
line('Rules for edits:');
line();
line('- Keep each lesson’s slug line and the fixed headings (Main idea, How to think, Example, Common mistakes,');
line('  Check yourself, Exercise, Questions to check yourself, Key takeaway, Practice it, Further reading) so changes');
line('  can be mapped back. Other headings are free text.');
line('- No em dashes. Plain, short sentences; American spelling; address the reader as "you".');
line('- Chess claims must be correct; move sequences legal. Lessons are our own material "inspired by" players,');
line('  never their official methods; book sources are for further reading only.');
line('- "Practice it" links point to pages that exist in the app; describe a new page instead of inventing a path.');
line();

line('## How to use these lessons');
line();
for (const paragraph of THEORY_INTRO) line(paragraph), line();

let number = 0;
for (const group of THEORY_GROUPS) {
	line(`## ${group.label}`);
	line();
	line(group.detail);
	line();
	for (const card of THEORY_CATALOG.filter((item) => item.group === group.value)) {
		const lesson = lessons[card.slug];
		number++;
		line(`### ${number}. ${card.title}`);
		line();
		line(`\`slug: ${card.slug}\``);
		line();
		const meta = [
			card.inspiredBy && `Inspired by: ${card.inspiredBy}`,
			`Category: ${THEORY_CATEGORY_LABELS[card.category]}`,
			`Skill: ${card.skill}`,
			`Rating: ${card.level[0]}–${card.level[1]}`,
			`Time: ${card.minutes} min`,
		].filter(Boolean);
		line(meta.join(' · '));
		line();
		if (lesson.note) section(lesson.note, 4);
		if (lesson.idea) {
			line('#### Main idea');
			line();
			for (const paragraph of lesson.idea) line(paragraph), line();
		}
		if (lesson.steps) {
			line(`#### ${lesson.stepsHeading ?? 'How to think'}`);
			line();
			list(lesson.steps, true);
			line();
		}
		if (lesson.example) {
			line('#### Example');
			line();
			for (const paragraph of lesson.example) line(paragraph), line();
		}
		for (const block of lesson.sections ?? []) section(block, 4);
		if (lesson.mistakes) {
			line(`#### ${lesson.mistakes.length === 1 ? 'Common mistake' : 'Common mistakes'}`);
			line();
			list(lesson.mistakes, false);
			line();
		}
		if (lesson.selfCheck) {
			line('#### Check yourself');
			line();
			line(`**Question:** ${lesson.selfCheck.question}`);
			line();
			line(`**Answer:** ${lesson.selfCheck.answer}`);
			line();
		}
		if (lesson.exercise) section({ ...lesson.exercise, heading: `Exercise: ${lesson.exercise.heading}` }, 4);
		if (lesson.questions) {
			line('#### Questions to check yourself');
			line();
			lesson.questions.forEach((item, i) => {
				line(`${i + 1}. **${item.question}**`);
				line(`   Answer: ${item.answer}`);
			});
			line();
		}
		if (lesson.takeaway) {
			line('#### Key takeaway');
			line();
			line(`> ${lesson.takeaway}`);
			line();
		}
		line('#### Practice it');
		line();
		for (const item of lesson.practice) {
			const query = item.query ? '?' + new URLSearchParams(item.query).toString() : '';
			line(`- **${item.title}** (\`${item.path}${query}\`): ${item.detail}`);
		}
		line();
		if (lesson.sources?.length) {
			line('#### Further reading');
			line();
			for (const source of lesson.sources) line(`- *${source.title}*, ${source.author}, ${source.site}: ${source.url}`);
			line();
		}
		line('---');
		line();
	}
}

const text = out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
if (text.includes('—')) console.warn('Warning: an em dash slipped into the lessons.');
// an optional path writes elsewhere, e.g. to compare an edited theories.md with the code
const target = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'theories.md');
await writeFile(target, text, 'utf8');
console.log(`theories.md: ${number} lessons, ${text.split('\n').length} lines`);
