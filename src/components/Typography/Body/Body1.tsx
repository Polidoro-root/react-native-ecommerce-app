import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.body._1.fontFamily};
  font-size: ${theme.font.body._1.fontSize};
  letter-spacing: ${theme.font.body._1.letterSpacing};
  line-height: ${theme.font.body._1.lineHeight};
`
);

export const Body1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
