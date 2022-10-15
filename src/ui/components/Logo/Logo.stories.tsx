import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { Logo, LogoProps } from './Logo';

const LogoMeta: Meta<typeof Logo> = {
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

export const Default: StoryObj<LogoProps> = {};

export const Rounded = {
  args: { rounded: true },
};

export const InvertedColors = {
  args: { invertedColors: true },
};
