import React from 'react';
import { PressableProps } from 'react-native';
import { Button, Text } from './TextButton.styles';

interface TextButtonProps extends PressableProps {
  text: string;
}

export const TextButton = ({ text, ...props }: TextButtonProps) => {
  return (
    <Button {...props}>
      <Text disabled={props.disabled}>{text ?? ''}</Text>
    </Button>
  );
};
