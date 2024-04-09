import ResumeDetail from 'components/searchpage/ResumeDetail';
import Title from 'components/_common/Title';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ResumeDetailPage = () => {
  const { isSignin } = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [isSignin]);

  return (
    <>
      {isSignin && (
        <div className="container">
          <Title label="전문가 상세" />
          <ResumeDetail />
        </div>
      )}
    </>
  );
};
export default ResumeDetailPage;
