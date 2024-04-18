import { ManagementItemProps } from 'props-type';
import verified from '../../../assets/icons/verified.svg';
import Btn from 'components/_common/Btn';

const ManagementItem = ({ item }: ManagementItemProps) => {
  return (
    <div className="resume-long-card">
      <div className="resume-long-profile">
        <img className="resume-card-profile" src={item.profileImage} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">{item.seniorName}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{item.commuteType}</div>
              <div className="resume-tag blue-tag">{item.careerYear}년차</div>
              {item.isVerified && (
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
          {item.jobGroup} {`>`} {item.jobName}
        </div>
      </div>
      {item.isFinished && (
        <div className="suggest-manage-btn-div">
          {item.reviewId > 0 ? (
            <Btn
              label="리뷰를 이미 작성했어요"
              onClick={() => null}
              styleClass="inner-btn light-gray"
            />
          ) : (
            <Btn
              label="리뷰 작성하기"
              onClick={() => console.log('리뷰 작성 클릭!')}
              styleClass="inner-btn dark-blue"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ManagementItem;
