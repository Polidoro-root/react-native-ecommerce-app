import { User } from './User';
import type { UserProps } from './types';
import { UserError } from './UserError';

describe('User domain', () => {
  const defaultUser: UserProps = {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@mail.com',
    phone: '2342345678',
    gender: 'MALE',
    birthday: '2003-05-06T03:00:00.000Z',
  };

  it('should instantiate an user with id, name and email', () => {
    const user = new User({
      id: defaultUser.id,
      name: defaultUser.name,
      email: defaultUser.email,
    });

    expect(user).toEqual({
      props: {
        id: defaultUser.id,
        name: defaultUser.name,
        email: defaultUser.email,
      },
    });
  });

  describe('When User does not receive props', () => {
    it('should throws missing id field exception', () => {
      expect(() => new User()).toThrow(new UserError('User must have id'));
    });
  });

  describe('User id', () => {
    it('should return user id', () => {
      const user = new User(defaultUser);

      expect(user.id).toBe(defaultUser.id);
    });

    describe('When does not receive id', () => {
      it('should throws missing id field exception', () => {
        expect(() => new User({ id: '' })).toThrow(new UserError('User must have id'));
      });
    });

    describe('When try to set id', () => {
      it('should throws user id cannot be changed exception', () => {
        const user = new User({
          id: defaultUser.id,
          name: defaultUser.name,
          email: defaultUser.email,
        });

        expect(() => {
          user.id = '2';
        }).toThrow(new UserError('User id cannot be changed'));
      });
    });
  });

  describe('User name', () => {
    it('should return user name', () => {
      const user = new User(defaultUser);

      expect(user.name).toBe(defaultUser.name);
    });

    describe('When does not receive name', () => {
      it('should throws missing name field exception', () => {
        expect(() => new User({ id: defaultUser.id })).toThrow(
          new UserError('User must have name')
        );
      });
    });

    describe('When receive only one name', () => {
      it('should throws user must have at least two names exception', () => {
        expect(
          () => new User({ id: defaultUser.id, name: 'John', email: defaultUser.email })
        ).toThrow(new UserError('User must have at least two names'));
      });
    });

    describe('When try to set name', () => {
      it('should throws user name cannot be changed exception', () => {
        const user = new User({
          id: defaultUser.id,
          name: defaultUser.name,
          email: defaultUser.email,
        });

        expect(() => {
          user.name = 'Jane Doe';
        }).toThrow(new UserError('User name cannot be changed'));
      });
    });
  });

  describe('User email', () => {
    it('should return user email', () => {
      const user = new User(defaultUser);

      expect(user.email).toBe(defaultUser.email);
    });

    describe('When user set a valid email', () => {
      it('should set user email', () => {
        const user = new User(defaultUser);

        user.email = 'jamesdoe@mail.com';

        expect(user.email).toBe(defaultUser.email);
      });
    });

    describe('When does not receive email', () => {
      it('should throws missing email field exception', () => {
        expect(() => new User({ id: defaultUser.id, name: defaultUser.name })).toThrow(
          new UserError('User must have email')
        );
      });
    });

    describe('When receive an invalid email', () => {
      it('should throws user email is invalid exception', () => {
        expect(
          () => new User({ id: defaultUser.id, name: defaultUser.name, email: 'johndoe@mail' })
        ).toThrow(new UserError('User email is invalid'));
      });
    });
  });

  describe('User phone', () => {
    it('should return user phone', () => {
      const user = new User(defaultUser);

      expect(user.phone).toBe(defaultUser.phone);
    });

    describe('When user set a valid phone', () => {
      it('should set user phone', () => {
        const user = new User(defaultUser);

        user.phone = '1231234567';

        expect(user.phone).toBe(defaultUser.phone);
      });
    });

    describe('When receiving a valid phone', () => {
      it('should create user with phone correctly', () => {
        const user = new User({
          id: defaultUser.id,
          name: defaultUser.name,
          email: defaultUser.email,
          phone: defaultUser.phone,
        });
        expect(user).toEqual({
          props: {
            id: defaultUser.id,
            name: defaultUser.name,
            email: defaultUser.email,
            phone: defaultUser.phone,
          },
        });
      });
    });

    describe('When receiving an invalid phone', () => {
      it('should throws invalid phone exception', () => {
        expect(() => {
          new User({
            id: defaultUser.id,
            name: defaultUser.name,
            email: defaultUser.email,
            phone: '(123) 234 5678',
          });
        }).toThrow(new UserError('User received invalid phone prop.'));
      });
    });
  });

  describe('User gender', () => {
    it('should return user gender', () => {
      const user = new User(defaultUser);

      expect(user.gender).toBe(defaultUser.gender);
    });

    describe('When user set a valid gender', () => {
      it('should set user gender', () => {
        const user = new User(defaultUser);

        user.gender = 'FEMALE';

        expect(user.gender).toBe(defaultUser.gender);
      });
    });

    describe('When receiving a valid gender', () => {
      it('should create user with gender correctly', () => {
        const user = new User({
          id: defaultUser.id,
          name: defaultUser.name,
          email: defaultUser.email,
          phone: defaultUser.phone,
          gender: defaultUser.gender,
        });

        expect(user).toEqual({
          props: {
            id: defaultUser.id,
            name: defaultUser.name,
            email: defaultUser.email,
            phone: defaultUser.phone,
            gender: defaultUser.gender,
          },
        });
      });
    });

    describe('When receiving an invalid gender', () => {
      it('should throws invalid gender exception', () => {
        expect(() => {
          new User({
            id: defaultUser.id,
            name: defaultUser.name,
            email: defaultUser.email,
            phone: defaultUser.phone,
            gender: 'NEUTRAL',
          });
        }).toThrow(
          new UserError(
            'User received invalid gender prop. Must be MALE or FEMALE but received NEUTRAL'
          )
        );
      });
    });
  });

  describe('User birthday', () => {
    describe('When user set a valid birthday', () => {
      it('should set user birthday', () => {
        const user = new User(defaultUser);

        user.birthday = '2001-01-01T03:00:00.000Z';

        expect(user.birthday).toBe(defaultUser.birthday);
      });
    });

    it('should return user id', () => {
      const user = new User(defaultUser);

      expect(user.birthday).toBe(defaultUser.birthday);
    });

    describe('When receiving a valid birthday', () => {
      it('should create user with birthday correctly', () => {
        const user = new User({
          id: defaultUser.id,
          name: defaultUser.name,
          email: defaultUser.email,
          phone: defaultUser.phone,
          gender: defaultUser.gender,
          birthday: defaultUser.birthday,
        });

        expect(user).toEqual({ props: defaultUser });
      });
    });

    describe('When receiving an invalid birthday', () => {
      it('should throws invalid birthday exception', () => {
        expect(() => {
          new User({
            id: defaultUser.id,
            name: defaultUser.name,
            email: defaultUser.email,
            phone: defaultUser.phone,
            gender: defaultUser.gender,
            birthday: new Date(),
          });
        }).toThrow(new UserError('User received invalid birthday prop.'));
      });
    });
  });
});
