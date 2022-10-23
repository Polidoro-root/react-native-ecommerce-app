import { UserToRegister } from '@/core/domain/user/types';

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
