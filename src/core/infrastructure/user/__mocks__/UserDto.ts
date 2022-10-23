import { UserGender } from '@/core/domain/user/types';

export const User = jest
  .fn()
  .mockImplementation(
    (
      id: string,
      name: string,
      email: string,
      phone?: string,
      gender?: UserGender,
      birthday?: string
    ) => {
      return { id, name, email, phone, gender, birthday };
    }
  );
