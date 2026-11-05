import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'work.webart.chess',
  appName: 'Chess training',
  webDir: 'dist/app/browser',
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: true,
      providers: ['apple.com']
    }
  }
};

export default config;
