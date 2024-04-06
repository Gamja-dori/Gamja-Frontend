import { useEffect, useState } from 'react';
import Btn from 'components/_common/Btn';
import WithdrawalModal from './WithdrawalModal';
import { useRecoilValue } from 'recoil';
import { UserProfileAtom } from 'recoil/UserProfile';
import { parsePhoneNumber } from 'components/utils/PhoneUtils';

const InfoForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modal, setModal] = useState(false);

  const UserProfileData = useRecoilValue(UserProfileAtom);

  useEffect(() => {
    const parsed_result = parsePhoneNumber(UserProfileData.phone_number);
    setPhoneNumber(parsed_result);
  }, [UserProfileData]);

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
          onClick={() => console.log('로그아웃 클릭')}
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
