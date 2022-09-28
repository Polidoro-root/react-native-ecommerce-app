/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

// temporary fix for https://github.com/storybookjs/react-native/issues/327 whilst the issue is investigated
try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require("../src/components/Button/Button.stories.tsx"),
    require("../src/components/Form/Input/Input.stories.tsx"),
    require("../src/components/Typography/Body/Body.stories.tsx"),
    require("../src/components/Typography/Caption/Caption.stories.tsx"),
    require("../src/components/Typography/Heading/Heading.stories.tsx"),
    require("../src/components/Typography/Link/Link.stories.tsx"),
  ];
};

configure(getStories, module, false);
