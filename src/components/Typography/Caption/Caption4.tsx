import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.caption._4));

export const Caption4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
