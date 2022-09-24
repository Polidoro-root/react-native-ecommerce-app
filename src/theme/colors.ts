export interface ColorThemeInterface {
  color: {
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
  };
}

const light: ColorThemeInterface = {
  color: {
    primary: {
      blue: '#40BFFF',
      red: '#FB7181',
      yellow: '#FFC833',
      green: '#53D1B6',
      purple: '#5C61F4',
    },
    neutral: {
      dark: '#223263',
      gray: '#9098B1',
      light: '#EBF0FF',
    },
    background: '#FFFFFF',
  },
};

const dark: ColorThemeInterface = {
  color: {
    primary: {
      blue: '#40BFFF',
      red: '#FB7181',
      yellow: '#FFC833',
      green: '#53D1B6',
      purple: '#5C61F4',
    },
    neutral: {
      dark: '#223263',
      gray: '#9098B1',
      light: '#EBF0FF',
    },
    background: '#FFFFFF',
  },
};

export const colorTheme = { light, dark };
