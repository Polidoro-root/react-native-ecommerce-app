import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';

import { Caption1 as Caption1Component } from './Caption1';
import { Caption2 as Caption2Component } from './Caption2';
import { Caption3 as Caption3Component } from './Caption3';
import { Caption4 as Caption4Component } from './Caption4';

const CaptionMeta: ComponentMeta<any> = {
  title: 'Typography/Caption',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default CaptionMeta;

type CaptionStory = ComponentStory<any>;

const loadAfterFonts = (component: React.ReactNode) => {
  if (Font.isLoading('Poppins_Bold') || Font.isLoading('Poppins_Regular')) {
    return null;
  }

  return component;
};

export const Caption1: CaptionStory = (args) => {
  return loadAfterFonts(<Caption1Component {...args}>Caption1</Caption1Component>);
};

export const Caption2: CaptionStory = (args) => {
  return loadAfterFonts(<Caption2Component {...args}>Caption2</Caption2Component>);
};

export const Caption3: CaptionStory = (args) => {
  return loadAfterFonts(<Caption3Component {...args}>Caption3</Caption3Component>);
};

export const Caption4: CaptionStory = (args) => {
  return loadAfterFonts(<Caption4Component {...args}>Caption4</Caption4Component>);
};
