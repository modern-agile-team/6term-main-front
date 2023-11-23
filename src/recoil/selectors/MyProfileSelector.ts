import USERS, { UserInfo } from '@/apis/user';
import { selector, selectorFamily } from 'recoil';

export const MyProfileSelector = selector({
  key: 'MyProfile',
  get: async () => {
    const result = await USERS.getMyProfile();
    return result;
  },
});
