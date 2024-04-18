import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ResumeInput from './ResumeInput';
import ResumeIntro from './ResumeIntro';
import { ResumeAtom } from 'recoil/Resume';
import { SigninAtom } from 'recoil/Signin';
import { useRecoilValue, useRecoilState } from 'recoil';
import { GetResume, UpdateResume, SubmitResume } from 'api/resume';
import { ResumeData } from 'data-type';

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

  const validateResume = (resume: ResumeData) => {
    if (
      resume.keyword == '' ||
      resume.introduction == '' ||
      resume.job_group == '직군' ||
      resume.job_role == '직무' ||
      resume.skills == '[]' ||
      resume.commute_type == '희망 근무 형태' ||
      resume.careers.length == 0 ||
      resume.educations.length == 0 ||
      resume.projects.length == 0
    ) {
      return false;
    }
    return true;
  };

  const getResume = async (user_id: number, resume_id: number) => {
    const res = await GetResume(user_id, resume_id);
    setResume(() => {
      return {
        ...res?.data.resume,
        user_id: id,
        resume_id: res?.data.resume_id,
        is_submitted: res?.data.is_submitted,
        successfully_get: true,
      };
    });
  };

  const updateResume = async (
    user_id: number,
    resume_id: number,
    is_submit = false,
  ) => {
    const res = await UpdateResume(user_id, resume_id, resume);
    if (res?.data) {
      setResume((prev) => {
        return {
          ...prev,
          is_submitted: false,
        };
      });
      if (!is_submit) {
        alert('이력서가 성공적으로 저장되었습니다.');
      } else {
        return true;
      }
    } else {
      if (!is_submit) {
        alert('이력서 저장에 실패했습니다.');
      } else {
        return false;
      }
    }
  };

  const submitResume = async (user_id: number, resume_id: number) => {
    const update = await updateResume(user_id, resume_id, true);
    const is_validate = validateResume(resume);
    if (!is_validate) {
      alert('아직 작성하지 않은 항목이 있습니다.');
    }
    if (update && is_validate) {
      const res = await SubmitResume(user_id, resume_id);
      if (res?.data) {
        alert('이력서가 성공적으로 인재풀에 등록되었습니다.');
        navigate('/resume');
      } else {
        alert('인재풀 등록에 실패했습니다.');
      }
    } else {
      alert('이력서 저장에 실패했습니다.');
    }
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
              onClick={() => updateResume(id, resumeId)}
            >
              임시 저장
            </button>
            {resume.is_submitted ? (
              <button className={`resume-submit-btn ${'disabled'}`}>
                인재풀 등록 완료
              </button>
            ) : (
              <button
                className={`resume-submit-btn ${'dark-green'}`}
                onClick={() => submitResume(id, resumeId)}
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
