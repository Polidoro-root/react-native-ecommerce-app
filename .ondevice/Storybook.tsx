import { getStorybookUI } from '@storybook/react-native';
import './storybook.requires';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

Font.loadAsync({
  Poppins_Regular: Poppins_400Regular,
  Poppins_Bold: Poppins_700Bold,
});

const StorybookUIRoot = getStorybookUI({});
export default StorybookUIRoot;
