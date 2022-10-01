import React from 'react';
import { UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { InputTextError, TextInput, TextInputContainer, Container } from './Input.styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useInput } from './useInput';

interface InputProps
  extends Omit<UseControllerProps, 'render'>,
    Omit<TextInputProps, 'ref' | 'value' | 'defaultValue'> {
  icon?: 'mail' | 'password' | 'user';
}

export interface InputRef {
  focus(): void;
}

const iconNames = {
  mail: 'mail',
  user: 'user',
  password: 'lock',
};

export const Input = React.forwardRef<InputRef, InputProps>(
  ({ name, control, defaultValue, rules, shouldUnregister, icon, ...props }, forwardRef) => {
    const controller = { name, control, defaultValue: defaultValue ?? '', rules, shouldUnregister };

    const {
      error,
      isFocused,
      onChange,
      onIconPress,
      onInputBlur,
      onInputFocus,
      ref,
      value,
    } = useInput({
      forwardRef,
      controller,
    });

    const theme = useTheme();

    const defaultColor = isFocused ? theme.color.primary.blue : theme.color.neutral.gray;

    const iconName = iconNames?.[icon] ?? '';

    return (
      <Container>
        <TextInputContainer>
          {!!iconName && (
            <Feather
              testID={`Input__${name}__Icon__${icon}`}
              name={iconName}
              size={24}
              color={!!error ? theme.color.primary.red : defaultColor}
              style={{ position: 'absolute', top: 16, left: 16, elevation: 1, zIndex: 1 }}
              onPress={onIconPress}
            />
          )}
          <TextInput
            {...props}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onChangeText={onChange}
            ref={ref}
            value={value}
            isFocused={isFocused}
            hasIcon={!!icon}
            hasError={!!error}
          />
        </TextInputContainer>

        {!!error && <InputTextError>{error?.message}</InputTextError>}
      </Container>
    );
  }
);
