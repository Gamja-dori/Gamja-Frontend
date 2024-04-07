import Btn from 'components/_common/Btn';
import KakaoBtn from 'components/_common/KakaoBtn';

import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-veri-div">
      <p className="signup-text">
        휴대폰 본인 인증 또는
        <br />
        카카오 로그인으로
        <br />
        가입을 진행해 주세요.
      </p>
      <Btn
        label="휴대폰 본인 인증"
        onClick={() => navigate('/sign-up/user-type', { replace: true })}
        styleClass="long-btn dark-green"
      />
      <KakaoBtn />
    </div>
  );
};

export default Verification;
