import 'styled-components';

import { colorTheme } from '@/theme/colors';
import { fontTheme } from '@/theme/fonts';

declare module 'styled-components/native' {
  interface FontThemeInterface {
    heading: typeof fontTheme.heading;
    body: typeof fontTheme.body;
    caption: typeof fontTheme.caption;
    link: typeof fontTheme.link;
  }

  type CustomTheme = {
    color: typeof colorTheme.light;
    font: FontThemeInterface;
  };

  export interface DefaultTheme extends CustomTheme {}
}
