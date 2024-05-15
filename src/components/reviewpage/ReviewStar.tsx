import star from 'assets/icons/star.svg';
import starfill from 'assets/icons/starfill.svg';
import { ReviewStarProps } from 'props-type';

const ReviewStar = ({ starRate, styleClass }: ReviewStarProps) => {
  return (
    <div className={`${styleClass} review-star`}>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <img src={index < starRate ? starfill : star} />
        </div>
      ))}
    </div>
  );
};

export default ReviewStar;
