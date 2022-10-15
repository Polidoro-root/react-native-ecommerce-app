import { Heading6 } from '@/components/Typography/Heading/Heading6';
import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const TextInputContainer = styled(Pressable)<{ isFocused?: boolean; hasError?: boolean }>`
  flex-direction: row;
  align-items: center;

  padding-right: 16px;
  padding-left: 16px;

  background-color: ${(props) => props.theme.color.background};

  height: 48px;
  min-height: 48px;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    const defaultColor = props.isFocused
      ? props.theme.color.primary.blue
      : props.theme.color.neutral.light;

    return props.hasError ? props.theme.color.primary.red : defaultColor;
  }};
  border-radius: 5px;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.color.neutral.gray,
  textAlignVertical: 'bottom',
}))`
  flex: 1;
  width: 100%;

  background-color: transparent;
  color: ${(props) => props.theme.color.neutral.gray};

  ${(props) => css(props.theme.font.body._2)}
`;

export const InputTextError = styled(Heading6)`
  color: ${(props) => props.theme.color.primary.red};
  margin-top: 4px;
`;
