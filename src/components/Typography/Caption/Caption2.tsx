import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.caption._2));

export const Caption2 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
