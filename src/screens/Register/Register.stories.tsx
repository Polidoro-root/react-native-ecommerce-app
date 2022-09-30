import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { RegisterScreen } from './Register';
import { View } from 'react-native';

const RegisterScreenMeta: ComponentMeta<typeof RegisterScreen> = {
  title: 'Screens/Auth/Register',
  component: RegisterScreen,
  argTypes: {},
  args: {},
};

export default RegisterScreenMeta;

type RegisterScreenStory = ComponentStory<typeof RegisterScreen>;

const Template: RegisterScreenStory = (args) => {
  return (
    <View style={{ maxWidth: 768 }}>
      <RegisterScreen />
    </View>
  );
};

export const Default = Template.bind({});
