import { UserRepository } from '@/domain/user/repository/UserRepository';
import { UserToRegister } from '@/domain/user/types';
import { User } from '@/domain/user/User';
import { FirebaseApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';
import { RestClient } from '../RestClient';

export class UserResource implements UserRepository {
  constructor(private readonly restClient: RestClient, private readonly firebaseApp: FirebaseApp) {}

  getCurrentUser(): User {
    throw new Error('Method not implemented.');
  }

  async registerUser(user: UserToRegister): Promise<void> {
    const database = getDatabase(this.firebaseApp);

    const userListRef = ref(database, 'users');
    const newUserRef = await push(userListRef);

    await set(newUserRef, user);
  }
}
