import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetResumeDetail } from 'api/recommends';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import { useRecoilState } from 'recoil';
import { blurName } from 'components/utils/ResumeUtils';
import ResumeDetailCard from './ResumeDetailCard';
import SeniorDetail from './SeniorDetail';
import SeniorIntro from './SeniorIntro';

const ResumeDetail = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [resumeData, setResumeData] = useRecoilState(ResumeDetailAtom);
  const resumeId = Number(useParams()['resumeId']);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
  ];

  const getResumeDetail = async (resume_id: number) => {
    const res = await GetResumeDetail(resume_id);
    setResumeData(() => {
      return {
        ...res?.data.resume,
        resume_id: res?.data.resume_id,
        name: res?.data.name,
        profile_image: res?.data.profile_image,
        is_verified: res?.data.is_verified,
        successfully_get: true,
      };
    });
  };

  useEffect(() => {
    getResumeDetail(resumeId);
  }, []);

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
      {activeIndex == 0 ? <SeniorDetail /> : <SeniorIntro />}
    </div>
  );
};
export default ResumeDetail;
