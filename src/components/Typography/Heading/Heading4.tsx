import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.heading._4));

export const Heading4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
