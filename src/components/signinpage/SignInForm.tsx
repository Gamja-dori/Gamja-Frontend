import { GetCompanyProfile, SigninCompany } from 'api/company_user';
import { GetSeniorProfile, SigninSenior } from 'api/senior_user';
import { GetProfile } from 'api/user';
import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import KakaoBtn from 'components/_common/KakaoBtn';
import { InfoFormData, SigninData } from 'data-type';
import { UserProps } from 'props-type';
import { useSetRecoilState } from 'recoil';
import { SigninStateAtom, SigninAtom } from 'recoil/Signin';
import { UserInfoAtom, UserProfileAtom } from 'recoil/UserProfile';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const SignInForm = ({ user }: UserProps) => {
  const setSigninAtom = useSetRecoilState(SigninAtom);
  const setSigninStateAtom = useSetRecoilState(SigninStateAtom);
  const setUserProfileAtom = useSetRecoilState(UserProfileAtom);
  const setUserInfoAtom = useSetRecoilState(UserInfoAtom);

  const navigate = useNavigate();

  const [alertText, setAlertText] = useState('');

  // make input field empty when user is changed
  useEffect(() => {
    setUsername('');
    setPw('');
    setAlertText('');
  }, [user]);

  // input useStates
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');

  // check username or pw is filled
  const isFilled = () => {
    if (!username) {
      setAlertText('아이디를 입력해 주세요.');
      return false;
    }
    if (!pw) {
      setAlertText('비밀번호를 입력해 주세요.');
      return false;
    }
    setAlertText('');
    return true;
  };

  // signin button click event handler
  const handleSubmit = async () => {
    let data;
    if (isFilled()) {
      // API connection is required
      if (user === 'senior') {
        const res = await SigninSenior(username, pw);
        data = res?.data;
        // saveUserData(data);
      } else if (user === 'company') {
        const res = await SigninCompany(username, pw);
        data = res?.data;
      }
      if (data) {
        saveSigninData(data);
      } else {
        setAlertText('아이디 또는 비밀번호를 잘못 입력했습니다.');
      }
    }
  };

  // get user profile image api
  const getProfile = async (id: number) => {
    const res = await GetProfile(id);
    const data = res?.data;
    setUserProfileAtom('data:image/;base64,' + data.image);
  };

  // get senior user information data
  const getSeniorData = async (id: number) => {
    const res = await GetSeniorProfile(id);
    const data = res?.data;
    saveUserData(data);
  };

  // get senior user information data
  const getCompanyData = async (id: number) => {
    const res = await GetCompanyProfile(id);
    const data = res?.data;
    saveUserData(data);
  };

  // save into recoil atom
  const saveSigninData = (data: SigninData) => {
    if (data) {
      setSigninAtom({
        id: data.id,
        name: data.name,
        is_senior: data.is_senior,
        is_enterprise: data.is_enterprise,
        access: data.access,
        refresh: data.refresh,
      });
      window.localStorage.setItem('access', data.access);
      window.localStorage.setItem('refresh', data.refresh);
      setSigninStateAtom({
        isSignin: true,
        isSenior: data.is_senior,
      });
      localStorage.setItem(
        'expireAt',
        moment().add(2, 'hour').format('yyyy-MM-DD HH:mm:ss'),
      );

      // call user information data api
      const id = data.id;
      const isSenior = data.is_senior;
      getProfile(id);
      if (isSenior) {
        getSeniorData(id);
      } else {
        getCompanyData(id);
      }
      navigate(-1);
    }
  };

  const saveUserData = (data: InfoFormData) => {
    if (data) {
      setUserInfoAtom({
        id: data.id,
        name: data.name,
        username: data.username,
        phone_number: data.phone_number,
        email: data.email,
        is_senior: data.is_senior,
        is_enterprise: data.is_enterprise,
        default_resume: data.default_resume ?? -1,
        business_number: data.business_number ?? '',
        is_certified: data.is_certified ?? false,
      });
    }
  };

  // mini btns click event handler
  const handleBtnClick = (path: string) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="signin-form">
      <div className="input-signin-div">
        <Input
          label="아이디"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          label="비밀번호"
          onChange={(e) => setPw(e.target.value)}
          type="password"
          isAlertRequired={false}
          value={pw}
        />
        <p className="signin-alert">{alertText}</p>
      </div>
      <div className="signin-btn-wrapper">
        <Btn
          label="로그인"
          onClick={handleSubmit}
          styleClass="dark-green long-btn"
        />
        <KakaoBtn />
      </div>
      <div className="signin-mini-btns">
        <button onClick={() => handleBtnClick('/find/id/form')}>
          아이디 찾기
        </button>
        <div className="line"></div>
        <button onClick={() => handleBtnClick('/find/pw/form')}>
          비밀번호 찾기
        </button>
        <div className="line"></div>
        <button
          className="signup"
          // onClick={() => handleBtnClick('/sign-up/verification')} temporary setting
          onClick={() => handleBtnClick('/sign-up/user-type')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
