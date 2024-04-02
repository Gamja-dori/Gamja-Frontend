import Title from 'components/_common/Title';
import PaymentComplete from 'components/suggestionpage/payment/PaymentComplete';

const SuggestionPaymentCompletePage = () => {
  return (
    <div className="container">
      <Title label="결제 완료" />
      <PaymentComplete />
    </div>
  );
};

export default SuggestionPaymentCompletePage;
