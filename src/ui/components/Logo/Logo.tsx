import React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export interface LogoProps extends SvgProps {
  rounded?: boolean;
  invertedColors?: boolean;
}

export const Logo = ({ rounded, invertedColors, ...props }: LogoProps) => {
  const theme = useTheme();

  const backgroundRx = rounded ? 75 : 16;
  const backgroundFill = invertedColors ? theme.color.background : theme.color.primary.blue;
  const logoFill = invertedColors ? theme.color.primary.blue : theme.color.background;

  const width = props?.width || 72;
  const height = props?.height || 72;

  const viewBox = `0 0 ${width} ${height}`;

  return (
    <Svg width={width} height={height} fill="none" viewBox={viewBox} {...props}>
      <Rect width={width} height={height} rx={backgroundRx} fill={backgroundFill} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50.828 33.172a4 4 0 0 1 0 5.656l-12 12a4 4 0 0 1-5.656 0l-12-12a4 4 0 0 1 0-5.656l12-12a4 4 0 0 1 5.656 0l12 12ZM36 29.657 29.657 36 36 42.343 42.343 36 36 29.657Z"
        fill={logoFill}
      />
    </Svg>
  );
};
