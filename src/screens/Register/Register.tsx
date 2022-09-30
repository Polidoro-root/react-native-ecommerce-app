import React from 'react';
import { Logo } from '@/components/Logo/Logo';
import {
  Page,
  PageSubitle,
  PageTitle,
  SignInButton,
  SignInButtonText,
  SignInButtonTextLink,
  StyledInput,
  SignUpButton,
} from './Register.styles';
import { useRegister } from './useRegister';

export function RegisterScreen() {
  const { control, onSubmit } = useRegister();

  return (
    <Page>
      <Logo />

      <PageTitle>Let's Get Started</PageTitle>

      <PageSubitle>Create a new account</PageSubitle>

      <StyledInput name="name" control={control} placeholder="Full Name" icon="user" />

      <StyledInput
        name="email"
        keyboardType="email-address"
        control={control}
        placeholder="Your Email"
        icon="mail"
      />

      <StyledInput
        name="password"
        keyboardType="visible-password"
        control={control}
        placeholder="Password"
        icon="password"
      />

      <StyledInput
        name="confirmPassword"
        control={control}
        placeholder="Password Again"
        icon="password"
      />

      <SignUpButton text="Sign Up" onPress={onSubmit} />

      <SignInButton>
        <SignInButtonText>
          have an account? <SignInButtonTextLink>Sign In</SignInButtonTextLink>
        </SignInButtonText>
      </SignInButton>
    </Page>
  );
}
