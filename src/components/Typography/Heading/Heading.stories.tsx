import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';
import { Heading1 as Heading1Component } from './Heading1';
import { Heading2 as Heading2Component } from './Heading2';
import { Heading3 as Heading3Component } from './Heading3';
import { Heading4 as Heading4Component } from './Heading4';
import { Heading5 as Heading5Component } from './Heading5';
import { Heading6 as Heading6Component } from './Heading6';

const HeadingMeta: ComponentMeta<any> = {
  title: 'Typography/Heading',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default HeadingMeta;

type HeadingStory = ComponentStory<any>;

const loadAfterFonts = (component: React.ReactNode) => {
  if (Font.isLoading('Poppins_Bold') || Font.isLoading('Poppins_Regular')) {
    return null;
  }

  return component;
};

export const Heading1: HeadingStory = (args) => {
  return loadAfterFonts(<Heading1Component {...args}>Heading1</Heading1Component>);
};

export const Heading2: HeadingStory = (args) => {
  return loadAfterFonts(<Heading2Component {...args}>Heading2</Heading2Component>);
};

export const Heading3: HeadingStory = (args) => {
  return loadAfterFonts(<Heading3Component {...args}>Heading3</Heading3Component>);
};

export const Heading4: HeadingStory = (args) => {
  return loadAfterFonts(<Heading4Component {...args}>Heading4</Heading4Component>);
};

export const Heading5: HeadingStory = (args) => {
  return loadAfterFonts(<Heading5Component {...args}>Heading5</Heading5Component>);
};

export const Heading6: HeadingStory = (args) => {
  return loadAfterFonts(<Heading6Component {...args}>Heading6</Heading6Component>);
};
