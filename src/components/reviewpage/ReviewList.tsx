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
  const seniorId = Number(useParams()['seniorId']);
  const resumeData = useRecoilValue(ResumeDetailAtom);

  const [data, setData] = useState<ReviewListData>();

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
      <ResumeDetailCard
        profileImage={resumeData.profile_image}
        seniorName={blurName(resumeData.name)}
        jobGroup={resumeData.job_group}
        jobName={resumeData.job_role}
        careerYear={resumeData.career_year}
        commuteType={resumeData.commute_type}
        isVerified={resumeData.is_verified}
        resumeId={resumeData.resume_id}
        needSubinfo={true}
        keyword={resumeData.keyword}
        durationStart={resumeData.duration_start}
        durationEnd={resumeData.duration_end}
        payStart={resumeData.min_month_pay}
        payEnd={resumeData.max_month_pay}
      />
      <div className="review-avgstar-div">
        <ReviewStar starRate={Math.round(data?.average_score ?? 0)} />
        <p>{data?.average_score}</p>
      </div>
      {data?.reviews ? (
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
