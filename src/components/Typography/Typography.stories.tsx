import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import * as Font from 'expo-font';
import { Heading1 as Heading1Component } from './Heading/Heading1';
import { Heading2 as Heading2Component } from './Heading/Heading2';
import { Heading3 as Heading3Component } from './Heading/Heading3';
import { Heading4 as Heading4Component } from './Heading/Heading4';
import { Heading5 as Heading5Component } from './Heading/Heading5';
import { Heading6 as Heading6Component } from './Heading/Heading6';
import { Body1 as Body1Component } from './Body/Body1';
import { Body2 as Body2Component } from './Body/Body2';
import { Body3 as Body3Component } from './Body/Body3';
import { Body4 as Body4Component } from './Body/Body4';
import { Body5 as Body5Component } from './Body/Body5';
import { Body6 as Body6Component } from './Body/Body6';
import { Caption1 as Caption1Component } from './Caption/Caption1';
import { Caption2 as Caption2Component } from './Caption/Caption2';
import { Caption3 as Caption3Component } from './Caption/Caption3';
import { Caption4 as Caption4Component } from './Caption/Caption4';
import { Link1 as Link1Component } from './Link/Link1';
import { Link2 as Link2Component } from './Link/Link2';

const TypographyMeta: ComponentMeta<any> = {
  title: 'Typhgraphy',
  component: () => <></>,
  argTypes: {},
  args: {},
};

export default TypographyMeta;

type TypographyStory = ComponentStory<any>;

const loadAfterFonts = (component: React.ReactNode) => {
  if (Font.isLoading('Poppins_Bold') || Font.isLoading('Poppins_Regular')) {
    return null;
  }

  return component;
};

export const Heading1: TypographyStory = (args) => {
  return loadAfterFonts(<Heading1Component {...args}>Heading1</Heading1Component>);
};

export const Heading2: TypographyStory = (args) => {
  return loadAfterFonts(<Heading2Component {...args}>Heading2</Heading2Component>);
};

export const Heading3: TypographyStory = (args) => {
  return loadAfterFonts(<Heading3Component {...args}>Heading3</Heading3Component>);
};

export const Heading4: TypographyStory = (args) => {
  return loadAfterFonts(<Heading4Component {...args}>Heading4</Heading4Component>);
};

export const Heading5: TypographyStory = (args) => {
  return loadAfterFonts(<Heading5Component {...args}>Heading5</Heading5Component>);
};

export const Heading6: TypographyStory = (args) => {
  return loadAfterFonts(<Heading6Component {...args}>Heading6</Heading6Component>);
};

export const Body1: TypographyStory = (args) => {
  return loadAfterFonts(<Body1Component {...args}>Body1</Body1Component>);
};

export const Body2: TypographyStory = (args) => {
  return loadAfterFonts(<Body2Component {...args}>Body2</Body2Component>);
};

export const Body3: TypographyStory = (args) => {
  return loadAfterFonts(<Body3Component {...args}>Body3</Body3Component>);
};

export const Body4: TypographyStory = (args) => {
  return loadAfterFonts(<Body4Component {...args}>Body4</Body4Component>);
};

export const Body5: TypographyStory = (args) => {
  return loadAfterFonts(<Body5Component {...args}>Body5</Body5Component>);
};

export const Body6: TypographyStory = (args) => {
  return loadAfterFonts(<Body6Component {...args}>Body6</Body6Component>);
};

export const Caption1: TypographyStory = (args) => {
  return loadAfterFonts(<Caption1Component {...args}>Caption1</Caption1Component>);
};

export const Caption2: TypographyStory = (args) => {
  return loadAfterFonts(<Caption2Component {...args}>Caption2</Caption2Component>);
};

export const Caption3: TypographyStory = (args) => {
  return loadAfterFonts(<Caption3Component {...args}>Caption3</Caption3Component>);
};

export const Caption4: TypographyStory = (args) => {
  return loadAfterFonts(<Caption4Component {...args}>Caption4</Caption4Component>);
};

export const Link1: TypographyStory = (args) => {
  return loadAfterFonts(<Link1Component {...args}>Link1</Link1Component>);
};

export const Link2: TypographyStory = (args) => {
  return loadAfterFonts(<Link2Component {...args}>Link2</Link2Component>);
};
