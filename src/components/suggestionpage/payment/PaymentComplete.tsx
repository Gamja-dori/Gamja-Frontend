import Btn from 'components/_common/Btn';

const PaymentComplete = () => {
  return (
    <div className="sub-container">
      <div className="suggest-pay-complete-div">
        <p>결제가 완료되었습니다</p>
        <p>전문가의 연락 정보를 확인하고 채용을 진행해 주세요.</p>
      </div>
      <Btn
        label="전문가 정보 보러가기"
        onClick={() => console.log('전문가 정보 보러가기 클릭')}
        styleClass="longer-btn dark-blue"
      />
    </div>
  );
};

export default PaymentComplete;
