import { RestClient } from '@/core/infrastructure/RestClient';
import { UserResource } from '@/core/infrastructure/user/UserResource';
import { initializeApp } from 'firebase/app';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { UserProps } from '@/core/domain/user/types';

jest.mock('firebase/app');

jest.mock('@/core/infrastructure/user/UserResource');

jest.mock('@/core/infrastructure/RestClient');

describe('RegisterUserUseCase', () => {
  describe('When receiving valid user', () => {
    it('should execute user register', async () => {
      const firebaseApp = initializeApp();

      const userResource = new UserResource(new RestClient(), firebaseApp);

      const registerUserUseCase = new RegisterUserUseCase(userResource);

      await expect(
        registerUserUseCase.execute({ name: 'John Doe', email: 'johndoe@mail.com' })
      ).resolves.toEqual<UserProps>({
        id: '1',
        name: 'John Doe',
        email: 'johndoe@mail.com',
        phone: undefined,
        gender: undefined,
        birthday: undefined,
      });
    });
  });

  /* describe('When receiving valid user', () => {
    it('should not execute', async () => {
      const firebaseApp = initializeApp();

      const userResource = new UserResource(new RestClient(), firebaseApp);

      const registerUserUseCase = new RegisterUserUseCase(userResource);

      await expect(
        registerUserUseCase.execute({ name: 'John', email: 'johndoe@mail' })
      ).rejects.toThrow(Error);
    });
  }); */
});
