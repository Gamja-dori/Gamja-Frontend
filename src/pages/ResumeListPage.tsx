import Title from 'components/_common/Title';
import ResumeList from 'components/resumepage/ResumeList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const ResumeListPage = () => {
  const signinState = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signinState.isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    } else if (!signinState.isSenior) {
      alert('시니어 회원만 접근 가능합니다.');
      navigate(-1);
    }
  }, [signinState]);

  return (
    <>
      {signinState.isSignin && signinState.isSenior && (
        <div className="container">
          <Title label="이력서 관리" />
          <ResumeList />
        </div>
      )}
    </>
  );
};

export default ResumeListPage;
