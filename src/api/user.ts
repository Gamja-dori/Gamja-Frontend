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
