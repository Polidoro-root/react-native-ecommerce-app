import React from 'react';
import { Meta, ComponentStoryFn } from '@storybook/react';
import { View } from 'react-native';
import { TextInput, TextInputRootProps } from './TextInput';
import { useForm } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';

const InputMeta: Meta<TextInputRootProps> = {
  title: 'Components/Form/TextInput',
  component: TextInput.Root,
  args: {},
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [(Story) => <View style={{ width: 300 }}>{Story()}</View>],
};

export default InputMeta;

export const Default: ComponentStoryFn<typeof TextInput.Root> = (props) => {
  const { control } = useForm();

  return (
    <TextInput.Root {...props} name="email" control={control}>
      <TextInput.Input placeholder="Your email" />
    </TextInput.Root>
  );
};

export const DefaultWithError: ComponentStoryFn<typeof TextInput.Root> = (props) => {
  const { control, setError } = useForm();

  React.useEffect(() => {
    setError('email', { message: 'Oops! Your email is not correct' });
  }, []);

  return (
    <TextInput.Root {...props} name="email" control={control}>
      <TextInput.Input placeholder="Your email" />
    </TextInput.Root>
  );
};

export const WithIcon: ComponentStoryFn<typeof TextInput.Root> = (props) => {
  const { control } = useForm();

  return (
    <TextInput.Root {...props} name="email" control={control}>
      <TextInput.Icon>
        <Feather name="mail" />
      </TextInput.Icon>
      <TextInput.Input placeholder="Your email" />
    </TextInput.Root>
  );
};

export const WithIconAndError: ComponentStoryFn<typeof TextInput.Root> = (props) => {
  const { control, setError } = useForm();

  React.useEffect(() => {
    setError('email', { message: 'Oops! Your email is not correct' });
  }, []);

  return (
    <TextInput.Root {...props} name="email" control={control}>
      <TextInput.Icon>
        <Feather name="mail" />
      </TextInput.Icon>
      <TextInput.Input placeholder="Your email" />
    </TextInput.Root>
  );
};

export const Password: ComponentStoryFn<typeof TextInput.Root> = (props) => {
  const { control } = useForm();

  return (
    <TextInput.Root {...props} name="email" control={control}>
      <TextInput.Icon>
        <Feather name="lock" />
      </TextInput.Icon>
      <TextInput.Input placeholder="Password" secureTextEntry />
    </TextInput.Root>
  );
};
