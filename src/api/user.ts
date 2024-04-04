import { http } from './http';

export const Logout = async () => {
  try {
    const res = await http.delete('/users/logout');
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
