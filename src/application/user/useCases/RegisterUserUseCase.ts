import { UserRepository } from '@/domain/user/repository/UserRepository';
import { UserToRegister } from '@/domain/user/types';
import { UserView } from '../UserView';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(newUser: UserToRegister): Promise<void> {
    await this.userRepository.registerUser(newUser);
  }
}
