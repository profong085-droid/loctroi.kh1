import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.loctroi.app',
  appName: 'Loc Troi',
  webDir: 'public',
  server: {
    // Local Testing on Android Emulator:
    url: 'http://10.0.2.2:3000',
    cleartext: true
  }
};

export default config;
