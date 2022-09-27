import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { View } from 'react-native';
import { Input } from './Input';
import { useForm } from 'react-hook-form';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {},
  args: {},
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Default: InputStory = (args) => {
  const { control } = useForm();

  return (
    <View>
      <Input
        {...args}
        style={{ width: 300 }}
        name="Input"
        control={control}
        placeholder="Placeholder"
      />
    </View>
  );
};
