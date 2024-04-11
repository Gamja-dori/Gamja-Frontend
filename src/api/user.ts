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
