import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';

import { Body1 as Body1Component } from './Body1';
import { Body2 as Body2Component } from './Body2';
import { Body3 as Body3Component } from './Body3';
import { Body4 as Body4Component } from './Body4';
import { Body5 as Body5Component } from './Body5';
import { Body6 as Body6Component } from './Body6';

const BodyMeta: ComponentMeta<any> = {
  title: 'Typography/Body',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default BodyMeta;

type BodyStory = ComponentStory<any>;

const loadAfterFonts = (component: React.ReactNode) => {
  if (Font.isLoading('Poppins_Bold') || Font.isLoading('Poppins_Regular')) {
    return null;
  }

  return component;
};
export const Body1: BodyStory = (args) => {
  return loadAfterFonts(<Body1Component {...args}>Body1</Body1Component>);
};

export const Body2: BodyStory = (args) => {
  return loadAfterFonts(<Body2Component {...args}>Body2</Body2Component>);
};

export const Body3: BodyStory = (args) => {
  return loadAfterFonts(<Body3Component {...args}>Body3</Body3Component>);
};

export const Body4: BodyStory = (args) => {
  return loadAfterFonts(<Body4Component {...args}>Body4</Body4Component>);
};

export const Body5: BodyStory = (args) => {
  return loadAfterFonts(<Body5Component {...args}>Body5</Body5Component>);
};

export const Body6: BodyStory = (args) => {
  return loadAfterFonts(<Body6Component {...args}>Body6</Body6Component>);
};
