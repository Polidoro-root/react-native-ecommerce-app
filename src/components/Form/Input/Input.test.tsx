import React from 'react';
import { fireEvent, render, renderHook, screen } from '@/utils/test-utils';
import { Input } from './Input';
import { useForm, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

describe('<Input />', () => {
  it('should renders correctly', () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" />);

    const input = screen.getByPlaceholderText(/input/i);

    expect(input).toBeTruthy();
  });

  it('should renders correctly with icon prop', () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" icon="mail" />);

    const input = screen.getByPlaceholderText(/input/i);

    expect(input).toBeTruthy();
  });

  it('should change input value', async () => {
    const { result } = renderHook(() => useForm());

    render(<Input name="input" control={result.current.control} placeholder="input" />);

    const input = screen.getByPlaceholderText(/input/i);

    fireEvent.changeText(input, 'hello');

    expect(input.props.value).toBe('hello');
  });

  it('should display input error', async () => {
    const schema = yup.object().shape({
      input: yup.string().required().max(1, 'Must have less than 10 characters'),
    });

    const { result } = renderHook((props: UseFormProps) => useForm(props), {
      initialProps: {
        resolver: yupResolver(schema),
      },
    });

    render(<Input name="input" control={result.current.control} placeholder="input" />);

    const input = screen.getByPlaceholderText(/input/i);

    fireEvent.changeText(input, '12');

    const textError = screen.queryByText('Must have less than 10 characters');
  });
});
