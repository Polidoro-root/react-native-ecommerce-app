import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.heading._4.fontFamily};
  font-size: ${theme.font.heading._4.fontSize};
  letter-spacing: ${theme.font.heading._4.letterSpacing};
  line-height: ${theme.font.heading._4.lineHeight};
`
);

export const Heading4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
