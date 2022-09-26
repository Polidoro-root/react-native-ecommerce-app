import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.heading._5.fontFamily};
  font-size: ${theme.font.heading._5.fontSize};
  letter-spacing: ${theme.font.heading._5.letterSpacing};
  line-height: ${theme.font.heading._5.lineHeight};
`
);

export const Heading5 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
