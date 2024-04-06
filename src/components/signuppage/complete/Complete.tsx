import Btn from 'components/_common/Btn';

import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-comp-div">
      <p className="signup-text">
        회원가입 완료!
        <br />
        다시 꿈을 찾는 여정을 응원합니다 :&#41;
      </p>
      <Btn
        label="로그인하러 가기"
        onClick={() => navigate('/sign-in', { replace: true })}
        styleClass="long-btn dark-green"
      />
    </div>
  );
};

export default Complete;
