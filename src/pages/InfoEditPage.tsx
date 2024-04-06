import Title from 'components/_common/Title';
import InfoEdit from 'components/infoeditpage/InfoEdit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const InfoEditPage = () => {
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
        <div className="infoedit-main-div">
          <Title label="기본 정보 수정" />
          <InfoEdit />
        </div>
      )}
    </>
  );
};

export default InfoEditPage;
