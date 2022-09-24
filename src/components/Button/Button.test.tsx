import React from 'react';
import * as renderer from 'react-test-renderer';

import { MyButton } from './Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MyButton onPress={() => {}} text="Hello" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('has 1 child', () => {
    const tree = renderer.create(<MyButton onPress={() => {}} text="Hello" />).toJSON();

    expect(tree?.children?.length).toBe(1);
  });
});
