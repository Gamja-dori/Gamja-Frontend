import star from 'assets/icons/star.svg';
import starfill from 'assets/icons/starfill.svg';
import { ReviewStarProps } from 'props-type';

const ReviewStar = ({ starRate, styleClass }: ReviewStarProps) => {
  const rate = [];

  for (let i = 0; i < starRate; i++) {
    rate.push(true);
  }
  for (let i = 0; i < 5 - starRate; i++) {
    rate.push(false);
  }

  return (
    <div className={`${styleClass} review-star`}>
      {rate.map((bool) => {
        return (
          <div key={null}>
            <img src={bool ? starfill : star} />
          </div>
        );
      })}
    </div>
  );
};

export default ReviewStar;
