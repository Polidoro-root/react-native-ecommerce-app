import { themeDecorator } from './themeDecorator';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

Font.loadAsync({
  Poppins_Regular: Poppins_400Regular,
  Poppins_Bold: Poppins_700Bold,
});

export const decorators = [themeDecorator, withTests({ results })];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
