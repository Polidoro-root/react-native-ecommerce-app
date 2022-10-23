import { UserRepository } from '@/core/domain/user/repository/UserRepository';
import { UserToRegister } from '@/core/domain/user/types';
import { RegisterUserUseCase } from './useCases/RegisterUserUseCase';

export class UserService {
  async registerUser(newUser: UserToRegister) {
    return await this.registerUserUseCase.execute(newUser);
  }

  private registerUserUseCase: RegisterUserUseCase;

  constructor(private readonly userRepository: UserRepository) {
    this.registerUserUseCase = new RegisterUserUseCase(userRepository);
  }
}
