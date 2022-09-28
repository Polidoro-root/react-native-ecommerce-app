import { STATUS_BAR_HEIGHT } from '@/constants/statusBarHeight';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { colorTheme } from '../src/theme/colors';
import { fontTheme } from '../src/theme/fonts';

const theme = {
  font: fontTheme,
  color: colorTheme.light,
};

export const themeDecorator = (Story) => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        marginTop: STATUS_BAR_HEIGHT * 2,
        marginLeft: STATUS_BAR_HEIGHT,
        alignItems: 'flex-start',
      }}
    >
      <Story />
    </View>
  </ThemeProvider>
);
