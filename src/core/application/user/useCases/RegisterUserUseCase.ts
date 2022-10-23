import { UserRepository } from '@/core/domain/user/repository/UserRepository';
import { UserToRegister } from '@/core/domain/user/types';
import { User } from '@/core/domain/user/User';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(newUser: UserToRegister): Promise<User> {
    return await this.userRepository.registerUser(newUser);
  }
}
