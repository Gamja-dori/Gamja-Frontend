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
    company?: string;
  };

  export type SigninData = {
    id: number;
    name: string;
    is_senior: boolean;
    is_enterprise: boolean;
    profile_image: string;
    access: string;
    refresh: string;
  };

  export type ManagementItemData = {
    suggest_id: number;
    is_verified: boolean;
    resume_id: number;
    name: string;
    career_year: number;
    job_group: string;
    job_role: string;
    date: string;
    commute_type: string;
    profile_image: string;
    progress: string;
  };

  export type SigninStateAtomType = {
    isSignin: boolean;
    isSenior: boolean;
  };

  export type ResumeData = {
    [key: string]: any;
    successfully_get: boolean;
    user_id: number;
    resume_id: number;
    is_submitted: boolean;
    // 전문가 소개
    keyword: string;
    introduction: string;
    // 이력서
    job_group: string;
    job_role: string;
    career_year: number;
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
        performance_name: string;
        performance_detail: string;
      }[];
    }[];
    educations: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      education_info: string;
      education_name: string;
    }[];
    projects: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      project_name: string;
      project_detail: string;
    }[];
    portfolios: {
      id: number;
      name: string;
      portfolio_file: File;
    }[];
    duration_start: number;
    duration_end: number;
    min_month_pay: number;
    max_month_pay: number;
    commute_type: string;
  };

  export type ResumeCardData = {
    id: number;
    is_default: boolean;
    is_verified: boolean;
    career_year: number;
    commute_type: string;
    title: string;
    job_group: string;
    job_role: string;
    updated_at: string; // 이력서 최종 수정일
  };

  export type ResumeLongCardData = {
    resume_id: number;
    is_verified: boolean;
    keyword: string;
    job_group: string;
    job_role: string;
    career_year: number;
    skills: string;
    commute_type: string;
    profile_image: string;
    name: string;
    comments?: { commentType: number; comments: string[] }[];
  };

  export type ResumeSearchData = {
    query: string;
    job_group: string;
    job_role: string;
    skills: string;
    min_career_year: number;
    max_career_year: number;
    duration_start: number;
    duration_end: number;
    min_month_pay: number;
    max_month_pay: number;
    commute_type: string;
  };

  export type ResumeDetailData = ResumeData & {
    // 인적사항 및 기본 정보
    profile_image: string;
    name: string;
    is_verified: boolean;
  };

  export type ReviewData = {
    review_id: number;
    reviewer_id: number;
    reviewer_name: string;
    reviewer_image: string;
    job_group: string;
    job_role: string;
    start_year_month: string;
    end_year_month: string;
    score: number;
    created_at: string;
    comment: string;
    tags: string;
  };

  export type ReviewListData = {
    senior_id: number;
    reviews: ReviewData[];
    average_score: number;
  };

  export type SuggestionData = {
    senior_id: number;
    enterprise_id: number;
    start_year_month: string;
    end_year_month: string;
    commute_type: string;
    pay: number;
    duration: number;
    job_description: string;
    resume_id: number;
  };

  export type NotificationData = {
    suggest_id: number;
    resume_id: number;
    is_read: boolean;
    profile_image: string;
    progress: string;

    company?: string;
    name?: string;
  };

  export type ContactData = {
    name: string;
    phone_number: string;
    email: string;
  };

  export type SuggestDetailData = {
    suggest_id: number;
    commute_type: string;
    start_year_month: string;
    end_year_month: string;
    pay: number;
    duration: number;
    job_description: string;
    progress: string;
    company: string;
    profile_image: string;
  };
}
