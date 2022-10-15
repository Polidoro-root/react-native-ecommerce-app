import React from 'react';
import { fireEvent, render, renderHook, screen } from '@/utils/test-utils';
import { Input } from './TextInput';
import { useForm } from 'react-hook-form';

describe('<Input />', () => {
  it('should renders correctly', () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" />);

    const input = screen.getByPlaceholderText(/input/i);

    expect(input).toBeTruthy();
  });

  it('should renders correctly with icon prop', async () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" icon="mail" />);

    const icon = await screen.findByTestId(/Input__input__Icon__mail/i);

    expect(icon).toBeTruthy();
  });

  it('should change input value when typed', async () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" />);

    const input = screen.getByPlaceholderText(/input/i);

    fireEvent.changeText(input, 'hello');

    expect(input.props.value).toBe('hello');
  });
});
