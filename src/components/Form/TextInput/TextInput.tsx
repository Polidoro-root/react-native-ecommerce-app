import React from 'react';
import { FieldError, UseControllerProps } from 'react-hook-form';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  ViewProps,
} from 'react-native';
import * as Styled from './TextInput.styles';
import { useTheme } from 'styled-components/native';
import { useTextInput } from './useTextInput';

const TextInputContext = React.createContext({} as ReturnType<typeof useTextInput>);

export interface TextInputRef {
  focus(): void;
}

export interface TextInputRootProps
  extends Omit<UseControllerProps, 'render'>,
    Omit<ViewProps, 'ref'> {}

const TextInputRoot = React.forwardRef<TextInputRef, TextInputRootProps>(
  (
    { name, control, defaultValue, rules, shouldUnregister, style, children, ...props },
    forwardRef
  ) => {
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
    } = useTextInput({
      forwardRef,
      controller,
    });

    return (
      <TextInputContext.Provider
        value={{ error, isFocused, onChange, onIconPress, onInputBlur, onInputFocus, ref, value }}
      >
        <Styled.Container style={style} {...props}>
          <Styled.TextInputContainer
            isFocused={isFocused}
            hasError={!!error}
            onPress={onInputFocus}
          >
            {children}
          </Styled.TextInputContainer>
          {!!error && <Styled.InputTextError>{error?.message}</Styled.InputTextError>}
        </Styled.Container>
      </TextInputContext.Provider>
    );
  }
);

interface TextInputIconProps {
  children: React.ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  const { error, isFocused, onIconPress } = React.useContext(TextInputContext);

  const theme = useTheme();

  const defaultColor = isFocused ? theme.color.primary.blue : theme.color.neutral.gray;

  return children
    ? React.cloneElement(children, {
        size: 24,
        color: !!error ? theme.color.primary.red : defaultColor,
        onPress: onIconPress,
        style: {
          marginRight: 10,
        },
      })
    : null;
};

interface TextInputInputProps extends Omit<RNTextInputProps, 'ref' | 'value' | 'onChangeText'> {}

const TextInputInput = (props: TextInputInputProps) => {
  const { value, ref, onChange, onInputFocus, onInputBlur } = React.useContext(TextInputContext);

  return (
    <Styled.TextInput
      {...props}
      onFocus={(event) => {
        onInputFocus();
        props?.onFocus?.(event);
      }}
      onBlur={(event) => {
        onInputBlur();
        props?.onBlur?.(event);
      }}
      onChangeText={onChange}
      ref={ref}
      value={value}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
