import Title from 'components/_common/Title';
import Payment from 'components/suggestionpage/payment/Payment';
import { useParams } from 'react-router-dom';

const SuggestionPaymentPage = () => {
  const resumeId = useParams();
  return (
    <div className="container">
      <Title label="결제" />
      <Payment resumeId={resumeId} />
    </div>
  );
};

export default SuggestionPaymentPage;
