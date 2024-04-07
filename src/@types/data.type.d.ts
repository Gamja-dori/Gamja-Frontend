declare module 'data-type' {
  export type InfoFormData = {
    name: string;
    username: string;
    phone_number: string;
    email: string;
    id?: number;
    is_senior?: boolean;
    is_enterprise?: boolean;

    default_resume?: number;
    business_number?: string;
    is_certified?: boolean;
  };

  export type SignupData = InfoFormData & {
    password: string;
  };

  export type SigninData = {
    id: number;
    name: string;
    is_senior: boolean;
    is_enterprise: boolean;
    access: string;
    refresh: string;
  };

  export type ProfileData = {
    name: string;
    src: string;
    user: string;
  };

  export type ManagementItemData = {
    isVerified: boolean;
    resumeId: number;
    title: string;
    careerYear: number;
    jobGroup: string;
    jobName: string;
    date: string;
    commuteType: string;
    profileImage: string;
    isFinished: boolean;
    reviewId: number;
  };

  export type SigninStateAtomType = {
    isSignin: boolean;
    isSenior: boolean;
  };

  export type ResumeData = {
    resumeId: number;
    userId: number;
    title: string;
    isDefault: boolean;
    isVerified: boolean;
    isSubmitted: boolean;
    // 전문가 소개
    keyword: string;
    introduction: string;
    // 이력서
    jobGroup: string;
    jobName: string;
    careerYear: number;
    skills: string; // 배열 json stringify
    durationStart: number;
    durationEnd: number;
    minPay: number;
    maxPay: number;
    commuteType: number;
  };

  export type ResumeCardData = {
    resumeId: number;
    isDefault: boolean;
    isVerified: boolean;
    careerYear: number;
    commuteType: string;
    title: string;
    jobGroup: string;
    jobName: string;
    updated_at: string; // 이력서 최종 수정일
  };

  export type ResumeLongCardData = {
    resumeId: number;
    isVerified: boolean;
    careerYear: number;
    commuteType: string;
    profileImage: string;
    seniorName: string;
    jobGroup: string;
    jobName: string;
    keyword: string;
    skills: string;
    //comments:
  };

  export type ResumeDetailData = {
    // 인적사항 및 기본 정보
    resumeId: number;
    userId: number;
    profileImage: string;
    seniorName: string;
    careerYear: number;
    commuteType: string;
    isVerified: boolean;
    jobGroup: string;
    jobName: string;
    keyword: string;
    durationStart: number;
    durationEnd: number;
    minPay: number;
    maxPay: number;
    // 전문가 소개
    introduction: string;
    // 이력서
    skills: string; // 배열 json stringify
    careers: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      company_name: string;
      job_name: string;
      performances: {
        id: number;
        start_year_month: string;
        end_year_month: string;
        name: string;
        detail: string;
      }[];
    }[];
    educations: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      school_name: string;
      education_name: string;
    }[];
    projects: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      name: string;
      detail: string;
    }[];
    portfolios?: {
      id: number;
      name: string;
      file: File;
    }[];
  };
}
