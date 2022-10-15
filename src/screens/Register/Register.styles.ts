import { TextInput } from '@/components/Form/TextInput/TextInput';
import { TextButton } from '@/components/TextButton/TextButton';
import { Typography } from '@/components/Typography';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Page = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background};
  padding: 16px;
`;

export const PageTitle = styled(Typography.Heading4)`
  color: ${(props) => props.theme.color.neutral.dark};
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const PageSubitle = styled(Typography.Body6)`
  color: ${(props) => props.theme.color.neutral.gray};
  margin-bottom: 20px;
`;

export const StyledInputRoot = styled(TextInput.Root)`
  margin-top: 8px;
`;

export const SignUpButton = styled(TextButton)`
  margin-top: 16px;
  margin-bottom: 24px;
  width: 100%;
`;

export const SignInButton = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonText = styled(Typography.Body6)`
  color: ${(props) => props.theme.color.neutral.gray};
`;

export const SignInButtonTextLink = styled(Typography.Link1)`
  color: ${(props) => props.theme.color.primary.blue};
`;
