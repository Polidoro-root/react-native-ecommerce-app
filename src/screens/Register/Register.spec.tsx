import { render, screen } from '@/utils/test-utils';
import React from 'react';
import { RegisterScreen } from './Register';

describe('<RegisterScreen /> happhy', () => {
  describe('Happy path', () => {
    it('should renders correctly', () => {
      render(<RegisterScreen />);

      expect(screen.toJSON()?.children?.length).toBe(9);
    });

    it('should not display error message when entering a valid name', () => {});

    it('should not display error message when entering a valid email', () => {});

    it('should not display error message when passwords match', () => {});

    it('should register user when submitting', () => {});

    it('should open success modal to redirect to login when user registers', () => {});

    it('should redirect to login when "Sign In" link pressed', () => {});
  });

  describe('Unhappy path', () => {
    it('should display error message when entering a invalid name', () => {});

    it('should display error message when entering a invalid email', () => {});

    it('should display error message when passwords do not match', () => {});

    it('should open error modal when submitting', () => {});

    it('should close error modal and be able to submit again only after change form data', () => {});
  });
});
