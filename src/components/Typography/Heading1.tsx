import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Poppins_Bold';
  font-size: 32px;
  letter-spacing: 0.5px;
  line-height: 48px;
`;

export const Heading1 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
