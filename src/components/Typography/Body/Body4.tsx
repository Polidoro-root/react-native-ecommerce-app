import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.body._4.fontFamily};
  font-size: ${theme.font.body._4.fontSize};
  letter-spacing: ${theme.font.body._4.letterSpacing};
  line-height: ${theme.font.body._4.lineHeight};
`
);

export const Body4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
