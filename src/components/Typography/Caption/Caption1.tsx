import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.caption._1.fontFamily};
  font-size: ${theme.font.caption._1.fontSize};
  letter-spacing: ${theme.font.caption._1.letterSpacing};
  line-height: ${theme.font.caption._1.lineHeight};
`
);

export const Caption1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
