import Btn from 'components/_common/Btn';
import ResumeCard from 'components/resumepage/ResumeCard';
import { GetDefaultResume } from 'api/resume';
import { ResumeCardProps } from 'props-type';
import { useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { formatDate } from 'components/utils/DateUtils';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultResume = () => {
  const { id } = useRecoilValue(SigninAtom);
  const navigate = useNavigate();

  const [defaultResume, setDefaultResume] = useState<ResumeCardProps>();

  useEffect(() => {
    getDefaultResume(id);
  }, [id]);

  const getDefaultResume = async (id: number) => {
    const res = await GetDefaultResume(id);
    const data = res?.data.resume;
    if (data && Object.keys(data).length !== 0) {
      const formattedDate = formatDate(data.updated_at);
      setDefaultResume({
        resumeId: data.id,
        isDefault: data.is_default,
        isVerified: data.is_verified,
        careerYear: data.career_year,
        commuteType: data.commute_type,
        title: data.title,
        jobGroup: data.job_group,
        jobName: data.job_role,
        date: formattedDate,
      });
    }
  };

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
      {defaultResume ? (
        <ResumeCard
          isDefault={defaultResume.isDefault}
          title={defaultResume.title}
          jobGroup={defaultResume.jobGroup}
          jobName={defaultResume.jobName}
          date={defaultResume.date}
          careerYear={defaultResume.careerYear}
          commuteType={defaultResume.commuteType}
          isVerified={defaultResume.isVerified}
          resumeId={defaultResume.resumeId}
        />
      ) : (
        <div className="mypage-semi-outline light-gray">
          <p className="mypage-semi-notice">기본 이력서가 아직 없어요!</p>
        </div>
      )}
    </div>
  );
};

export default DefaultResume;
