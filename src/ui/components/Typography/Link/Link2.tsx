import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.link._2));

export const Link2 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
