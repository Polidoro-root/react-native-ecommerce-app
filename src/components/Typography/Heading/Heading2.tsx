import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.heading._2.fontFamily};
  font-size: ${theme.font.heading._2.fontSize};
  letter-spacing: ${theme.font.heading._2.letterSpacing};
  line-height: ${theme.font.heading._2.lineHeight};
`
);

export const Heading2 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
