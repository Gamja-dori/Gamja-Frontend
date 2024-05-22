import { ManagementItemProps } from 'props-type';
import verified from '../../../assets/icons/verified.svg';
import Btn from 'components/_common/Btn';
import { useNavigate } from 'react-router-dom';
import { blurName } from 'components/utils/ResumeUtils';

const ManagementItem = ({ item }: ManagementItemProps) => {
  const navigate = useNavigate();
  return (
    <div className="resume-long-card">
      <div
        className="resume-long-profile suggest-manage-profile-div"
        onClick={() => navigate(`/search/detail/${item.resume_id}`)}
      >
        <img className="resume-card-profile" src={item.profile_image} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">
              {item.progress === 'is_paid' ? item.name : blurName(item.name)}
            </div>
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
      <div
        className="resume-long-sub suggest-manage-profile-div"
        onClick={() => navigate(`/search/detail/${item.resume_id}`)}
      >
        <div className="resume-card-job">
          {item.job_group} {`>`} {item.job_name}
        </div>
      </div>
      {item.progress === 'is_paid' && (
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
      )}
      {item.progress === 'is_accepted' && (
        <div className="suggest-manage-btn-div">
          <Btn
            label="결제하기"
            onClick={() =>
              navigate(
                `/suggestion/payment/${item.resume_id}/${item.suggest_id}`,
              )
            }
            styleClass="inner-btn dark-blue"
          />
        </div>
      )}
      {item.progress === 'is_declined' && (
        <div className="suggest-manage-btn-div">
          <Btn
            label="채용 제안이 거절됐어요"
            onClick={() => {
              null;
            }}
            styleClass="inner-btn light-gray"
          />
        </div>
      )}
      {item.progress === 'is_pending' && (
        <div className="suggest-manage-btn-div">
          <Btn
            label="채용 제안 수정하기"
            onClick={() => navigate(`/suggestion/edit/${item.suggest_id}`)}
            styleClass="inner-btn dark-blue"
          />
        </div>
      )}
      {item.progress === 'is_cancelled' && (
        <div className="suggest-manage-btn-div">
          <Btn
            label="채용을 취소했어요"
            onClick={() => {
              null;
            }}
            styleClass="inner-btn light-gray"
          />
        </div>
      )}
    </div>
  );
};

export default ManagementItem;
