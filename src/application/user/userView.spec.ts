import { User } from '@/domain/user/User';
import { UserView } from './UserView';

describe('User view', () => {
  it('should create UserView from User', () => {
    const userView = UserView.fromDomain(
      User.fromProperties({
        id: '1',
        email: 'johndoe@mail.com',
        name: 'John Doe',
        birthday: '2003-05-06T03:00:00.000Z',
        gender: 'MALE',
        phone: '2342345678',
      })
    );

    expect(userView).toEqual({
      id: '1',
      email: 'johndoe@mail.com',
      name: 'John Doe',
      birthday: '2003-05-06T03:00:00.000Z',
      gender: 'MALE',
      phone: '2342345678',
    });
  });
});
