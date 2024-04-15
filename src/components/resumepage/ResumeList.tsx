import BannerBtn from './BannerBtn';
import ResumeCard from './ResumeCard';
import resume from '../../assets/icons/resume/resume.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CreateResume, GetResumeList } from 'api/resume';
import { ResumeCardData } from 'data-type';
import { useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { formatDate } from 'components/utils/ResumeUtils';

const ResumeList = () => {
  const navigate = useNavigate();
  const [resumeList, setResumeList] = useState<ResumeCardData[]>([]);
  const { id } = useRecoilValue(SigninAtom);

  const createResume = async (user_id: number) => {
    const res = await CreateResume(user_id);
    const url = `/resume/edit/${res?.data.resume_id}`;
    navigate(url);
  };

  const getResumeList = async (user_id: number) => {
    const res = await GetResumeList(user_id);
    setResumeList(res?.data?.resumes);
  };

  useEffect(() => {
    getResumeList(id);
  }, []);

  return (
    <div className="sub-container">
      <BannerBtn
        title="새 이력서 작성하기"
        content="새로운 이력서 등록하기"
        svg={resume}
        styleClass="dark-green"
        onClick={() => createResume(id)}
      />
      <div className="resume-card-container">
        {resumeList.length > 0 ? (
          <>
            {resumeList?.map((rs, index) => {
              const formattedDate = formatDate(rs.updated_at);
              return (
                <ResumeCard
                  resumeId={rs.id}
                  isDefault={rs.is_default}
                  title={rs.title}
                  jobGroup={rs.job_group}
                  jobName={rs.job_role}
                  date={formattedDate}
                  commuteType={rs.commute_type}
                  isVerified={rs.is_verified}
                  careerYear={rs.career_year}
                  key={index}
                  resumeList={resumeList}
                  setResumeList={setResumeList}
                />
              );
            })}
          </>
        ) : (
          <p className="resume-list-empty">작성 중인 이력서가 아직 없어요!</p>
        )}
      </div>
    </div>
  );
};

export default ResumeList;
