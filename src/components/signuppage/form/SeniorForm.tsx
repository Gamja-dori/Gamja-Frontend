import Terms from './Terms';
import Input from 'components/_common/Input';
import Btn from 'components/_common/Btn';
import { validateId, validatePw } from '../../utils/ValidationUtils';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupSenior } from 'api/senior_user';
import { CheckUsername } from 'api/user';

const SeniorForm = () => {
  const navigate = useNavigate();

  // temp settings
  const [name, setName] = useState('');
  const [phone_number, setPhone_number] = useState('');

  // terms agree value useState
  const [agree, setAgree] = useState(false);

  // input value useStates
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [email, setEmail] = useState('');

  // alert-text value useStates
  const [idAlert, setIdAlert] = useState('6~12자 이내의 영문, 숫자만 가능');
  const [pwAlert, setPwAlert] = useState(
    '8~12자 이내의 영문, 숫자, 특수기호 중 2종류 조합',
  );
  const [pwCheckAlert, setPwCheckAlert] = useState('');

  // isWrong props useStates
  const [isIdWrong, setIsIdWrong] = useState(false);
  const [isPwWrong, setIsPwWrong] = useState(false);
  const [isPwCheckWrong, setIsPwCheckWrong] = useState(false);

  // id duplication check useState
  const [idDuplCheck, setIdDuplCheck] = useState(false);

  // validation of id
  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    setIdDuplCheck(false);

    if (validateId(value)) {
      setIdAlert('6~12자 이내의 영문, 숫자만 가능');
      setIsIdWrong(false);
    } else {
      setIdAlert('6~12자 이내의 영문, 숫자로 이루어져야 합니다.');
      setIsIdWrong(true);
    }
  };

  // validation of pw
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPw(value);

    if (validatePw(value)) {
      setPwAlert('8~12자 이내의 영문, 숫자, 특수기호 중 2종류 조합');
      setIsPwWrong(false);
    } else {
      setPwAlert(
        '8~20자 이내의 영문, 숫자, 특수기호 중 2종류로 조합되어야 합니다.',
      );
      setIsPwWrong(true);
    }
  };

  // validation of pwCheck
  useEffect(() => {
    if (pwCheck === pw || !pwCheck) {
      setIsPwCheckWrong(false);
      setPwCheckAlert('');
    } else {
      setIsPwCheckWrong(true);
      setPwCheckAlert('비밀번호가 일치하지 않습니다.');
    }
  }, [pwCheck, pw]);

  // duplicate check button click event handler
  const handleDuplClick = async () => {
    if (!id || isIdWrong) {
      return;
    }
    const res = await CheckUsername(id);
    console.log(res);
    const data = res?.data;
    if (data[0]) {
      setIdAlert('이미 사용 중인 아이디입니다.');
      setIdDuplCheck(false);
      setIsIdWrong(true);
    } else {
      setIdAlert('사용 가능한 아이디입니다.');
      setIdDuplCheck(true);
      setIsIdWrong(false);
    }
  };

  // check id or idDupleCheck or pw or pwCheck is filled
  const isFilled = () => {
    if (!id) {
      setIsIdWrong(true);
    }
    if (!idDuplCheck) {
      setIsIdWrong(true);
    }
    if (!pw) {
      setIsPwWrong(true);
    }
    if (!pwCheck) {
      setIsPwCheckWrong(true);
    }

    if (id && idDuplCheck && pw && pwCheck) {
      return true;
    }
    setIdAlert('6~12자 이내의 영문, 숫자만 가능');
    return false;
  };

  // signup button click event handler
  const handleSignupClick = async () => {
    if (isFilled()) {
      if (agree && !isIdWrong && idDuplCheck && !isPwWrong && !isPwCheckWrong) {
        const res = await SignupSenior({
          username: id,
          email: email,
          password: pw,
          name: name,
          phone_number: phone_number,
        });
        if (res?.status === 201) {
          navigate('/sign-up/complete', { replace: true });
        }
      } else {
        alert('회원가입 약관 동의 및 정보 작성을 완료해 주세요.');
      }
    } else {
      alert('회원가입 약관 동의 및 정보 작성을 완료해 주세요.');
    }
  };

  return (
    <div className="signup-form-div">
      <Terms agree={agree} setAgree={setAgree} />
      <div className="input-div inputs-div">
        {/* temporary setting */}
        {/* <Input label="이름" defaultValue={data.name} disabled={true} /> */}
        <Input label="이름" onChange={(e) => setName(e.target.value)} />
        <div className="input-div">
          <Input
            label="아이디"
            onChange={handleId}
            isRequired={true}
            isWrong={isIdWrong}
            alertText={idAlert}
          />
          <Btn
            label="중복 확인"
            onClick={handleDuplClick}
            styleClass="short-btn dark-green"
          />
        </div>
        <Input
          label="비밀번호"
          onChange={handlePw}
          isRequired={true}
          type="password"
          isWrong={isPwWrong}
          alertText={pwAlert}
        />
        <Input
          label="비밀번호 확인"
          onChange={(e) => setPwCheck(e.target.value)}
          isRequired={true}
          type="password"
          isWrong={isPwCheckWrong}
          alertText={pwCheckAlert}
        />
        {/* temporary setting */}
        {/* <Input
          label="전화번호"
          defaultValue={data.phone_number}
          disabled={true}
        /> */}
        <Input
          label="전화번호"
          onChange={(e) => setPhone_number(e.target.value)}
        />
        <Input label="이메일" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => navigate('/sign-up/user-type')}
          styleClass="abreast-btn white"
        />
        <Btn
          label="회원가입"
          onClick={handleSignupClick}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default SeniorForm;
