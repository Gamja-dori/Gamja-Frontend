import { useEffect, useState } from 'react';
import Btn from 'components/_common/Btn';
import WithdrawalModal from './WithdrawalModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UserProfileAtom } from 'recoil/UserProfile';
import { parsePhoneNumber } from 'components/utils/PhoneUtils';
import { Signout } from 'api/user';
import { useNavigate } from 'react-router-dom';
import { SigninStateAtom } from 'recoil/Signin';

const InfoForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modal, setModal] = useState(false);

  const UserProfileData = useRecoilValue(UserProfileAtom);

  useEffect(() => {
    const parsed_result = parsePhoneNumber(UserProfileData.phone_number);
    setPhoneNumber(parsed_result);
  }, [UserProfileData]);

  const handleSignout = async () => {
    const res = await Signout();
    if (res?.status === 202) {
      window.localStorage.clear();
      window.location.href = '/';
    }
  };

  return (
    <div className="infoForm-div">
      <div className="infoForm-box">
        <p>이름</p>
        <p>{UserProfileData.name}</p>
      </div>
      <div className="infoForm-box">
        <p>아이디</p>
        <p>{UserProfileData.username}</p>
      </div>
      <div className="infoForm-box">
        <p>연락처</p>
        <p>{phoneNumber}</p>
      </div>
      <div className="infoForm-box">
        <p>이메일</p>
        <p>{UserProfileData.email}</p>
      </div>
      <div className="infoForm-btn-box">
        <Btn
          label="로그아웃"
          onClick={handleSignout}
          styleClass="mini-btn light-gray"
        />
        <Btn
          label="회원탈퇴"
          onClick={() => setModal(true)}
          styleClass="mini-btn red"
        />
      </div>
      {modal && <WithdrawalModal setModal={setModal} />}
    </div>
  );
};

export default InfoForm;
