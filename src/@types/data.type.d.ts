declare module 'data-type' {
  export type InfoFormData = {
    name: string;
    username: string;
    phone_number: string;
    email: string;
  };

  export type SignupData = InfoFormData & {
    password: string;
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
