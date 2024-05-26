import Contact from 'components/_common/Contact';
import ReviewList from 'components/reviewpage/ReviewList';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import SeniorDetail from 'components/searchpage/SeniorDetail';
import SeniorIntro from 'components/searchpage/SeniorIntro';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';

const PaidResume = () => {
  const resumeData = useRecoilValue(ResumeDetailAtom);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
    { label: '리뷰', user: 'review' },
  ];

  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={resumeData.profile_image}
        review_avg={resumeData.review_avg}
        seniorName={resumeData.name}
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
      <Contact id={resumeData.user_id} />
      <div className="resume-detail-tab-div">
        <div className="tab-wrapper">
          {tabType.map((tab, index) => (
            <div
              key={index}
              className={`${activeIndex === index && 'active'}`}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      {activeIndex == 0 && <SeniorDetail />}
      {activeIndex == 1 && <SeniorIntro />}
      {activeIndex == 2 && <ReviewList />}
    </div>
  );
};

export default PaidResume;
