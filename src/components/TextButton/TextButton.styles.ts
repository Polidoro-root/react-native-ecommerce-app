import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { Typography } from '../Typography';

export const Button = styled(Pressable)`
  background-color: ${(props) =>
    props.disabled ? props.theme.color.neutral.light : props.theme.color.primary.blue};

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography.Body3)<{ disabled?: boolean | null }>`
  color: ${(props) =>
    props.disabled ? props.theme.color.neutral.gray : props.theme.color.background};
`;
