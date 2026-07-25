import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.loctroi.app',
  appName: 'Loc Troi',
  webDir: 'public',
  server: {
    url: 'https://loctroi.online',
    cleartext: true
  }
};

export default config;
