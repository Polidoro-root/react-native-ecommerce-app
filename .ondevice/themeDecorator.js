import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { colorTheme } from '../src/theme/colors';
import { fontTheme } from '../src/theme/fonts';

const theme = {
  font: fontTheme,
  color: colorTheme.light,
};

export const themeDecorator = (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
