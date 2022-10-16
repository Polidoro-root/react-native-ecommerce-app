import { UserProps, UserGender } from './types';
import { UserError } from './UserError';

export class User {
  static fromProperties(props: UserProps) {
    return new User(props);
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get phone() {
    return this.props.phone;
  }

  set phone(phone: string | undefined) {
    this.validateIfHasValidPhone(phone);

    this.props.phone = phone;
  }

  get birthday() {
    return this.props.birthday;
  }

  set birthday(birthday: string | undefined) {
    this.validateIfHasValidBirthday(birthday);

    this.props.birthday = birthday;
  }

  get gender() {
    return this.props.gender;
  }

  set gender(gender: UserGender | undefined) {
    this.validateIfHasValidGender(gender);

    this.props.gender = gender;
  }

  private props: UserProps;

  private constructor(props: UserProps) {
    this.validateRequiredProps(props);

    this.validateIfHasMoreThanOneName(props.name);

    this.validateIfHasValidEmail(props.email);

    this.validateIfHasValidPhone(props?.phone);

    this.validateIfHasValidBirthday(props?.birthday);

    this.validateIfHasValidGender(props?.gender);

    this.props = props;
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
