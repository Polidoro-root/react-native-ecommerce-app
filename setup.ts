global.window = {};
global.window = global;

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

jest.mock('firebase/database', () => {
  return {
    getDatabase: jest.fn(),
    ref: jest.fn(),
    push: jest.fn(),
    set: jest.fn(),
  };
});
