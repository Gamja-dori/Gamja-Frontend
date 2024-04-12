import Btn from 'components/_common/Btn';
import ResumeCard from 'components/resumepage/ResumeCard';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserInfoAtom } from 'recoil/UserProfile';

const DefaultResume = () => {
  const userInfoData = useRecoilValue(UserInfoAtom);
  const navigate = useNavigate();

  return (
    <div className="mypage-semi-div">
      <div className="mypage-flexdiv">
        <p className="mypage-title">기본 이력서</p>
        <Btn
          label="변경"
          onClick={() => navigate('/resume')}
          styleClass="mypage-btn dark-green"
        />
      </div>
      {userInfoData.default_resume === -1 ? (
        <div className="mypage-semi-outline light-gray">
          <p className="mypage-semi-notice">기본 이력서가 아직 없어요!</p>
        </div>
      ) : (
        <ResumeCard
          isDefault={true}
          title="이력서 1"
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          date="2024.01.18"
          careerYear={10}
          commuteType="원격"
          isVerified={true}
          resumeId={1}
        />
      )}
    </div>
  );
};

export default DefaultResume;
