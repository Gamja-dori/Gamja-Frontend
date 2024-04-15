import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ResumeLongCardData, ResumeSearchData } from 'data-type';

const { persistAtom } = recoilPersist();

export const ResumeSearchAtom = atom<ResumeSearchData>({
  key: 'ResumeSearchAtom',
  default: {
    query: '',
    job_group: '직군',
    job_role: '직무',
    min_career_year: 0,
    max_career_year: 50,
    skills: '[]',
    min_month_pay: 0,
    max_month_pay: 1000,
    commute_type: '희망 근무 형태',
  },
  effects_UNSTABLE: [persistAtom],
});

export const ResumeListAtom = atom<ResumeLongCardData[]>({
  key: 'ResumeListAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
