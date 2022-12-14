import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import StorybookUIRoot from './.ondevice/Storybook';
import { RootNavigation } from './src/navigation';
import { colorTheme } from '@/theme/colors';
import { fontTheme } from '@/theme/fonts';
import { useColorScheme, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { FirebaseOptions } from 'firebase/app';

// export { StorybookUIRoot as default };

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'ecommerce-app-37c36.firebaseapp.com',
  databaseURL: 'https://ecommerce-app-37c36.firebaseio.com',
  projectId: 'ecommerce-app-37c36',
  storageBucket: 'ecommerce-app-37c36.appspot.com',
  appId: 'br.com.ecommerce',
};

console.log(firebaseConfig);

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
      setTimeout(SplashScreen.hideAsync, 1000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    font: fontTheme,
    color: colorTheme[colorScheme as keyof typeof colorTheme],
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </View>
  );
};

export default App;
