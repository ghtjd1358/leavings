import { create } from 'zustand';

interface UserStore {
  user_ID: string;
  user_PW: string;
  user_NickName: string;
  setID: (value: string) => void;
  setPW: (value: string) => void;
  setNickName: (value: string) => void;
}

const setUserStore = create<UserStore>()((set, get) => ({
  user_ID: '',
  user_PW: '',
  user_NickName: '',
  setID: (value: string) =>
    set({
      user_ID: value,
    }),
  setPW: (value: string) =>
    set({
      user_PW: value,
    }),
  setNickName: (value: string) =>
    set({
      user_NickName: value,
    }),
}));

export default setUserStore;
