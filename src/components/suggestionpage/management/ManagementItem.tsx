import { ManagementItemProps } from 'props-type';
import verified from '../../../assets/icons/verified.svg';
import Btn from 'components/_common/Btn';

const ManagementItem = ({ item }: ManagementItemProps) => {
  return (
    <div className="resume-long-card">
      <div className="resume-long-profile">
        <img className="resume-card-profile" src={item.profile_image} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">{item.name}</div>
            <div className="resume-card-tags">
              <div className="resume-tag blue-tag">{item.commute_type}</div>
              <div className="resume-tag blue-tag">{item.career_year}년차</div>
              {item.is_verified && (
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
          {item.job_group} {`>`} {item.job_name}
        </div>
      </div>
      {item.is_paid ? (
        <div className="suggest-manage-btn-div">
          {item.review_id > 0 ? (
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
      ) : (
        <div>
          {item.is_accepted && (
            <div className="suggest-manage-btn-div">
              <Btn
                label="결제하기"
                onClick={() => null}
                styleClass="inner-btn dark-blue"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManagementItem;
