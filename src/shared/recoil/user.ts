import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', // 전역에서 고유해야 함
  default: {
    name: '',
    email: '',
    picture: '',
  },
});
