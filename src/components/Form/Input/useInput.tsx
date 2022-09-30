import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { TextInput } from 'react-native';
import { InputRef } from './Input';

interface UseInputProps {
  controller: UseControllerProps;
  forwardRef: React.ForwardedRef<InputRef>;
}

export const useInput = ({ controller, forwardRef }: UseInputProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(controller);

  const inputRef = React.useRef<TextInput | null>(null);

  const [isFocused, setIsFocused] = React.useState(false);

  const onInputFocus = () => {
    setIsFocused(true);
  };

  const onInputBlur = () => {
    setIsFocused(false);
    field.onBlur();
  };

  const onIconPress = () => {
    inputRef.current?.focus();
  };

  const ref: React.Ref<TextInput> | undefined = (currentRef) => {
    field.ref(currentRef);
    inputRef!.current = currentRef;
  };

  React.useImperativeHandle(forwardRef, () => ({
    focus() {
      inputRef.current?.focus();
    },
  }));

  return {
    onChange: field.onChange,
    ref,
    value: field.value,
    isFocused,
    onIconPress,
    onInputBlur,
    onInputFocus,
    error,
  };
};
