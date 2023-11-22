import { UserInfo } from '@/apis/user';
import { atom } from 'recoil';

export const MyProfileAtom = atom<UserInfo>({
  key: 'MyProfile',
  default: {
    userId: 0,
    name: '',
    email: '',
    gender: '',
    admin: '',
    provider: '',
    userImage: '',
  },
});
