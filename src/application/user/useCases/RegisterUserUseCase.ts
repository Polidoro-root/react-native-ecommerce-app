import { UserRepository } from '@/domain/user/repository/UserRepository';
import { UserToRegister } from '@/domain/user/types';
import { User } from '@/domain/user/User';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(newUser: UserToRegister): Promise<User> {
    return await this.userRepository.registerUser(newUser);
  }
}
