import Btn from 'components/_common/Btn';
import { useNavigate } from 'react-router-dom';

const Suggestion = () => {
  const navigate = useNavigate();
  return (
    <div className="mypage-semi-div">
      <div className="mypage-flexdiv">
        <p className="mypage-title">채용 제안</p>
        <Btn
          label="관리"
          onClick={() => navigate('/suggestion/management')}
          styleClass="mypage-btn dark-green"
        />
      </div>
      <div className="mypage-semi-outline mypage-semi-suggest light-gray">
        <div className="mypage-semi-box">
          <p>전체 채용</p>
          <p>10 건</p>
        </div>
        <div className="mypage-semi-box">
          <p>진행 중인 채용</p>
          <p>5 건</p>
        </div>
        <div className="mypage-semi-box">
          <p>완료된 채용</p>
          <p>5 건</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
