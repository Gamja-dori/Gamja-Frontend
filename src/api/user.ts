import { http } from './http';

export const Signout = async () => {
  try {
    const res = await http.post('/users/logout/');
    console.log('로그아웃 성공');
    return res;
  } catch (err) {
    console.log('로그아웃 에러', err);
  }
};

export const DeleteUser = async (id: number) => {
  try {
    const res = await http.delete(`/users/${id}`);
    console.log('탈퇴 성공');
    return res;
  } catch (err) {
    console.log('탈퇴 에러');
  }
};

export const CheckUsername = async (username: string) => {
  try {
    const res = await http.get(`/users/check/${username}`);
    console.log('아이디 중복 체크 성공');
    return res;
  } catch (err) {
    console.log('아이디 중복 체크 실패');
  }
};

export const GetProfile = async (id: number) => {
  try {
    const res = await http.get(`/users/profile/${id}`);
    console.log('프로필 사진 조회 성공', res);
    return res;
  } catch (err) {
    console.log('프로필 사진 조회 실패', err);
  }
};

export const ChangeProfile = async (id: number, form: FormData) => {
  try {
    const res = await http.post(`/users/profile/${id}/`, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('프로필 변경 성공', res);
    return res;
  } catch (err) {
    console.log('프로필 변경 실패', err);
  }
};

export const CreateReview = async (
  suggest: number,
  senior: number,
  reviewer: number,
  score: number,
  tags: string,
  comment: string,
) => {
  try {
    const res = await http.post('/users/review/create/', {
      suggest: suggest,
      senior: senior,
      reviewer: reviewer,
      score: score,
      tags: tags,
      comment: comment,
    });
    return res;
  } catch (err) {
    console.log('리뷰 생성 실패', err);
  }
};

export const GetReview = async (senior_id: number) => {
  try {
    const res = await http.get(`/users/review/list/${senior_id}`);
    return res;
  } catch (err) {
    console.log('리뷰 조회 실패', err);
  }
};

export const PutUserInfo = async (
  id: number,
  email: string,
  password: string,
  phone_number: string,
) => {
  const user: any = {};
  if (password.length > 0) user.password = password;
  user.email = email;
  try {
    const res = await http.put(`/users/${id}/`, {
      user,
      phone_number: phone_number,
    });
    return res;
  } catch (err) {
    console.log('회원 정보 수정 실패', err);
  }
};
