import { MyButton } from '@/components/Button/Button';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background};
`;

export function HomeScreen() {
  return (
    <Page>
      <MyButton onPress={() => console.log('pressed')} text="Home Screen" />
    </Page>
  );
}
