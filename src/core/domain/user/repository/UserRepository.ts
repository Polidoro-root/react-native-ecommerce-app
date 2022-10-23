import { User } from '@/core/domain/user/User';
import { UserToRegister } from '@/core/domain/user/types';

export interface UserRepository {
  getCurrentUser(): User;

  registerUser(user: UserToRegister): Promise<User>;
}
