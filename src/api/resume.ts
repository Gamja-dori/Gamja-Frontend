import { ResumeData } from 'data-type';
import { http } from './http';

// 이력서 생성
export const CreateResume = async (user_id: number) => {
  try {
    const res = await http.post('/resumes/create/', {
      user_id: user_id,
    });
    console.log('이력서 생성 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 생성 실패', err);
  }
};

// 이력서 삭제
export const DeleteResume = async (user_id: number, resume_id: number) => {
  try {
    const res = await http.delete(`/resumes/delete/${user_id}/${resume_id}/`);
    console.log('이력서 삭제 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 삭제 실패', err);
  }
};

// 이력서 업데이트
export const UpdateResume = async (
  user_id: number,
  resume_id: number,
  resume: ResumeData,
) => {
  try {
    const res = await http.put(`/resumes/edit/${user_id}/${resume_id}/`, {
      keyword: resume.keyword,
      introduction: resume.introduction,
      job_group: resume.job_group,
      job_role: resume.job_role,
      career_year: resume.career_year,
      skills: resume.skills,
      careers: resume.careers,
      educations: resume.educations,
      projects: resume.projects,
      portfolios: resume.portfolios,
      duration_start: resume.duration_start,
      duration_end: resume.duration_end,
      min_month_pay: resume.min_month_pay,
      max_month_pay: resume.max_month_pay,
      commute_type: resume.commute_type,
    });
    console.log('이력서 업데이트 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 업데이트 실패', err);
  }
};

// 이력서 상세 조회
export const GetResume = async (user_id: number, resume_id: number) => {
  try {
    const res = await http.get(`/resumes/detail/${user_id}/${resume_id}`);
    console.log('이력서 상세 조회 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 상세 조회 실패', err);
  }
};

// 이력서 목록 조회
export const GetResumeList = async (user_id: number) => {
  try {
    const res = await http.get(`/resumes/list/${user_id}`);
    console.log('이력서 목록 조회 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 목록 조회 실패', err);
  }
};

// 이력서 제목 변경
export const PatchResumeTitle = async (
  user_id: number,
  resume_id: number,
  title: string,
) => {
  try {
    const res = await http.patch('/resumes/new-title/', {
      user_id: user_id,
      resume_id: resume_id,
      title: title,
    });
    console.log('이력서 제목 변경 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 제목 변경 실패', err);
  }
};

// 기본 이력서 변경
export const PatchDefaultResume = async (
  user_id: number,
  resume_id: number,
) => {
  try {
    const res = await http.patch('/resumes/set-default/', {
      user_id: user_id,
      resume_id: resume_id,
    });
    console.log('기본 이력서 변경 성공', res);
    return res;
  } catch (err) {
    console.log('기본 이력서 변경 실패', err);
  }
};

// 이력서 인재풀 등록
export const SubmitResume = async (user_id: number, resume_id: number) => {
  try {
    const res = await http.patch('/resumes/submit/', {
      user_id: user_id,
      resume_id: resume_id,
    });
    console.log('이력서 인재풀 등록 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 인재풀 등록 실패', err);
  }
};

// 경력사항 등 생성
export const CreateResumeDetail = async (
  user_id: number,
  resume_id: number,
  detail_type: string,
  career_id?: number,
) => {
  try {
    const res = await http.post('/resumes/create/detail/', {
      user_id: user_id,
      resume_id: resume_id,
      detail_type: detail_type,
      career_id: career_id,
    });
    console.log('이력서 세부 생성 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 세부 생성 실패', err);
  }
};

// 경력사항 등 삭제
export const DeleteResumeDetail = async (
  user_id: number,
  resume_id: number,
  detail_type: string,
  detail_id: number,
  career_id?: number,
) => {
  try {
    const res = await http.delete('/resumes/delete/detail/', {
      data: {
        user_id: user_id,
        resume_id: resume_id,
        detail_type: detail_type,
        detail_id: detail_id,
        career_id: career_id,
      },
    });
    console.log('이력서 세부 삭제 성공', res);
    return res;
  } catch (err) {
    console.log('이력서 세부 삭제 실패', err);
  }
};

// 기존 이력서 정보 추출
export const ExtractPriorResume = async (
  user_id: number,
  resume_id: number,
  prior_resume_name: string,
  prior_resume_file: File,
) => {
  try {
    const res = await http.post(
      `/resumes/prior-resume/${user_id}/${resume_id}/`,
      {
        prior_resume_name: prior_resume_name,
        prior_resume_file: prior_resume_file,
      },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
    console.log('기존 이력서 정보 추출 성공', res);
    return res;
  } catch (err) {
    console.log('기존 이력서 정보 추출 실패', err);
  }
};
