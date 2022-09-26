import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.link._1.fontFamily};
  font-size: ${theme.font.link._1.fontSize};
  letter-spacing: ${theme.font.link._1.letterSpacing};
  line-height: ${theme.font.link._1.lineHeight};
`
);

export const Link1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
