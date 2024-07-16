import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';

import { useEffect, useState } from 'react';
import { parsePhoneNumber } from 'components/utils/PhoneUtils';
import { validatePw } from 'components/utils/ValidationUtils';
import { useRecoilState } from 'recoil';
import { UserInfoAtom } from 'recoil/UserProfile';
import { PutUserInfo } from 'api/user';

const InfoEdit = () => {
  const [phone, setPhone] = useState('');

  // phone edit button click useState
  const [phoneEdit, setPhoneEdit] = useState(false);

  const [userInfo, setUserInfo] = useRecoilState(UserInfoAtom);

  useEffect(() => {
    setEmail(userInfo.email);
    setPhone(userInfo.phone_number);
  }, []);

  // input value useStates
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [email, setEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [parsedPhone, setParsedPhone] = useState('');
  const [certNum, setCertNum] = useState('');

  // alert-text value useStates
  const [pwAlert, setPwAlert] = useState('');
  const [pwCheckAlert, setPwCheckAlert] = useState('');

  // isWrong props useStates
  const [isPwWrong, setIsPwWrong] = useState(false);
  const [isPwCheckWrong, setIsPwCheckWrong] = useState(false);
  const [isPhoneNumWrong, setIsPhoneNumWrong] = useState(false);

  // pw input event handler
  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPw(value);

    if (validatePw(value)) {
      setPwAlert('');
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

  // phone number input event handler
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parsePhoneNumber(value);
    setParsedPhone(parsedValue);
    setPhone(parsedValue.replace(/-/g, ''));
    if (parsedValue.length == 13) {
      setIsPhoneNumWrong(false);
    } else {
      setIsPhoneNumWrong(true);
    }
  };

  // get certificate button click handler
  const handleCertClick = () => {
    console.log(newPhone);
    setPhone(parsedPhone);
  };

  // email input event handler
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // save button click event handler
  const handleSaveClick = async () => {
    if (isPwWrong || isPwCheckWrong || isPhoneNumWrong) {
      alert('회원 정보를 다시 한 번 확인해 주세요.');
      return;
    }
    const res = await PutUserInfo(userInfo.id ?? -1, email, pw, phone);
    if (res?.status === 200) {
      alert('회원 정보가 수정되었습니다.');
      setUserInfo((prev) => ({ ...prev, email: email, phone_number: phone }));
    }
  };

  return (
    <div className="infoedit-div">
      <div className="row-input-div inputs-div">
        <Input
          label="이름"
          styleClass="row"
          defaultValue={userInfo.name}
          disabled={true}
        />
        <Input
          label="아이디"
          styleClass="row"
          defaultValue={userInfo.username}
          disabled={true}
        />
        <Input
          label="비밀번호"
          styleClass="row"
          onChange={handlePw}
          type="password"
          placeholder="8~12자 이내의 영문, 숫자, 특수기호 중 2종류 조합"
          isWrong={isPwWrong}
          alertText={pwAlert}
        />
        <Input
          label="비밀번호 확인"
          styleClass="row"
          onChange={(e) => setPwCheck(e.target.value)}
          isWrong={isPwCheckWrong}
          alertText={pwCheckAlert}
          type="password"
        />
        {/* {phoneEdit ? (
          <div>
            <div className="phone-input-div">
              <Input
                label="연락처"
                styleClass="phone-input phone-num"
                placeholder="전화번호 입력"
                onChange={handlePhone}
                value={parsedPhone}
              />
              <Btn
                label="인증번호 받기"
                onClick={handleCertClick}
                styleClass="row-btn short-btn dark-green"
              />
            </div>
            <div className="cert-input-div">
              <Input
                label=""
                styleClass="phone-input"
                placeholder="인증번호 입력"
                onChange={(e) => setCertNum(e.target.value)}
              />
              <Btn
                label="수정 완료"
                onClick={() => setPhoneEdit(false)}
                styleClass="row-btn short-btn white"
              />
            </div>
          </div>
        ) : (
          <div className="row-input-div">
            <Input
              label="연락처"
              styleClass="row"
              defaultValue={phone}
              disabled={true}
            />
            <Btn
              label="수정"
              onClick={() => setPhoneEdit(true)}
              styleClass="row-btn short-btn dark-green"
            />
          </div>
        )} */}
        <Input
          label="연락처"
          styleClass="row"
          value={parsePhoneNumber(phone)}
          onChange={handlePhone}
          isWrong={isPhoneNumWrong}
        />
        <Input
          label="이메일"
          styleClass="row"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => (window.location.href = '/my-page')}
          styleClass="abreast-btn white"
        />
        <Btn
          label="저장"
          onClick={handleSaveClick}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default InfoEdit;
