import { ReviewItemProps } from 'props-type';
import ReviewStar from './ReviewStar';
import { formatDate, parseTags } from 'components/utils/ResumeUtils';
import { useMediaQuery } from 'react-responsive';

const ReviewItem = ({ review }: ReviewItemProps) => {
  const tags: string[] = parseTags(review.tags);
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });

  return (
    <div className="review-item-div light-gray">
      <div className="review-profile-div">
        <img src={review.reviewer_image} className="review-profile-img" />
        <div className="review-profile-detail-div">
          <ReviewStar starRate={review.score} styleClass="small-star" />
          <div>
            <p>{review.reviewer_name}</p>
            <p>{formatDate(review.created_at)} 작성</p>
          </div>
        </div>
      </div>
      <div className="review-info-div">
        <p>
          직군 {'>'} 직무: {review.job_group} {'>'} {review.job_role}
        </p>
        {!isMobile && <div>&nbsp;{'/'}&nbsp;</div>}
        <p>
          고용 기간: {review.start_year_month}~{review.end_year_month}
        </p>
      </div>
      <div className="review-tags-div">
        {tags.map((tag: string, index) => {
          return <p key={index}>{tag}</p>;
        })}
      </div>
      <p className="review-content-p">{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
