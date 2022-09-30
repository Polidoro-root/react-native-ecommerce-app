import { render, screen } from '@/utils/test-utils';
import React from 'react';
import { RegisterScreen } from './Register';

describe('<RegisterScreen />', () => {
  it('should renders correctly', () => {
    render(<RegisterScreen />);

    expect(screen.toJSON()?.children?.length).toBe(3);
  });
});
