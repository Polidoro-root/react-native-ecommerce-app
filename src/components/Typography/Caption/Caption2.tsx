import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.caption._2.fontFamily};
  font-size: ${theme.font.caption._2.fontSize};
  letter-spacing: ${theme.font.caption._2.letterSpacing};
  line-height: ${theme.font.caption._2.lineHeight};
`
);

export const Caption2 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
