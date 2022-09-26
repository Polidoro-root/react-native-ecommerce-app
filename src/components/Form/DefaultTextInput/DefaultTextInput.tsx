import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { TextInput } from 'react-native';

interface DefaultTextInputProps extends Omit<ControllerProps, 'render'> {}

export const DefaultTextInput = (props: DefaultTextInputProps) => {
  return <Controller {...props} render={({ field }) => <TextInput />} />;
};
