import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { View } from 'react-native';
import { Input } from './Input';
import { useForm } from 'react-hook-form';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      defaultValue: 'Placeholder',
      description: 'Input placeholder',
      control: { type: 'text' },
    },
    icon: {
      name: 'icon',
      options: ['mail', 'password', 'user'],
      defaultValue: '',
      description: 'Icon before Input text',
      control: { type: 'select' },
    },
  },
  args: {},
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

const Template: InputStory = (args) => {
  const { control } = useForm();

  return (
    <View style={{ width: 300 }}>
      <Input {...args} name="input" control={control} />
    </View>
  );
};

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'user',
  placeholder: 'With icon',
};
