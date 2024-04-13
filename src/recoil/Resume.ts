import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ResumeData } from 'data-type';

const { persistAtom } = recoilPersist();

export const ResumeAtom = atom<ResumeData>({
  key: 'ResumeAtom',
  default: {
    user_id: -1,
    resume_id: -1,
    is_submitted: false,
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
