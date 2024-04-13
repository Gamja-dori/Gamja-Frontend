import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResumeInput from './ResumeInput';
import ResumeIntro from './ResumeIntro';
import { ResumeAtom } from 'recoil/Resume';
import { SigninAtom } from 'recoil/Signin';
import { useRecoilValue, useRecoilState } from 'recoil';
import { GetResume } from 'api/resume';

const ResumeEdit = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabType = [
    { label: '이력서', user: 'resume' },
    { label: '전문가 소개', user: 'senior_info' },
  ];

  const { id } = useRecoilValue(SigninAtom);
  const resumeId = Number(useParams()['resumeId']);
  const [resume, setResume] = useRecoilState(ResumeAtom);
  const getResume = async (user_id: number, resume_id: number) => {
    const res = await GetResume(user_id, resume_id);
    setResume((prev) => {
      return {
        ...prev,
        ...res?.data.resume,
        user_id: id,
        resume_id: res?.data.resume_id,
        is_submitted: res?.data.is_submitted,
      };
    });
  };

  useEffect(() => {
    getResume(id, resumeId);
  }, []);

  return (
    <>
      {resume && (
        <div className="sub-container">
          <div className="resume-tab-div">
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
          {activeIndex == 0 ? <ResumeInput /> : <ResumeIntro />}

          <div className="work-type-container">
            <button
              className={`resume-submit-btn ${'white'}`}
              onClick={() => navigate('/resume')}
            >
              임시 저장
            </button>
            {resume.is_submitted ? (
              <button
                className={`resume-submit-btn ${'dark-green'}`}
                onClick={() => navigate('/resume')}
              >
                인재풀 재등록
              </button>
            ) : (
              <button
                className={`resume-submit-btn ${'dark-green'}`}
                onClick={() => navigate('/resume')}
              >
                인재풀 등록
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeEdit;
