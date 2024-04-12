import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { SigninData, SigninStateAtomType } from 'data-type';

const { persistAtom } = recoilPersist();

export const SigninAtom = atom<SigninData>({
  key: 'SigninAtom',
  default: {
    id: -1,
    name: '',
    is_senior: false,
    is_enterprise: false,
    access: '',
    refresh: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const SigninStateAtom = atom<SigninStateAtomType>({
  key: 'SigninStateAtom',
  default: {
    isSignin: false,
    isSenior: true,
  },
  effects_UNSTABLE: [persistAtom],
});
