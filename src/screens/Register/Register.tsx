import React, { Suspense } from 'react';
import { Logo } from '@/components/Logo/Logo';
import {
  Page,
  PageSubitle,
  PageTitle,
  SignInButton,
  SignInButtonText,
  SignInButtonTextLink,
  StyledInputRoot,
  SignUpButton,
} from './Register.styles';
import { useRegister } from './useRegister';
import { ModalLoader } from '@/components/Modals/ModalLoader/ModalLoader';
import { TextInput } from '@/components/Form/TextInput/TextInput';
import { Feather } from '@expo/vector-icons';

export function RegisterScreen() {
  const { control, onSubmit } = useRegister();

  return (
    <Page>
      <Logo />

      <PageTitle>Let's Get Started</PageTitle>

      <PageSubitle>Create a new account</PageSubitle>

      <StyledInputRoot name="name" control={control}>
        <TextInput.Icon>
          <Feather name="user" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Full Name" />
      </StyledInputRoot>

      <StyledInputRoot name="email" control={control}>
        <TextInput.Icon>
          <Feather name="mail" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Your Email" />
      </StyledInputRoot>

      <StyledInputRoot name="password" control={control}>
        <TextInput.Icon>
          <Feather name="lock" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Password" secureTextEntry />
      </StyledInputRoot>

      <StyledInputRoot name="confirmPassword" control={control}>
        <TextInput.Icon>
          <Feather name="lock" />
        </TextInput.Icon>
        <TextInput.Input placeholder="Password Again" secureTextEntry />
      </StyledInputRoot>

      <SignUpButton text="Sign Up" onPress={onSubmit} />

      <SignInButton>
        <SignInButtonText>
          have an account? <SignInButtonTextLink>Sign In</SignInButtonTextLink>
        </SignInButtonText>
      </SignInButton>
    </Page>
  );
}
