import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { InputContainer, InputTextError, TextInput } from './Input.styles';

interface InputProps
  extends Omit<UseControllerProps, 'render'>,
    Omit<TextInputProps, 'ref' | 'value' | 'defaultValue'> {}

export const Input = ({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: InputProps) => {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <InputContainer>
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onChangeText={onChange}
        ref={ref}
        value={value}
        isFocused={isFocused}
      />

      {!!error && <InputTextError>{error?.message}</InputTextError>}
    </InputContainer>
  );
};
