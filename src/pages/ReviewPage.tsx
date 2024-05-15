import Title from 'components/_common/Title';
import ReviewList from 'components/reviewpage/ReviewList';

const ReviewPage = () => {
  return (
    <div className="container">
      <Title label="리뷰" />
      <ReviewList />
    </div>
  );
};

export default ReviewPage;
