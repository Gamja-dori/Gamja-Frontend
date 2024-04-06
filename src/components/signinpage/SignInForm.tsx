import { SigninCompany } from 'api/company_user';
import { SigninSenior } from 'api/senior_user';
import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import KakaoBtn from 'components/_common/KakaoBtn';
import { SigninData } from 'data-type';
import { UserProps } from 'props-type';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { useNavigate } from 'react-router-dom';
import { SigninStateAtom, SigninAtom } from 'recoil/Signin';
import moment from 'moment';

const SignInForm = ({ user }: UserProps) => {
  const setSigninAtom = useSetRecoilState(SigninAtom);
  const setSigninStateAtom = useSetRecoilState(SigninStateAtom);

  const navigate = useNavigate();

  const [alertText, setAlertText] = useState('');

  // make input field empty when user is changed
  useEffect(() => {
    setId('');
    setPw('');
    setAlertText('');
  }, [user]);

  // input useStates
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // check id or pw is filled
  const isFilled = () => {
    if (!id) {
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
    if (isFilled()) {
      // API connection is required
      if (user === 'senior') {
        const res = await SigninSenior(id, pw);
        const data = res?.data;
        saveData(data);
      } else if (user === 'company') {
        const res = await SigninCompany(id, pw);
        const data = res?.data;
        saveData(data);
      }
    }
  };

  // save into recoil atom
  const saveData = (data: SigninData) => {
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
        moment().add(2, 'minute').format('yyyy-MM-DD HH:mm:ss'),
      );
      navigate(-1);
    }
  };

  // mini btns click event handler
  const handleBtnClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="signin-form">
      <div className="input-signin-div">
        <Input
          label="아이디"
          onChange={(e) => setId(e.target.value)}
          value={id}
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
          onClick={() => handleBtnClick('/sign-up/verification')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
