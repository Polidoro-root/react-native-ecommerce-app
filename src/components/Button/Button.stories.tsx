import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { MyButton } from './Button';
import { View } from 'react-native';

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: 'MyButton',
  component: MyButton,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Hello world',
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => (
  <View style={{ alignItems: 'flex-start' }}>
    <MyButton {...args} />
  </View>
);
