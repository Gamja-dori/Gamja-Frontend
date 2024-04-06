import Title from 'components/_common/Title';
import PaymentComplete from 'components/suggestionpage/payment/PaymentComplete';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const SuggestionPaymentCompletePage = () => {
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
        <div className="container">
          <Title label="결제 완료" />
          <PaymentComplete />
        </div>
      )}
    </>
  );
};

export default SuggestionPaymentCompletePage;
