import Btn from 'components/_common/Btn';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import { blurName } from 'components/utils/ResumeUtils';

const PaymentComplete = () => {
  const resumeData = useRecoilValue(ResumeDetailAtom);

  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={resumeData.profile_image}
        seniorName={blurName(resumeData.name)}
        jobGroup={resumeData.job_group}
        jobName={resumeData.job_role}
        careerYear={resumeData.career_year}
        commuteType={resumeData.commute_type}
        isVerified={resumeData.is_verified}
        resumeId={resumeData.resume_id}
        needSubinfo={true}
        keyword={resumeData.keyword}
        durationStart={resumeData.duration_start}
        durationEnd={resumeData.duration_end}
        payStart={resumeData.min_month_pay}
        payEnd={resumeData.max_month_pay}
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
