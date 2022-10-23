export type UserGender = 'MALE' | 'FEMALE';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender?: UserGender;
  birthday?: string;
}

export type UserToRegister = Pick<UserProps, 'name' | 'email'>;
