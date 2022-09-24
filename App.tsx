import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import StorybookUIRoot from './.ondevice/Storybook';
import { RootNavigation } from './src/navigation';
import { colorTheme } from '@/theme/colors';
import { useColorScheme } from 'react-native';

export { StorybookUIRoot };

export const App = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorTheme[colorScheme as keyof typeof colorTheme]}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
