import React from 'react';
import { View } from 'react-native';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components/native';
import { colorTheme } from '../src/theme/colors';
import { fontTheme } from '../src/theme/fonts';

const theme = {
  font: fontTheme,
  color: colorTheme.light,
};

const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    border: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const themeDecorator = (Story) => (
  <ThemeProvider theme={theme}>
    <View style={{ flex: 1 }}>
      <Story />
    </View>
    <GlobalStyles />
  </ThemeProvider>
);
