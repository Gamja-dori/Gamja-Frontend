import { SignupData } from 'data-type';
import { http } from './http';

// 현재 가능
export const SignupSenior = async ({
  username,
  email,
  password,
  name,
  phone_number,
}: SignupData) => {
  try {
    const res = await http.post('/users/signup/', {
      user: {
        username: username,
        email: email,
        password: password,
      },
      name: name,
      phone_number: phone_number,
    });
    console.log('회원가입 성공');
    return res;
  } catch (err) {
    console.log('회원가입 에러', err);
  }
};

// 현재 가능
export const SigninSenior = async (username: string, password: string) => {
  try {
    const res = await http.post('/users/login/', {
      username: username,
      password: password,
    });
    console.log('로그인 성공');
    return res;
  } catch (err) {
    console.log('로그인 에러', err);
  }
};

// 현재 가능
export const GetSeniorProfile = async (id: number) => {
  try {
    const res = await http.get(`/users/${id}`);
    console.log('시니어 회원 정보 조회 성공');
    return res;
  } catch (err) {
    console.log('시니어 정보 조회 에러', err);
  }
};

export const EditSeniorProfile = async (
  id: number,
  password: string,
  phone_number: string,
  email: string,
) => {
  try {
    const res = await http.put(`/users/${id}/update`, {
      id: id,
      password: password,
      phone_number: phone_number,
      email: email,
    });
    console.log('시니어 정보 수정 성공');
    return res;
  } catch (err) {
    console.log('시니어 정보 수정 에러', err);
  }
};
