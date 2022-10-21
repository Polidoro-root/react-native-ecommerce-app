import { User } from './User';
import type { UserProps } from './types';
import { UserError } from './UserError';

describe('User domain', () => {
  const defaultUser: UserProps = { id: '1', name: 'John Doe', email: 'johndoe@mail.com' };

  describe('User constructor', () => {
    it('should instantiate a user', () => {
      const user = User.fromProperties(defaultUser);

      expect(user).toEqual(defaultUser);
    });

    describe('when receive invalid required properties', () => {
      it('should throws missing id, name and email fields exception if does not receive id', () => {
        expect(() => User.fromProperties()).toThrow(
          new UserError('User must have id, name and email')
        );
      });

      it('should throws missing id field exception if does not receive id', () => {
        expect(() => User.fromProperties({ id: '' })).toThrow(new UserError('User must have id'));
      });

      it('should throws missing name field exception if does not receive name', () => {
        expect(() => User.fromProperties({ id: '1' })).toThrow(
          new UserError('User must have name')
        );
      });

      it('should throws missing email field exception if does not receive email', () => {
        expect(() => User.fromProperties({ id: '1', name: 'John Doe' })).toThrow(
          new UserError('User must have email')
        );
      });
    });
  });

  describe('User gender', () => {
    describe('When receiving invalid phone', () => {
      it('should throws invalid gender exception', () => {
        expect(() => {
          User.fromProperties({ ...defaultUser, gender: 'NEUTRAL' });
        }).toThrow(
          new UserError(
            'User received invalid gender prop. Must be MALE or FEMALE but received NEUTRAL'
          )
        );
      });
    });
  });

  describe('User phone', () => {
    describe('When receiving invalid phone', () => {
      it('should throws invalid phone exception', () => {
        expect(() => {
          User.fromProperties({ ...defaultUser, phone: '(123) 234 5678' });
        }).toThrow(new UserError('User received invalid phone prop.'));
      });
    });
  });

  describe('User birthday', () => {
    describe('When receiving invalid birthday', () => {
      it('should throws invalid birthday exception', () => {
        expect(() => {
          User.fromProperties({ ...defaultUser, birthday: new Date() });
        }).toThrow(new UserError('User received invalid birthday prop.'));
      });
    });
  });
});
