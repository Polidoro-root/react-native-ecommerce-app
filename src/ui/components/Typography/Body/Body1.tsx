import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.body._1));

export const Body1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
