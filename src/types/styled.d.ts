import 'styled-components';

interface ColorThemeInterface {
  primary: {
    blue: string;
    red: string;
    yellow: string;
    green: string;
    purple: string;
  };
  neutral: {
    dark: string;
    gray: string;
    light: string;
  };
  background: string;
}

interface FontInterface {
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  letterSpacing: string;
}

interface FontThemeInterface {
  heading: {
    _1: FontInterface;
    _2: FontInterface;
    _3: FontInterface;
    _4: FontInterface;
    _5: FontInterface;
    _6: FontInterface;
  };
  body: {
    _1: FontInterface;
    _2: FontInterface;
    _3: FontInterface;
    _4: FontInterface;
    _5: FontInterface;
    _6: FontInterface;
  };
  caption: {
    _1: FontInterface;
    _2: FontInterface;
    _3: FontInterface;
    _4: FontInterface;
    _5: FontInterface;
    _6: FontInterface;
  };
  link: {
    _1: FontInterface;
    _2: FontInterface;
    _3: FontInterface;
    _4: FontInterface;
    _5: FontInterface;
    _6: FontInterface;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: ColorThemeInterface;
    font: FontThemeInterface;
  }
}
