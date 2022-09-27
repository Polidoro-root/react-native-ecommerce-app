import React from 'react';
import { fireEvent, render, renderHook, screen, waitFor } from '@/utils/test-utils';
import { DefaultTextInput } from './DefaultTextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

describe('<DefaultTextInput />', () => {
  it('should renders correctly', () => {
    const { result } = renderHook(() => useForm());

    render(
      <DefaultTextInput
        name="input"
        control={result.current.control}
        inputProps={{ placeholder: 'input' }}
      />
    );

    const input = screen.getByPlaceholderText(/input/i);

    expect(input).toBeTruthy();
  });

  it('should change input value', async () => {
    const { result } = renderHook(() => useForm());

    render(
      <DefaultTextInput
        name="input"
        control={result.current.control}
        inputProps={{ placeholder: 'input' }}
      />
    );

    const input = screen.getByPlaceholderText(/input/i);

    fireEvent.changeText(input, 'hello');

    expect(input.props.value).toBe('hello');
  });

  it('should display max length error when input is invalid', async () => {
    const schema = yup.object().shape({
      input: yup.string().required().max(10, 'Must have less than 10 characters'),
    });

    const { result } = renderHook(() =>
      useForm({
        resolver: yupResolver(schema),
      })
    );

    render(
      <DefaultTextInput
        name="input"
        control={result.current.control}
        inputProps={{ placeholder: 'input' }}
      />
    );

    const input = screen.getByPlaceholderText(/input/i);

    fireEvent.changeText(input, '12345678910');

    result.current.handleSubmit(jest.fn);

    const textError = await screen.findByText('Must have less than 10 characters');

    expect(textError).toBeTruthy();
  });
});
