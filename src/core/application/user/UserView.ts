import type { UserGender, UserProps } from '@/core/domain/user/types';
import { User } from '@/core/domain/user/User';

export class UserView {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly phone?: string,
    public readonly gender?: UserGender,
    public readonly birthday?: string
  ) {}

  static fromDomain(user: User) {
    const { id, name, email, phone, birthday, gender } = user;

    return new UserView(id, name, email, phone, gender, birthday);
  }
}
