import React from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled.Text(({ theme }) => css(theme.font.link._1));

export const Link1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
