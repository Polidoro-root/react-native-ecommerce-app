import { MyButton } from '@/components/Button/Button';
import { Input } from '@/components/Form/Input/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.background};
`;

const schema = yup.object().shape({
  email: yup.string().required().max(10, 'Must have less than 10 characters'),
});

export function HomeScreen() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <Page>
      <Input name="email" control={control} />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>Submit</Text>
      </Pressable>
    </Page>
  );
}