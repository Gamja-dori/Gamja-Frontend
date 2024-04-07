import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import { useNavigate } from 'react-router-dom';

const FindPwReset = () => {
  const navigate = useNavigate();

  return (
    <div className="find-form-wrapper">
      <div className="inputs-div">
        <div className="text-div">
          <p>새로운 비밀번호를 설정해 주세요.</p>
          <p>8~12자 이내의 영문, 문자, 특수기호 중 2가지를 혼합해 주세요.</p>
        </div>
        <Input label="비밀번호" styleClass="row" />
        <Input label="비밀번호 확인" styleClass="row" />
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => navigate('/sign-in', { replace: true })}
          styleClass="abreast-btn white"
        />
        <Btn
          label="확인"
          onClick={() => navigate('/sign-in', { replace: true })}
          styleClass="abreast-btn dark-green"
        />
      </div>
    </div>
  );
};

export default FindPwReset;
