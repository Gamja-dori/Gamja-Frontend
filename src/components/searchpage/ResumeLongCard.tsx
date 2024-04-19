import { ResumeLongCardProps } from 'props-type';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import verified from '../../assets/icons/verified.svg';
import check from '../../assets/icons/check.svg';
const ResumeLongCard = ({
  isVerified = false,
  seniorName,
  jobGroup,
  jobName,
  commuteType,
  resumeId,
  profileImage,
  careerYear,
  keyword,
  skills = [],
  recommendComments = [],
}: ResumeLongCardProps) => {
  const url = `/search/detail/${resumeId}`;
  const navigate = useNavigate();

  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [hiddenSkillCnt, setHiddenSkillCnt] = useState(0);

  const calculateVisibleSkills = () => {
    const containerWidth =
      document.getElementById('skill-tags')?.clientWidth ?? 0;
    let totalWidth = 0;
    let visibleCnt = 0;
    for (let i = 0; i < skills.length; i++) {
      const skillWidth = calculateSkillItemWidth(skills[i]);
      totalWidth += skillWidth;
      if (totalWidth <= containerWidth) {
        visibleCnt++;
      } else {
        break;
      }
    }
    setVisibleSkills(skills.slice(0, visibleCnt));
    setHiddenSkillCnt(skills.length - visibleCnt);
  };

  const calculateSkillItemWidth = (skill: string) => {
    const charWidth = 15;
    return skill.length * charWidth;
  };

  useEffect(() => {
    calculateVisibleSkills();
    window.addEventListener('resize', calculateVisibleSkills);
    return () => {
      window.removeEventListener('resize', calculateVisibleSkills);
    };
  }, [skills]);

  return (
    <div
      className="resume-long-card"
      onClick={() => {
        navigate(url);
      }}
    >
      <div className="resume-long-profile">
        <img className="resume-card-profile" src={profileImage} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">{seniorName}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{commuteType}</div>
              <div className="resume-tag blue-tag">{careerYear}년차</div>
              {isVerified && (
                <div className="resume-tag blue-tag">
                  <img src={verified} />
                  검증됨
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="resume-long-sub">
        <div className="resume-card-job">
          {jobGroup} {`>`} {jobName}
        </div>
        <div className="resume-card-summary">{keyword}</div>
        <div className="resume-card-tags" id="skill-tags">
          {visibleSkills.map((sk, index) => (
            <div className="resume-tag gray-tag" key={index}>
              {sk}
            </div>
          ))}
          {hiddenSkillCnt > 0 && (
            <div className="text">
              {skills.length === hiddenSkillCnt && '보유 스킬 및 자격증 '}+
              {hiddenSkillCnt}개
            </div>
          )}
        </div>
      </div>
      {recommendComments.length != 0 && (
        <div className="resume-comment-container">
          {recommendComments.map((cm, index) => (
            <div className="resume-title-container" key={index}>
              <img src={check} />
              <div className="resume-comment-txt">
                {cm.commentType == 1 && (
                  <>
                    <span>{cm.comments[0]}</span>님의 요구사항과{' '}
                    <span>{cm.comments[1]}</span>% 일치해요!
                  </>
                )}
                {cm.commentType == 2 && (
                  <>
                    <span>{cm.comments[0]}</span>와{' '}
                    <span>{cm.comments[1]}</span>를 능숙하게 다룰 수 있어요!
                  </>
                )}
                {cm.commentType == 3 && <>희망하는 예산 범위와 일치해요!</>}
                {cm.commentType == 4 && (
                  <>
                    <span>{cm.comments[0]}</span>년차 경력자예요!
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ResumeLongCard;
