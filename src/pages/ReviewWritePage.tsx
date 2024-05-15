import Title from 'components/_common/Title';
import ReviewForm from 'components/reviewpage/ReviewForm';

const ReviewWritePage = () => {
  return (
    <div className="container">
      <Title label="리뷰 작성" />
      <ReviewForm />
    </div>
  );
};

export default ReviewWritePage;
