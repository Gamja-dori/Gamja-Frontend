import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { InfoFormData } from 'data-type';

const { persistAtom } = recoilPersist();

export const UserInfoAtom = atom<InfoFormData>({
  key: 'UserInfoAtom',
  default: {
    id: -1,
    name: '',
    username: '',
    phone_number: '',
    email: '',
    is_senior: false,
    is_enterprise: false,
    default_resume: -1,
    business_number: '',
    is_certified: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const UserProfileAtom = atom({
  key: 'UserProfileAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
