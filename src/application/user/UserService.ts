import { UserRepository } from '@/domain/user/repository/UserRepository';
import { UserToRegister } from '@/domain/user/types';
import { RegisterUserUseCase } from './use-cases/RegisterUserUseCase';

export class UserService {
  async registerUser(newUser: UserToRegister) {
    await this.registerUserUseCase.execute(newUser);
  }

  private registerUserUseCase: RegisterUserUseCase;

  constructor(private readonly userRepository: UserRepository) {
    this.registerUserUseCase = new RegisterUserUseCase(userRepository);
  }
}
