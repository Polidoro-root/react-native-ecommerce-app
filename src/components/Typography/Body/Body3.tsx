import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.body._3.fontFamily};
  font-size: ${theme.font.body._3.fontSize};
  letter-spacing: ${theme.font.body._3.letterSpacing};
  line-height: ${theme.font.body._3.lineHeight};
`
);

export const Body3 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
