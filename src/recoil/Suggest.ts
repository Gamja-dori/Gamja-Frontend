import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const SuggestIdAtom = atom({
  key: 'SuggestIdAtom',
  default: -1,
});

export const PaymentIdAtom = atom({
  key: 'PaymentIdAtom',
  default: -1,
  effects_UNSTABLE: [persistAtom],
});
