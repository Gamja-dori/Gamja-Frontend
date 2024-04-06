import Title from 'components/_common/Title';
import Detail from 'components/suggestionpage/detail/Detail';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const SuggestionDetailPage = () => {
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
          <Title label="제안 상세" />
          <Detail />
        </div>
      )}
    </>
  );
};

export default SuggestionDetailPage;
