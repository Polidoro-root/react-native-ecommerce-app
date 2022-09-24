import { ColorThemeInterface } from '@/theme/colors/colors';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ColorThemeInterface {}
}
