import React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

interface LogoProps extends SvgProps {
  rounded?: boolean;
  invertedColors?: boolean;
}

export const Logo = ({ rounded, invertedColors, ...props }: LogoProps) => {
  const theme = useTheme();

  const backgroundRx = rounded ? 75 : 5;
  const backgroundFill = invertedColors ? theme.color.background : theme.color.primary.blue;
  const logoFill = invertedColors ? theme.color.primary.blue : theme.color.background;

  const width = props?.width || 150;
  const height = props?.height || 150;

  const viewBox = `0 0 ${width} ${height}`;

  return (
    <Svg width={width} height={height} fill="none" viewBox={viewBox} {...props}>
      <Rect width={width} height={height} rx={backgroundRx} fill={backgroundFill} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.485 66.515c4.687 4.686 4.687 12.284 0 16.97l-36 36c-4.686 4.687-12.284 4.687-16.97 0l-36-36c-4.687-4.686-4.687-12.284 0-16.97l36-36c4.686-4.687 12.284-4.687 16.97 0l36 36ZM75 55.97 55.97 75 75 94.03 94.03 75 75 55.97Z"
        fill={logoFill}
      />
    </Svg>
  );
};
