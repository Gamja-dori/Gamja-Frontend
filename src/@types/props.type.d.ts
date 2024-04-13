declare module 'props-type' {
  export type ChildrenProps = {
    children: React.ReactNode;
  };

  export type BtnProps = {
    label: string;
    styleClass: string;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  };

  export type InputProps = {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    styleClass?: string;
    isWrong?: boolean;
    alertText?: string;
    defaultValue?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    isAlertRequired?: boolean;
  };

  export type LabelProps = {
    label: string;
    isRequired?: boolean;
  };

  export type ContentProps = {
    svg: string;
    title: string;
    content: string;
    styleClass: string;
    subtitle?: string;
    onClick?: () => void;
  };

  export type TitleProps = {
    label: string;
  };

  // UserTag, SignInForm, TypeContent props
  export type UserProps = {
    user: string;
  };

  export type ModalProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type ResumeCardProps = {
    isDefault?: boolean;
    isVerified?: boolean;
    resumeId: number;
    title?: string; // 이력서 제목
    jobGroup: string;
    jobName: string;
    date?: string; // 이력서 최종 수정일
    careerYear: number;
    commuteType: string;
    resumeList?: ResumeCardData[];
    setResumeList?: React.Dispatch<React.SetStateAction<ResumeCardData[]>>;
  };

  export type ResumeLongCardProps = ResumeCardProps & {
    seniorName: string;
    profileImage: string;
    skills?: string[];
    recommendComments?: { commentType: number; comments: string[] }[];
    needSubinfo?: boolean;
    keyword?: string;
    durationStart?: number;
    durationEnd?: number;
    payStart?: number;
    payEnd?: number;
  };

  export type SeniorDetailProps = {
    skills: string[];
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

  export type SeniorIntroProps = {
    markdownText: string;
  };

  export type ResumeEditProps = {
    isSubmitted?: boolean;
  };

  export type RecordProps = {
    isMini?: boolean;
    needDetail?: boolean;
    firstPlaceholder: string;
    secondPlaceholder: string;
  };

  export type ShowRecordProps = {
    recordId: number;
    firstName: string;
    secondName: string;
    durationStart: string;
    durationEnd: string;
    hasDetail?: boolean;
    details?: {
      detailId: number;
      detailName: string;
      detailContents: string;
      durationStart: string;
      durationEnd: string;
    }[];
  };

  export type PaySliderProps = {
    isPay?: boolean;
    isCareer?: boolean;
    isDuration?: boolean;
  };

  export type BannerProps = {
    image: string;
    title?: string;
    content?: string;
    subContent?: string;
    styleClass?: string;
  };

  export type TermsProps = {
    agree: boolean;
    setAgree: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type EditModalProps = {
    userId: number;
    resumeId: number;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    resumeList?: ResumeCardData[];
    setResumeList?: React.Dispatch<React.SetStateAction<ResumeCardData[]>>;
  };

  export type HamburgerProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLogin: boolean;
  };

  export type HamburgerAccordionProps = {
    title: string;
    icon: string;
    subMenus: {
      subMenu: string;
      onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    }[];
    onTitleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  };

  export type NoticeListProps = {
    isOld: boolean;
  };

  export type NoticeItemProps = {
    name: string;
    src: string;
    type: string;
  };

  export type ManagementListProps = {
    option: string;
    searchValue: string;
  };

  // ManagementSearch, ManagementSelection props
  export type ManagementProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };

  export type ManagementItemProps = {
    item: ManagementItemData;
  };

  export type SuggestionProps = {
    resumeId: Readonly<Params<string>>;
    isEdit?: boolean;
  };
}
