import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';

import { useNavigate } from 'react-router-dom';

const FindIdForm = () => {
  const navigate = useNavigate();

  return (
    <div className="find-form-wrapper">
      <div className="row-input-div inputs-div">
        <Input label="이름" styleClass="row" />
        <div className="row-input-div">
          <Input label="전화번호" styleClass="row" />
          <Btn
            label="인증번호 받기"
            onClick={() => console.log('인증번호 받기 클릭')}
            styleClass="short-btn row-btn dark-green"
          />
        </div>
        <Input label="인증번호" styleClass="row" />
        <p className="alert-text">
          ※ 회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야,
          인증번호를 받을 수 있습니다.
        </p>
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => navigate('/sign-in', { replace: true })}
          styleClass="abreast-btn white"
        />
        <Btn
          label="아이디 찾기"
          onClick={() => navigate('/find/id/result', { replace: true })}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default FindIdForm;
