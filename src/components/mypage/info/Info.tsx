import Btn from 'components/_common/Btn';
import InfoForm from './InfoForm';
import { useState } from 'react';
import UserCheckModal from './UserCheckModal';

const Info = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="info-div">
        <div className="mypage-flexdiv">
          <p className="mypage-title">기본 정보</p>
          <Btn
            label="수정"
            onClick={() => setModal(true)}
            styleClass="mypage-btn dark-green"
          />
        </div>
        <InfoForm />
      </div>
      {modal && <UserCheckModal setModal={setModal} />}
    </>
  );
};

export default Info;
