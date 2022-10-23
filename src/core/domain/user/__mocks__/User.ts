import { UserProps } from '../types';

export const User = jest.fn().mockImplementation((props: UserProps) => {
  return props;
});
