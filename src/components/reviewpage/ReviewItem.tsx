import { ReviewItemProps } from 'props-type';
import ReviewStar from './ReviewStar';

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <div className="review-item-div light-gray">
      <div className="review-profile-div">
        <img src={review.profile_image} className="review-profile-img" />
        <div className="review-profile-detail-div">
          <ReviewStar starRate={review.star} styleClass="small-star" />
          <div>
            <p>{review.name}</p>
            <p>{review.date} 작성</p>
          </div>
        </div>
      </div>
      <p className="review-duration-p">
        고용 기간: {review.duration_start}~{review.duration_end}
      </p>
      <div className="review-tags-div">
        {review.tags.map((tag: string) => {
          return <p key={tag}>{tag}</p>;
        })}
      </div>
      <p className="review-content-p">{review.content}</p>
    </div>
  );
};

export default ReviewItem;
