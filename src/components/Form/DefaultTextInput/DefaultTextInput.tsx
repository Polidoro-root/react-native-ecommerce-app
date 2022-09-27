import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps } from 'react-native';

interface DefaultTextInputProps extends Omit<ControllerProps, 'render'> {
  inputProps?: Omit<TextInputProps, 'ref' | 'onBlur' | 'onChangeText' | 'value'>;
}

export const DefaultTextInput = ({ inputProps, ...props }: DefaultTextInputProps) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState }) => (
        <>
          <TextInput
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            ref={field.ref}
            value={field.value}
            {...inputProps}
          />

          {!!fieldState.error && <Text>{fieldState.error?.message}</Text>}
        </>
      )}
    />
  );
};
