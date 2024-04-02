declare module 'data-type' {
  export type InfoFormData = {
    name: string;
    id: string;
    phone: string;
    email: string;
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
