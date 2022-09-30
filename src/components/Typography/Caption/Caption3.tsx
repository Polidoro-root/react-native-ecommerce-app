import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.caption._3));

export const Caption3 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
