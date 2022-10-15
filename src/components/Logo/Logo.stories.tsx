import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Logo } from './Logo';

const LogoMeta: ComponentMeta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      description: 'Set Rect rx to 75',
      control: { type: 'boolean' },
    },
    invertedColors: {
      name: 'invertedColors',
      type: { name: 'boolean', required: false },
      description: 'Set Rect rx to 75',
      control: { type: 'boolean' },
    },
  },
  args: {},
};

export default LogoMeta;

type LogoStory = ComponentStory<typeof Logo>;

const Template: LogoStory = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const InvertedColors = Template.bind({});
InvertedColors.args = {
  invertedColors: true,
};
