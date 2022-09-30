import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { InputTextError, TextInput, TextInputContainer, Container } from './Input.styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

interface InputProps
  extends Omit<UseControllerProps, 'render'>,
    Omit<TextInputProps, 'ref' | 'value' | 'defaultValue'> {
  icon?: 'mail' | 'password' | 'user';
}

export interface InputRef {
  focus(): void;
}

export const Input = React.forwardRef<InputRef, InputProps>(
  (
    {
      name,
      control,
      defaultValue,
      rules,
      shouldUnregister,
      icon,

      ...props
    },
    forwardRef
  ) => {
    const {
      field: { onBlur, onChange, ref, value },
      fieldState: { error },
    } = useController({ name, control, defaultValue, rules, shouldUnregister });

    const theme = useTheme();

    const inputRef = React.useRef<RNTextInput | null>(null);

    const [isFocused, setIsFocused] = React.useState(false);

    React.useImperativeHandle(forwardRef, () => ({
      focus() {
        inputRef.current?.focus();
      },
    }));

    return (
      <Container>
        <TextInputContainer>
          {!!icon && (
            <Feather
              name={icon}
              size={24}
              color={isFocused ? theme.color.primary.blue : theme.color.neutral.gray}
              style={{ position: 'absolute', top: 16, left: 16, elevation: 1, zIndex: 1 }}
              onPress={() => {
                inputRef.current?.focus();
              }}
            />
          )}
          <TextInput
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              onBlur();
            }}
            onChangeText={onChange}
            ref={(currentRef) => {
              ref(currentRef);
              inputRef!.current = currentRef;
            }}
            value={value}
            isFocused={isFocused}
            hasIcon={!!icon}
          />
        </TextInputContainer>

        {!!error && <InputTextError>{error?.message}</InputTextError>}
      </Container>
    );
  }
);
