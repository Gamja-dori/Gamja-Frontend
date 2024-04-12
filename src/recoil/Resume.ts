import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ResumeData, ResumeCardData } from 'data-type';

const { persistAtom } = recoilPersist();

export const ResumeAtom = atom<ResumeData>({
  key: 'ResumeAtom',
  default: {
    resume_id: -1,
    keyword: '',
    introduction: '',
    job_group: '',
    job_role: '',
    career_year: -1,
    skills: '',
    careers: [],
    educations: [],
    projects: [],
    portfolios: [],
    duration_start: -1,
    duration_end: -1,
    min_month_pay: -1,
    max_month_pay: -1,
    commute_type: '',
  },
  effects_UNSTABLE: [persistAtom],
});
