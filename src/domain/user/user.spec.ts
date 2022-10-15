import { User, UserProps } from './User';
import { UserError } from './UserError';

describe('User domain', () => {
  const defaultUser: UserProps = { id: '1', name: 'John Doe', email: 'johndoe@mail.com' };

  describe('User constructor', () => {
    it('should instantiate a user', () => {
      const user = new User(defaultUser);

      expect(user).toEqual(defaultUser);
    });

    describe('on receive invalid props', () => {
      it('should throws missing id field exception if does not receive id', () => {
        expect(() => new User()).toThrow(new UserError('User must have id'));
      });

      it('should throws missing name field exception if does not receive name', () => {
        expect(() => new User({ id: '1' })).toThrow(new UserError('User must have name'));
      });

      it('should throws missing email field exception if does not receive email', () => {
        expect(() => new User({ id: '1', name: 'John Doe' })).toThrow(
          new UserError('User must have email')
        );
      });

      it('should throws invalid gender exception', () => {
        expect(() => {
          new User({ ...defaultUser, gender: 'NEUTRAL' });
        }).toThrow(
          new UserError(
            'User received invalid gender prop. Must be MALE or FEMALE but received NEUTRAL'
          )
        );
      });

      it('should throws invalid phone exception', () => {
        expect(() => {
          new User({ ...defaultUser, phone: '1232345678' });
        }).toThrow(new UserError('User received invalid phone prop.'));
      });

      it('should throws invalid birthday exception', () => {
        expect(() => {
          new User({ ...defaultUser, birthday: new Date() });
        }).toThrow(new UserError('User received invalid birthday prop.'));
      });
    });
  });

  describe('User gender', () => {
    it('should set user gender to male', () => {
      const user = new User(defaultUser);

      user.gender = 'MALE';

      expect(user.gender).toBe('MALE');
    });

    it('should set user gender to female', () => {
      const user = new User(defaultUser);

      user.gender = 'FEMALE';

      expect(user.gender).toBe('FEMALE');
    });

    it('should throws invalid gender exception', () => {
      const user = new User(defaultUser);

      expect(() => {
        user.gender = 'NEUTRAL';
      }).toThrow(
        new UserError('User received invalid gender. Must be MALE or FEMALE but received NEUTRAL')
      );
    });
  });

  describe('User phone', () => {
    it('should set user phone', () => {
      const user = new User(defaultUser);

      user.phone = '2342345678';

      expect(user.phone).toBe('2342345678');
    });

    it('should throws invalid phone exception', () => {
      const user = new User(defaultUser);

      expect(() => {
        user.phone = '1232345678';
      }).toThrow(new UserError('User received invalid phone prop.'));
    });
  });

  describe('User birthday', () => {
    it('should set user birthday', () => {
      const user = new User(defaultUser);

      user.birthday = new Date(2003, 4, 6);

      expect(user.birthday).toBe('2003-05-06T03:00:00.000Z');
    });

    it('should throws invalid birthday exception', () => {
      const user = new User(defaultUser);

      expect(() => {
        user.birthday = new Date();
      }).toThrow(new UserError('User received invalid birthday prop.'));
    });
  });
});
