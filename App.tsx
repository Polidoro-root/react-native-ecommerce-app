import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import StorybookUIRoot from './.ondevice/Storybook';
import { RootNavigation } from './src/navigation';
import { colorTheme } from '@/theme/colors/colors';
import { useColorScheme, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

export { StorybookUIRoot as default };

export const App = () => {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Bold: Poppins_700Bold,
  });

  React.useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={colorTheme[colorScheme as keyof typeof colorTheme]}>
        <RootNavigation />
      </ThemeProvider>
    </View>
  );
};

// export default App;
