import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Poppins_Bold';
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 21px;
`;

export const Heading5 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
