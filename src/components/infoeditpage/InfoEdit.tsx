import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import mockUser from '../../assets/mock/info.json';
import { InfoFormData } from 'data-type';

import { useEffect, useState } from 'react';
import { parsePhoneNumber } from 'components/utils/PhoneUtils';
import { validatePw } from 'components/utils/ValidationUtils';

const InfoEdit = () => {
  const [data, setData] = useState<Partial<InfoFormData>>({});
  const [phone, setPhone] = useState('');

  // phone edit button click useState
  const [phoneEdit, setPhoneEdit] = useState(false);

  useEffect(() => {
    setData(mockUser);
    setEmail(mockUser.email);
    setPhone(mockUser.phone_number);
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
    setNewPhone(parsedValue.replace(/-/g, ''));
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

  return (
    <div className="infoedit-div">
      <div className="row-input-div inputs-div">
        <Input
          label="이름"
          styleClass="row"
          defaultValue={data.name}
          disabled={true}
        />
        <Input
          label="아이디"
          styleClass="row"
          defaultValue={data.username}
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
        {phoneEdit ? (
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
        )}
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
          onClick={() => (window.location.href = '/my-page')}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default InfoEdit;
