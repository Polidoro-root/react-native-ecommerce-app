import { User } from '@/core/domain/user/User';
import { UserGender } from '@/core/domain/user/types';

export class UserDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly phone?: string,
    public readonly gender?: UserGender,
    public readonly birthday?: string
  ) {}

  toDomain(): User {
    return new User({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      birthday: this.birthday,
    });
  }
}
