import { Heading6 } from '@/components/Typography/Heading/Heading6';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const TextInputContainer = styled.View`
  flex-direction: row;
  position: relative;
`;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.color.neutral.gray,
  textAlignVertical: 'bottom',
}))<{ isFocused?: boolean; hasIcon?: boolean; hasError?: boolean }>`
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 13px;
  padding-left: ${(props) => (props.hasIcon ? '50px' : '16px')};
  flex: 1;

  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.neutral.gray};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => {
    const defaultColor = props.isFocused
      ? props.theme.color.primary.blue
      : props.theme.color.neutral.light;

    return props.hasError ? props.theme.color.primary.red : defaultColor;
  }};
  border-radius: 5px;

  ${(props) => css(props.theme.font.body._2)}
`;

export const InputTextError = styled(Heading6)`
  color: ${(props) => props.theme.color.primary.red};
  margin-top: 4px;
`;
