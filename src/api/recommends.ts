import { http } from './http';
import { ResumeSearchData } from 'data-type';

// 지금 떠오르는 인재 조회
export const GetMainSeniorList = async () => {
  try {
    const res = await http.get('/recommends/main/');
    console.log('지금 떠오르는 인재 조회 성공', res);
    return res;
  } catch (err) {
    console.log('지금 떠오르는 인재 조회 실패', err);
  }
};

// 추천 결과 생성
export const PostRecommendation = async (
  user_id: number,
  search: ResumeSearchData,
) => {
  try {
    const res = await http.post('/recommends/search/', {
      user_id: user_id,
      query: search.query,
      job_group: search.job_group === '직군' ? '' : search.job_group,
      job_role: search.job_role === '직무' ? '' : search.job_role,
      min_career_year: search.min_career_year,
      max_career_year: search.max_career_year,
      skills: search.skills,
      min_month_pay: search.min_month_pay,
      max_month_pay: search.max_month_pay,
      commute_type:
        search.commute_type === '희망 근무 형태' ? '' : search.commute_type,
    });
    console.log('추천 결과 생성 성공', res);
    return res;
  } catch (err) {
    console.log('추천 결과 생성 실패', err);
  }
};

// 인재 목록 필터링
export const FilterSeniorList = async (
  user_id: number,
  search: ResumeSearchData,
) => {
  try {
    const res = await http.post('/recommends/filter/', {
      user_id: user_id,
      query: search.query,
      job_group: search.job_group === '직군' ? '' : search.job_group,
      job_role: search.job_role === '직무' ? '' : search.job_role,
      min_career_year: search.min_career_year,
      max_career_year: search.max_career_year,
      skills: search.skills,
      min_month_pay: search.min_month_pay,
      max_month_pay: search.max_month_pay,
      commute_type:
        search.commute_type === '희망 근무 형태' ? '' : search.commute_type,
    });
    console.log('필터링 결과 생성 성공', res);
    return res;
  } catch (err) {
    console.log('필터링 결과 생성 실패', err);
  }
};

// 이력서(전문가) 상세 조회
export const GetResumeDetail = async (resume_id: number) => {
  try {
    const res = await http.get(`/recommends/detail/${resume_id}/`);
    console.log('전문가 상세 조회 성공', res);
    return res;
  } catch (err) {
    console.log('전문가 상세 조회 실패', err);
  }
};
