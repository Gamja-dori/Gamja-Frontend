import Btn from 'components/_common/Btn';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import profile from '../../../assets/images/profile.png';

const PaymentComplete = () => {
  return (
    <div className="sub-container">
      <ResumeDetailCard
        seniorName="김다시"
        jobGroup="개발"
        jobName="프론트엔드 개발자"
        careerYear={10}
        commuteType="원격"
        profileImage={profile}
        resumeId={1}
        date="2024.03.02"
        durationStart={3}
        durationEnd={12}
        payStart={100}
        payEnd={300}
        needSubinfo={true}
      />
      <div className="suggest-pay-complete-div">
        <p>결제가 완료되었습니다</p>
        <p>전문가의 연락 정보를 확인하고 채용을 진행해 주세요.</p>
      </div>
      <Btn
        label="전문가 정보 보러가기"
        onClick={() => console.log('전문가 정보 보러가기 클릭')}
        styleClass="longer-btn dark-blue"
      />
    </div>
  );
};

export default PaymentComplete;
