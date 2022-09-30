import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.body._4));

export const Body4 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
