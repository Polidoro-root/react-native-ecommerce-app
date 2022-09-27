import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { View } from 'react-native';
import { DefaultTextInput } from './DefaultTextInput';
import { useForm } from 'react-hook-form';

const DefaultTextInputMeta: ComponentMeta<typeof DefaultTextInput> = {
  title: 'Components/Form/DefaultTextInput',
  component: DefaultTextInput,
  argTypes: {},
  args: {},
};

export default DefaultTextInputMeta;

type DefaultTextInputStory = ComponentStory<typeof DefaultTextInput>;

export const Basic: DefaultTextInputStory = (args) => {
  const { control } = useForm();

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <DefaultTextInput {...args} name="defaultTextInput" control={control} />
    </View>
  );
};
