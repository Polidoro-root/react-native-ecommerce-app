import { UserRepository } from '@/domain/user/repository/UserRepository';
import { User } from '@/domain/user/User';

export class UserResource implements UserRepository {
  getCurrentUser(): User {
    throw new Error('Method not implemented.');
  }
}
