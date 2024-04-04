import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ResumeDetailCard from './ResumeDetailCard';
import SeniorDetail from './SeniorDetail';
import SeniorIntro from './SeniorIntro';
import profile from '../../assets/images/profile.png';

const ResumeDetail = () => {
  const isVerified = true;
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
  ];
  const markdownText = `## 프론트엔드 개발 \n
  ### 저는 이런 사람입니다.`;

  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={profile}
        seniorName="김**"
        jobGroup="개발"
        jobName="프론트엔드 개발자"
        careerYear={10}
        commuteType="원격"
        isVerified={isVerified}
        resumeId={1}
        needSubinfo={true}
        keyword="10년차 개발자/반응형 웹/생명주기 관리"
        durationStart={2}
        durationEnd={7}
        payStart={300}
        payEnd={500}
      />
      <button
        className="search-filter-confirm-btn"
        onClick={() => {
          navigate('/proposal');
        }}
      >
        채용 제안하기
      </button>
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
      {activeIndex == 0 ? (
        <SeniorDetail />
      ) : (
        <SeniorIntro markdownText={markdownText} />
      )}
    </div>
  );
};
export default ResumeDetail;
