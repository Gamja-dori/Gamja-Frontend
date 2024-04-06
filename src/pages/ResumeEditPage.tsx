import Title from 'components/_common/Title';
import ResumeEdit from 'components/resumepage/ResumeEdit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const ResumeEditPage = () => {
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
      {signinState.isSignin && (
        <div className="container">
          <Title label="인재풀 등록" />
          <ResumeEdit />
        </div>
      )}
    </>
  );
};

export default ResumeEditPage;
