import { SuggestionData } from 'data-type';
import { http } from './http';

// 채용 제안 생성
export const CreateSuggestion = async (suggestion: SuggestionData) => {
  try {
    console.log(suggestion);
    const res = await http.post('/suggests/create/', {
      senior_id: suggestion.senior_id,
      enterprise_id: suggestion.enterprise_id,
      start_year_month: suggestion.start_year_month,
      end_year_month: suggestion.end_year_month,
      commute_type: suggestion.commute_type,
      pay: suggestion.pay,
      duration: suggestion.duration,
      job_description: suggestion.job_description,
      resume_id: suggestion.resume_id,
    });
    return res;
  } catch (err) {
    console.log('채용 제안 실패', err);
  }
};

// 채용 상세 조회
export const GetSuggestionDatail = async (suggest_id: number) => {
  try {
    const res = await http.get(`/suggests/${suggest_id}`);
    return res;
  } catch (err) {
    console.log('채용 제안 상세 조회 실패', err);
  }
};

// 기업 - 채용 제안 목록
export const GetSuggestionList = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/enterprise/${user_id}`);
    return res;
  } catch (err) {
    console.log('채용 제안 목록 조회 실패', err);
  }
};

// 기업 - 결제 X 채용 제안 목록
export const GetUnpaidList = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/enterprise/${user_id}/unpaid`);
    return res;
  } catch (err) {
    console.log('결제 X 채용 제안 목록 조회 실패', err);
  }
};

// 기업 - 결제 O 채용 제안 목록
export const GetPaidList = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/enterprise/${user_id}/paid`);
    return res;
  } catch (err) {
    console.log('결제 O 채용 제안 목록 조회 실패', err);
  }
};

// 시니어 알림
export const GetSeniorNotification = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/notifications/senior/${user_id}`);
    return res;
  } catch (err) {
    console.log('시니어 알림 목록 조회 실패', err);
  }
};

// 기업 알림
export const GetCompanyNotification = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/notifications/enterprise/${user_id}`);
    return res;
  } catch (err) {
    console.log('시니어 알림 목록 조회 실패', err);
  }
};

// 새로운 알림 개수
export const GetNotificationCnt = async (user_id: number) => {
  try {
    const res = await http.get(`/suggests/notifications/count/${user_id}`);
    return res;
  } catch (err) {
    console.log('알림 개수 조회 실패');
  }
};

// 알림 읽음 설정
export const PatchNotification = async (
  user_id: number,
  suggest_id: number,
) => {
  try {
    const res = await http.patch(`/suggests/notifications/`, {
      user_id: user_id,
      suggest_id: suggest_id,
      is_read: true,
    });
    return res;
  } catch (err) {
    console.log('알림 읽음 처리 실패');
  }
};

// 결제
export const PostPay = async (
  suggest_id: number,
  item_name: string,
  total_amount: number,
) => {
  try {
    const res = await http.post('/suggests/pay/', {
      suggest_id: suggest_id,
      item_name: item_name,
      total_amount: total_amount,
    });
    return res;
  } catch (err) {
    console.log('결제 실패', err);
  }
};

// 결제 승인 요청
export const ApprovePay = async (payment_id: number, pg_token: string) => {
  try {
    const res = await http.get(
      `/suggests/pay/approve/${payment_id}/${pg_token}`,
    );
    return res;
  } catch (err) {
    console.log('결제 승인 요청 실패', err);
  }
};

// 결제 여부 조회
export const GetPay = async (suggest_id: number) => {
  try {
    const res = await http.get(`/suggests/pay/${suggest_id}`);
    return res;
  } catch (err) {
    console.log('결제 여부 조회 실패', err);
  }
};

// 채용 상태 업데이트
export const UpdateProgress = async (suggest_id: number, progress: string) => {
  try {
    const res = await http.patch('/suggests/progress/update/', {
      suggest_id: suggest_id,
      progress: progress,
    });
    return res;
  } catch (err) {
    console.log('채용 상태 업데이트 실패', err);
  }
};
