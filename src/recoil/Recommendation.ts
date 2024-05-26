import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import {
  ResumeLongCardData,
  ResumeSearchData,
  ResumeDetailData,
} from 'data-type';

const { persistAtom } = recoilPersist();

export const SearchStateAtom = atom<boolean>({
  key: 'SearchStateAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const ResumeSearchAtom = atom<ResumeSearchData>({
  key: 'ResumeSearchAtom',
  default: {
    query: '',
    job_group: '직군',
    job_role: '직무',
    skills: '[]',
    min_career_year: 0,
    max_career_year: 50,
    duration_start: 0,
    duration_end: 12,
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

export const ResumeDetailAtom = atom<ResumeDetailData>({
  key: 'ResumeDetailAtom',
  default: {
    successfully_get: false,
    user_id: -1,
    resume_id: -1,
    is_submitted: true,
    keyword: '',
    introduction: '',
    job_group: '',
    job_role: '',
    career_year: -1,
    skills: '[]',
    careers: [],
    educations: [],
    projects: [],
    portfolios: [],
    duration_start: -1,
    duration_end: -1,
    min_month_pay: -1,
    max_month_pay: -1,
    commute_type: '',
    profile_image: '',
    review_avg: 0,
    name: '',
    is_verified: false,
  },
  effects_UNSTABLE: [persistAtom],
});
