import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-family: 'Poppins_Bold';
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 30px;
`;

export const Heading3 = (props: TextProps) => {
  return <Text {...props}>{props.children}</Text>;
};
