import { create } from 'zustand';

interface UserStore {
  ID: string;
  PW: string;
  NickName: string;
  setID: (value: string) => void;
  setPW: (value: string) => void;
  setNIckName: (value: string) => void;
}

const setUserStore = create<UserStore>()((set, get) => ({
  ID: '',
  PW: '',
  NickName: '',
  setID: (value: string) =>
    set({
      ID: value,
    }),
  setPW: (value: string) =>
    set({
      PW: value,
    }),
  setNIckName: (value: string) =>
    set({
      NickName: value,
    }),
}));

export default setUserStore;
