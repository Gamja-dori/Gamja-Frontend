import { GetPay } from 'api/suggestion';
import Title from 'components/_common/Title';
import PaidResume from 'components/suggestionpage/payment/PaidResume';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const SuggestionPaidResumePage = () => {
  const { isSignin } = useRecoilValue(SigninStateAtom);
  const { suggestId } = useParams();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    } else {
      setAuth(true);
    }
  }, [isSignin]);

  useEffect(() => {
    const id = Number(suggestId);
    getPay(id);
  }, [suggestId]);

  const getPay = async (suggestId: number) => {
    const res = await GetPay(suggestId);
    if (res?.status === 200) {
      setAuth(true);
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {auth && (
        <div className="container">
          <Title label="전문가 상세" />
          <PaidResume />
        </div>
      )}
    </>
  );
};

export default SuggestionPaidResumePage;
