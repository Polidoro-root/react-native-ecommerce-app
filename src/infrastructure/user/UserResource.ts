import { UserRepository } from '@/domain/user/repository/UserRepository';
import { UserToRegister } from '@/domain/user/types';
import { User } from '@/domain/user/User';
import { FirebaseApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';
import { RestClient } from '../RestClient';
import { UserDto } from './UserDto';

export class UserResource implements UserRepository {
  constructor(private readonly restClient: RestClient, private readonly firebaseApp: FirebaseApp) {}

  getCurrentUser(): User {
    throw new Error('Method not implemented.');
  }

  async registerUser(user: UserToRegister): Promise<User> {
    const database = getDatabase(this.firebaseApp);

    const userListRef = ref(database, 'users');
    const newUserRef = await push(userListRef);

    await set(newUserRef, user);

    if (!newUserRef.key) {
      throw new Error('UserResource registerUser: Cannot register user');
    }

    const newUser = new UserDto(
      newUserRef.key,
      user.name,
      user.email,
      user?.phone,
      user?.gender,
      user?.birthday
    );

    return newUser.toDomain();
  }
}
