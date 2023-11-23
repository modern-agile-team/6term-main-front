import USERS from '@/apis/user';
import { access } from 'fs';
import { selector, useRecoilValue } from 'recoil';
import { LoginStateAtom } from '../atoms/LoginStateAtom';

// const isLogin = useRecoilValue(LoginStateAtom);

export const MyProfileSelector = selector({
  key: 'MyProfile',
  get: async () => {
    // console.log(isLogin);
    // if (isLogin) {
    const result = await USERS.getMyProfile();
    return result;
    // } else {
    //   return {
    //     id: 0,
    //     name: '',
    //     email: '',
    //     gender: '',
    //     admin: false,
    //     provider: '',
    //     userImage: '',
    //     owner: false,
    //   };
    // }
  },
});
