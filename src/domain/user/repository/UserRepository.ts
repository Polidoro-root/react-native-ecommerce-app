import { User } from '@/domain/user/User';
import { UserToRegister } from '@/domain/user/types';

export interface UserRepository {
  getCurrentUser(): User;

  registerUser(user: UserToRegister): Promise<void>;
}
