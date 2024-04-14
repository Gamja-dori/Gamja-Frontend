import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ResumeLongCardData, ResumeSearchData } from 'data-type';

const { persistAtom } = recoilPersist();

export const ResumeSearchAtom = atom<ResumeSearchData>({
  key: 'ResumeSearchAtom',
  default: {
    query: '',
    job_group: '',
    job_role: '',
    min_career_year: 0,
    max_career_year: 50,
    skills: '[]',
    min_month_pay: 0,
    max_month_pay: 1000,
    commute_type: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export const ResumeListAtom = atom<ResumeLongCardData[]>({
  key: 'ResumeListAtom',
  default: [],
});
