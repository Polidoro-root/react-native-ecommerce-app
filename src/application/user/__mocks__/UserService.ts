import { UserToRegister } from '@/domain/user/types';

export const UserService = jest.fn().mockImplementation(() => {
  return {
    registerUser: ({ name, email }: UserToRegister) => {
      return new Promise((resolve, reject) => {
        resolve({
          id: '1',
          name,
          email,
        });
      });
    },
  };
});
