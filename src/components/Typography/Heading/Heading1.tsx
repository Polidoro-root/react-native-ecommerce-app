import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.heading._1.fontFamily};
  font-size: ${theme.font.heading._1.fontSize};
  letter-spacing: ${theme.font.heading._1.letterSpacing};
  line-height: ${theme.font.heading._1.lineHeight};
`
);

export const Heading1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
