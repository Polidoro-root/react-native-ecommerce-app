import { User } from '@/core/domain/user/User';
import { UserView } from './UserView';

jest.mock('@/core/domain/user/User');

describe('UserView', () => {
  it('should create UserView from User', () => {
    const user = new User({
      id: '1',
      email: 'johndoe@mail.com',
      name: 'John Doe',
      birthday: '2003-05-06T03:00:00.000Z',
      gender: 'MALE',
      phone: '2342345678',
    });

    const userView = UserView.fromDomain(user);

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
