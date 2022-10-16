import { RestClient } from '@/infrastructure/RestClient';
import { UserResource } from '@/infrastructure/user/UserResource';
import { initializeApp } from 'firebase/app';
import { RegisterUserUseCase } from './RegisterUserUseCase';

describe('RegisterUserUseCase', () => {
  it('should execute', () => {
    const firebaseApp = initializeApp();

    const userResource = new UserResource(new RestClient(), firebaseApp);

    const registerUserUseCase = new RegisterUserUseCase(userResource);

    expect(() => {
      registerUserUseCase.execute({ name: 'John Doe', email: 'johndoe@mail.com' });
    }).not.toThrow(Error);
  });
});
