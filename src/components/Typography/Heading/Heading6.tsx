import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.heading._6.fontFamily};
  font-size: ${theme.font.heading._6.fontSize};
  letter-spacing: ${theme.font.heading._6.letterSpacing};
  line-height: ${theme.font.heading._6.lineHeight};
`
);

export const Heading6 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
