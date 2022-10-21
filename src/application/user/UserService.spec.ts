import { UserProps, UserToRegister } from '@/domain/user/types';
import { RestClient } from '@/infrastructure/RestClient';
import { UserResource } from '@/infrastructure/user/UserResource';
import { initializeApp } from 'firebase/app';
import { UserService } from './UserService';

describe('UserService', () => {
  describe('user register', () => {
    it('should register user', async () => {
      const defaultUser = {
        name: 'John Doe',
        email: 'johndoe@mail.com',
      };

      const firebaseApp = initializeApp();

      const restClient = new RestClient();

      const userResource = new UserResource(restClient, firebaseApp);

      const userService = new UserService(userResource);

      await expect(userService.registerUser(defaultUser)).resolves.toEqual<UserProps>({
        id: '1',
        name: 'John Doe',
        email: 'johndoe@mail.com',
        phone: undefined,
        gender: undefined,
        birthday: undefined,
      });
    });

    it('should throws user exception', async () => {
      const defaultUser = {
        id: '1',
        name: 'John',
        email: 'johndoe@mail.com',
      };

      const firebaseApp = initializeApp();

      const restClient = new RestClient();

      const userResource = new UserResource(restClient, firebaseApp);

      const userService = new UserService(userResource);

      await expect(userService.registerUser(defaultUser)).rejects.toThrow(
        new Error('User must have at least two names')
      );
    });
  });
});
