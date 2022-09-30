import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withTests } from '@storybook/addon-jest';
import { themeDecorator } from './themeDecorator';
import results from '../.jest-test-results.json';

export const decorators = [withBackgrounds, themeDecorator, withTests({ results })];

export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
