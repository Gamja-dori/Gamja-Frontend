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
}
