import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { blurName } from 'components/utils/ResumeUtils';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import ReviewStar from './ReviewStar';
import { useEffect, useState } from 'react';
import { ReviewListData } from 'data-type';
import ReviewItem from './ReviewItem';
import { GetReview } from 'api/user';

const ReviewList = () => {
  const resumeData = useRecoilValue(ResumeDetailAtom);
  const [data, setData] = useState<ReviewListData>();
  const seniorId = resumeData.user_id;
  //Number(useParams()['seniorId']);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    const res = await GetReview(seniorId);
    if (res?.status === 200) {
      setData(res?.data);
    } else {
      alert('잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <div className="sub-container review-list-div">
      <div className="review-avgstar-div">
        <ReviewStar starRate={Math.round(data?.average_score ?? 0)} />
        <p>{data?.average_score}</p>
      </div>
      {data?.reviews.length ?? 0 > 0 ? (
        data?.reviews.map((review, index) => {
          return <ReviewItem key={index} review={review} />;
        })
      ) : (
        <p className="resume-list-empty">리뷰가 아직 없습니다!</p>
      )}
    </div>
  );
};

export default ReviewList;
