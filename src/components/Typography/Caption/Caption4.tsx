import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text(
  ({ theme }) => `
  font-family: ${theme.font.caption._4.fontFamily};
  font-size: ${theme.font.caption._4.fontSize};
  letter-spacing: ${theme.font.caption._4.letterSpacing};
  line-height: ${theme.font.caption._4.lineHeight};
`
);

export const Caption4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
