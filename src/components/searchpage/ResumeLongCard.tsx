import { ResumeCardProps } from 'props-type';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import verified from '../../assets/icons/verified.svg';
import check from '../../assets/icons/check.svg';
const ResumeLongCard = ({
  isDefault = false,
  isVerified = false,
  title,
  jobName,
  date,
  workType,
  skills = [],
  commuteType,
  resumeId,
  profileImage,
  careerYear,
  recommendComments = [],
}: ResumeCardProps) => {
  const url = `/resume/detail/${resumeId}`;
  const navigate = useNavigate();
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  const leftSkillLen = skills.length - 2;
  return (
    <div
      className="resume-long-card"
      onClick={() => {
        navigate(url);
      }}
    >
      <div className="resume-long-sub">
        <img className="resume-card-profile" src={profileImage} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">{title}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{commuteType}</div>
              {isVerified && (
                <div className="resume-tag blue-tag">
                  <img src={verified} />
                  경력 검증
                </div>
              )}
            </div>
          </div>
          <div className="resume-card-job">
            {jobName} ({careerYear}년차)
          </div>
          <div className="resume-card-tags">
            {workType.map((wt, index) => (
              <div className="resume-tag green-tag" key={index}>
                {wt}
              </div>
            ))}
          </div>
          {isMobile ? (
            <div className="resume-card-tags">
              {skills.slice(0, 2).map((sk, index) => (
                <div className="resume-tag gray-tag" key={index}>
                  {sk}
                </div>
              ))}
              {leftSkillLen > 0 && (
                <div className="text">+{leftSkillLen}개</div>
              )}
            </div>
          ) : (
            <div className="resume-card-tags">
              {skills.map((sk, index) => (
                <div className="resume-tag gray-tag" key={index}>
                  {sk}
                </div>
              ))}
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
                    <span>{cm.comments[0]}</span>년 경력자예요!
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
