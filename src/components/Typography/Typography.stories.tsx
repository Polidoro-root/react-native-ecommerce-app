import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';
import { Heading1 as Heading1Component } from './Heading1';
import { Heading2 as Heading2Component } from './Heading2';
import { Heading3 as Heading3Component } from './Heading3';
import { Heading4 as Heading4Component } from './Heading4';
import { Heading5 as Heading5Component } from './Heading5';
import { Heading6 as Heading6Component } from './Heading6';

const TypographyMeta: ComponentMeta<any> = {
  title: 'Typhgraphy',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default TypographyMeta;

type TypographyStory = ComponentStory<any>;

export const Heading1: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading1Component {...args}>Heading1</Heading1Component>;
};

export const Heading2: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading2Component {...args}>Heading2</Heading2Component>;
};

export const Heading3: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading3Component {...args}>Heading3</Heading3Component>;
};

export const Heading4: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading4Component {...args}>Heading4</Heading4Component>;
};

export const Heading5: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading5Component {...args}>Heading5</Heading5Component>;
};

export const Heading6: TypographyStory = (args) => {
  if (Font.isLoading('Poppins_Bold')) {
    return null;
  }

  return <Heading6Component {...args}>Heading6</Heading6Component>;
};
