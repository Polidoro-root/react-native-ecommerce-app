import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { colorTheme } from '@/theme/colors';
import { fontTheme } from '@/theme/fonts';

const theme = {
  font: fontTheme,
  color: colorTheme.light,
};

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme as any}>{children}</ThemeProvider>;
};

const customRender = <T,>(ui: React.ReactElement<T>, options?: RenderOptions) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from '@testing-library/react-native';

export { customRender as render };
