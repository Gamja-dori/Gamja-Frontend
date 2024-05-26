import { ManagementItemProps } from 'props-type';
import verified from '../../../assets/icons/verified.svg';
import Btn from 'components/_common/Btn';
import { useNavigate } from 'react-router-dom';
import { blurName } from 'components/utils/ResumeUtils';
import { useSetRecoilState } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import { GetResumeDetail } from 'api/recommends';

const ManagementItem = ({ item }: ManagementItemProps) => {
  const navigate = useNavigate();

  const setResumeData = useSetRecoilState(ResumeDetailAtom);

  const handleReviewCreateClick = async () => {
    const res = await getResumeDetail(item.resume_id);
    if (res) {
      navigate(`/review/new/${item.suggest_id}`);
    }
  };

  const getResumeDetail = async (resume_id: number) => {
    const res = await GetResumeDetail(resume_id);
    if (res?.status === 200) {
      setResumeData(() => {
        return {
          ...res?.data.resume,
          user_id: res?.data.user_id,
          resume_id: res?.data.resume_id,
          name: res?.data.name,
          profile_image: res?.data.profile_image,
          review_avg: res?.data.review_avg,
          is_verified: res?.data.is_verified,
          successfully_get: true,
        };
      });
      return true;
    }
    return false;
  };

  const handleProfileClick = async () => {
    if (item.progress === 'is_paid' || item.progress === 'is_reviewed') {
      const res = await getResumeDetail(item.resume_id);
      if (res) {
        navigate(`/suggestion/complete/${item.suggest_id}`);
      }
    } else {
      navigate(`/search/detail/${item.resume_id}`);
    }
  };

  return (
    <div className="resume-long-card">
      <div
        className="resume-long-profile suggest-manage-profile-div"
        onClick={handleProfileClick}
      >
        <img className="resume-card-profile" src={item.profile_image} />
        <div className="resume-card-contents">
          <div className="resume-title-container">
            <div className="resume-card-title">
              {item.progress === 'is_paid' || item.progress === 'is_reviewed'
                ? item.name
                : blurName(item.name)}
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
        onClick={handleProfileClick}
      >
        <div className="resume-card-job">
          {item.job_group} {`>`} {item.job_name}
        </div>
      </div>
      <div className="suggest-manage-btn-div">
        {item.progress === 'is_reviewed' && (
          <Btn
            label="리뷰를 이미 작성했어요"
            onClick={() => null}
            styleClass="inner-btn light-gray"
          />
        )}
        {item.progress === 'is_paid' && (
          <Btn
            label="리뷰 작성하기"
            onClick={handleReviewCreateClick}
            styleClass="inner-btn dark-blue"
          />
        )}
        {item.progress === 'is_accepted' && (
          <Btn
            label="결제하기"
            onClick={() =>
              navigate(
                `/suggestion/payment/${item.resume_id}/${item.suggest_id}`,
              )
            }
            styleClass="inner-btn dark-blue"
          />
        )}
        {item.progress === 'is_declined' && (
          <Btn
            label="채용 제안이 거절됐어요"
            onClick={() => {
              return;
            }}
            styleClass="inner-btn light-gray"
          />
        )}
        {item.progress === 'is_pending' && (
          <Btn
            label="채용 제안 수정하기"
            onClick={() =>
              navigate(`/suggestion/edit/${item.resume_id}/${item.suggest_id}`)
            }
            styleClass="inner-btn dark-blue"
          />
        )}
        {item.progress === 'is_cancelled' && (
          <Btn
            label="채용을 취소했어요"
            onClick={() => {
              return;
            }}
            styleClass="inner-btn light-gray"
          />
        )}
      </div>
    </div>
  );
};

export default ManagementItem;
