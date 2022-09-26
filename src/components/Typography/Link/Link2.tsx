import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.link._2.fontFamily};
  font-size: ${theme.font.link._2.fontSize};
  letter-spacing: ${theme.font.link._2.letterSpacing};
  line-height: ${theme.font.link._2.lineHeight};
`
);

export const Link2 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
