import { UserProps, UserGender } from './types';
import { UserError } from './UserError';

export class User {
  static fromProperties(props: UserProps) {
    if (!props) {
      throw new UserError('User must have id, name and email');
    }

    const { id, name, email, phone, gender, birthday } = props;

    return new User(id, name, email, phone, gender, birthday);
  }

  private constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly phone?: string,
    private readonly gender?: UserGender,
    private readonly birthday?: string
  ) {
    this.validateRequiredProps({
      id,
      name,
      email,
    });

    this.validateIfHasMoreThanOneName(name);

    this.validateIfHasValidEmail(email);

    this.validateIfHasValidPhone(phone);

    this.validateIfHasValidBirthday(birthday);

    this.validateIfHasValidGender(gender);
  }

  private validateRequiredProps(props: UserProps) {
    if (!props?.id) {
      throw new UserError('User must have id');
    }

    if (!props?.name) {
      throw new UserError('User must have name');
    }

    if (!props?.email) {
      throw new UserError('User must have email');
    }
  }

  private validateIfHasMoreThanOneName(name: string) {
    const hasNotMoreThanOneName = name.split(' ').length <= 1;

    if (hasNotMoreThanOneName) {
      throw new UserError('User must have at least two names');
    }
  }

  private validateIfHasValidEmail(email: string) {
    const validEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    const hasNotValidEmail = !validEmail.test(email);

    if (hasNotValidEmail) {
      throw new UserError('User email is invalid');
    }
  }

  private validateIfHasValidPhone(phone?: string) {
    if (!phone) {
      return;
    }

    const validPhone = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;

    const hasNotValidPhone = !validPhone.test(phone);

    if (hasNotValidPhone) {
      throw new UserError('User received invalid phone prop.');
    }
  }

  private validateIfHasValidBirthday(birthday?: string) {
    if (!birthday) {
      return;
    }

    const validBirthday = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z$/;

    const hasNotValidBirthday = !validBirthday.test(birthday);

    if (hasNotValidBirthday) {
      throw new UserError('User received invalid birthday prop.');
    }
  }

  private validateIfHasValidGender(gender?: UserGender) {
    if (!gender) {
      return;
    }

    const validGenders: UserGender[] = ['MALE', 'FEMALE'];

    const hasNotValidGender = !validGenders.includes(gender);

    if (hasNotValidGender) {
      throw new UserError(
        `User received invalid gender prop. Must be MALE or FEMALE but received ${gender}`
      );
    }
  }
}
