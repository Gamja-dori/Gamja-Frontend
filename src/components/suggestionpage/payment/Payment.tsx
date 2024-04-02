// import { Radio } from 'antd';
import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import { SuggestionProps } from 'props-type';

const Payment = ({ resumeId }: SuggestionProps) => {
  return (
    <div className="sub-container">
      <div className="suggest-pay-div">
        <div>
          <Label label="근무 형태" />
          <div className="resume-tag blue-tag">원격</div>
        </div>
        <div>
          <Label label="근무 기간" />
          <div className="suggest-pay-text-div">
            <p className="suggest-pay-p medium">3개월</p>
            <p className="suggest-pay-p">2023년 11월 1일 - 2024년 1월 1일</p>
          </div>
        </div>
        <div>
          <Label label="결제 수단" />
          <div className="suggest-pay-radio-div">
            <div>
              <input type="radio" id="option1" name="option" value="card" />
              <label htmlFor="option1">카드 결제</label>
            </div>
            <div>
              <input type="radio" id="option2" name="option" value="kakao" />
              <label htmlFor="option2">카카오페이</label>
            </div>
            <div>
              <input type="radio" id="option3" name="option" value="naver" />
              <label htmlFor="option3">네이버페이</label>
            </div>
          </div>
        </div>
        <div>
          <Label label="결제 금액" />
          <div className="suggest-pay-text-div">
            <p className="suggest-pay-p">20만원</p>
            <p className="suggest-notice-p">
              다시의 수수료 정책에 따라 제안 금액의 10%를 납부합니다.
            </p>
          </div>
        </div>
        <Btn
          label="결제하기"
          onClick={() => console.log('결제하기 클릭')}
          styleClass="longer-btn dark-blue"
        />
      </div>
    </div>
  );
};

export default Payment;
