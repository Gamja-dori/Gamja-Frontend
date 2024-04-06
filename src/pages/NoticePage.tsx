import Title from 'components/_common/Title';
import NoticeTab from 'components/noticepage/NoticeTab';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const NoticePage = () => {
  const signinState = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signinState.isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [signinState]);

  return (
    <>
      {signinState.isSignin && (
        <>
          <Title label="알림" />
          <NoticeTab />
        </>
      )}
    </>
  );
};
export default NoticePage;
