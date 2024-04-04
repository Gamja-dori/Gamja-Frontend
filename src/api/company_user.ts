import { SignupData } from 'data-type';
import { http } from './http';

export const SignupCompany = async ({
  username,
  email,
  password,
  name,
  phone_number,
  business_number,
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
      business_number: business_number,
    });
    console.log('회원가입 성공');
    return res;
  } catch (err) {
    console.log('회원가입 에러', err);
  }
};

export const SigninCompany = async (username: string, password: string) => {
  try {
    const res = await http.post('/users/enterprise/login/', {
      username: username,
      password: password,
    });
    console.log('로그인 성공');
    return res;
  } catch (err) {
    console.log('로그인 에러', err);
  }
};

export const GetCompanyProfile = async (username: string) => {
  try {
    const res = await http.get(`/users/enterprise/${username}`);
    console.log('기업 회원 정보 조회 성공');
    return res;
  } catch (err) {
    console.log('기업 정보 조회 에러', err);
  }
};
