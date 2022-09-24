import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.caption._3.fontFamily};
  font-size: ${theme.font.caption._3.fontSize};
  letter-spacing: ${theme.font.caption._3.letterSpacing};
  line-height: ${theme.font.caption._3.lineHeight};
`
);

export const Caption3 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
