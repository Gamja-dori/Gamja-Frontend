declare module 'data-type' {
  export type InfoFormData = {
    name: string;
    username: string;
    phone_number: string;
    email: string;
  };

  export type SignupData = InfoFormData & {
    password: string;
    business_number?: string;
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
}
