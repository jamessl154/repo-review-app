import 'dotenv/config';

export default {
  expo: {
    name: 'repo-review-app',
    extra: {
      env: process.env.ENV,
      APOLLO_URI: process.env.APOLLO_URI,
      REST_URI: process.env.REST_URI
    },
    slug: 'repo-review-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    }
  }
};
