import { UserError } from './UserError';

export type UserGender = 'MALE' | 'FEMALE';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  phone?: string;
  gender?: UserGender;
  birthday?: string;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.validateRequiredProps(props);

    this.validateIfHasMoreThanOneName(props.name);

    this.validateIfHasValidEmail(props.email);

    this.props = props;
  }

  private validateRequiredProps(props: UserProps) {
    if (!props?.id) {
      throw new UserError('User must have "id"');
    }

    if (!props?.name) {
      throw new UserError('User must have "name"');
    }

    if (!props?.email) {
      throw new UserError('User must have "email"');
    }
  }

  private validateIfHasMoreThanOneName(name: string) {
    const hasNotMoreThanOneName = name.split(' ').length <= 1;

    if (hasNotMoreThanOneName) {
      throw new UserError('User must have at least two names');
    }
  }

  private validateIfHasValidEmail(email: string) {
    const validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    const hasNotValidEmail = !validEmail.test(email);

    if (hasNotValidEmail) {
      throw new UserError('User email is invalid');
    }
  }
}
