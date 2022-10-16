import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup
    .string()
    .required()
    .test({
      test: (value) => !!value && value?.split(' ')?.length > 1,
      message: 'must have at least 2 names',
    }),
  email: yup.string().email('must be a valid email').required(),
  password: yup.string().required(),
  confirmPassword: yup.string().test({
    test: (value, context) => context.parent.password === value,
    message: 'passwords must match',
  }),
});

export const useRegister = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async ({ name, password, email }) => {});

  return { control, onSubmit };
};
