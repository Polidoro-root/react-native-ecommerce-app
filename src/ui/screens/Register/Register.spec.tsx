import React from 'react';

import { act, fireEvent, render, screen } from '@/utils/test-utils';
import { RegisterScreen } from './Register';

describe('<RegisterScreen />', () => {
  it('test', () => {});
  /* beforeEach(() => {
    render(<RegisterScreen />);
  });

  describe('Happy path', () => {
    it('should renders correctly', async () => {
      expect(screen.toJSON()?.children.length).toBe(9);
    });

    it('should not display error message when entering a valid name', async () => {
      const input = screen.getByPlaceholderText(/full name/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(input, 'John Doe');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = screen.queryByText(/must have at least 2 names/i);

      expect(errorMessage).not.toBeTruthy();
    });

    it('should not display error message when entering a valid email', async () => {
      const input = screen.getByPlaceholderText(/email/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(input, 'mail@mail.com');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = screen.queryByText(/must be a valid email/i);

      expect(errorMessage).not.toBeTruthy();
    });

    it('should not display error message when passwords match', async () => {
      const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText(/password/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(passwordInput, 'password1');
      fireEvent.changeText(confirmPasswordInput, 'password1');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = screen.queryByText(/passwords must match/i);

      expect(errorMessage).not.toBeTruthy();
    });

    it('should register user when submitting', () => {});

    it('should open success modal to redirect to login when user registers', () => {});

    it('should redirect to login when "Sign In" link pressed', () => {});
  });

  describe('Unhappy path', () => {
    it('should display error message when not entering a name', async () => {
      const input = screen.getByPlaceholderText(/full name/i);

      const submitButton = screen.getByText(/sign up/i);

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/name is a required field/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should display error message when not entering a email', async () => {
      const input = screen.getByPlaceholderText(/full name/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(input, 'John Doe');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/email is a required field/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should display error message when not entering a password', async () => {
      const inputName = screen.getByPlaceholderText(/full name/i);
      const inputEmail = screen.getByPlaceholderText(/email/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(inputName, 'John Doe');
      fireEvent.changeText(inputEmail, 'john@mail.com');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/password is a required field/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should display error message when entering a invalid name', async () => {
      const input = screen.getByPlaceholderText(/full name/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(input, 'John');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/must have at least 2 names/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should display error message when entering a invalid email', async () => {
      const input = screen.getByPlaceholderText(/email/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(input, 'mail');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/must be a valid email/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should display error message when passwords do not match', async () => {
      const [passwordInput, confirmPasswordInput] = screen.getAllByPlaceholderText(/password/i);

      const submitButton = screen.getByText(/sign up/i);

      fireEvent.changeText(passwordInput, 'password1');
      fireEvent.changeText(confirmPasswordInput, 'password2');

      await act(async () => {
        fireEvent.press(submitButton);
      });

      const errorMessage = await screen.findByText(/passwords must match/i);

      expect(errorMessage).toBeTruthy();
    });

    it('should open error modal when submitting', () => {});

    it('should close error modal and be able to submit again only after change form data', () => {});
  }); */
});
