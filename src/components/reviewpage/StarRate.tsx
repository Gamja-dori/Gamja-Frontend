import { useState } from 'react';
import star from '../../assets/icons/star.svg';
import starfill from '../../assets/icons/starfill.svg';
import { StarRateProps } from 'props-type';

const StarRate = ({ setStarRate }: StarRateProps) => {
  const [rate, setRate] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    setRate(rate.map((_, idx) => idx <= index));
    setStarRate(index + 1);
  };

  return (
    <div className="review-star">
      {rate.map((isFilled, index) => (
        <img
          src={isFilled ? starfill : star}
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default StarRate;
