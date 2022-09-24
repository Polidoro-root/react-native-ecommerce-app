import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';
import { Link1 as Link1Component } from './Link1';
import { Link2 as Link2Component } from './Link2';

const LinkMeta: ComponentMeta<any> = {
  title: 'Typography/Link',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default LinkMeta;

type LinkStory = ComponentStory<any>;

const loadAfterFonts = (component: React.ReactNode) => {
  if (Font.isLoading('Poppins_Bold') || Font.isLoading('Poppins_Regular')) {
    return null;
  }

  return component;
};

export const Link1: LinkStory = (args) => {
  return loadAfterFonts(<Link1Component {...args}>Link1</Link1Component>);
};

export const Link2: LinkStory = (args) => {
  return loadAfterFonts(<Link2Component {...args}>Link2</Link2Component>);
};
