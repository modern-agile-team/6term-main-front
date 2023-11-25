import USERS from '@/apis/user';
import { selector } from 'recoil';

export const MyProfileSelector = selector({
  key: 'MyProfile',
  get: async () => {
    const result = await USERS.getMyProfile();
    return result;
  },
});
