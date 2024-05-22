import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { blurName } from 'components/utils/ResumeUtils';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import ReviewStar from './ReviewStar';
import Btn from 'components/_common/Btn';
import mock from '../../assets/mock/reviews.json';
import { useEffect, useState } from 'react';
import { ReviewData } from 'data-type';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const resumeId = Number(useParams()['resumeId']);
  const resumeData = useRecoilValue(ResumeDetailAtom);

  const [data, setData] = useState<ReviewData[]>([]);

  useEffect(() => {
    setData(mock);
  }, []);

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
        <ReviewStar starRate={Math.round(4.9)} />
        <p>4.9</p>
      </div>
      <Btn
        label="리뷰 작성하기"
        onClick={() => (window.location.href = `/review/new/${resumeId}`)}
        styleClass="longer-btn dark-blue"
      />
      {data.map((review) => {
        return <ReviewItem key={review.id} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
