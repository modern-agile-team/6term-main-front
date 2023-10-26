import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'psersistState ',
  storage: sessionStorage,
});

export const LoginStateAtom = atom({
  key: 'loginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
