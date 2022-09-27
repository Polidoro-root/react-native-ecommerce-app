import styled, { css } from 'styled-components/native';

export const InputContainer = styled.View``;

export const TextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.color.neutral.gray,
  textAlignVertical: 'center',
}))<{ isFocused?: boolean }>`
  padding: 13px 16px;

  background-color: ${(props) => props.theme.color.background};
  color: ${(props) => props.theme.color.neutral.gray};
  border: 1px solid
    ${(props) =>
      props.isFocused ? props.theme.color.primary.blue : props.theme.color.neutral.light};
  border-radius: 5px;

  ${(props) => css(props.isFocused ? props.theme.font.body._1 : props.theme.font.body._2)}
`;

export const InputTextError = styled.Text``;
