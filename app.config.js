module.exports = {
  expo: {
    name: 'react-native-ecommerce-app',
    slug: 'react-native-ecommerce-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#40BFFF',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'br.com.ecommerce',
      permissions: ['ACCESS_COARSE_LOCATION', 'ACCESS_FINE_LOCATION', 'USE_BIOMETRIC'],
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#40BFFF',
      },
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
    },
  },
};
