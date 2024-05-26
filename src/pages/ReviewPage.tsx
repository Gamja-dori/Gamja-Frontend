import Title from 'components/_common/Title';
import ReviewList from 'components/reviewpage/ReviewList';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';

const ReviewPage = () => {
  const seniorId = Number(useParams()['seniorId']);
  const resumeData = useRecoilValue(ResumeDetailAtom);

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (seniorId !== resumeData.user_id) {
      alert('비정상적인 접근입니다.');
      navigate(-1);
    } else {
      setAccess(true);
    }
  }, [seniorId, resumeData.user_id]);

  return (
    <>
      {access && (
        <div className="container">
          <Title label="리뷰" />
          <ReviewList />
        </div>
      )}
    </>
  );
};

export default ReviewPage;
