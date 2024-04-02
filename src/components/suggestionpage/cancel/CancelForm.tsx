import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import { SuggestionProps } from 'props-type';

const CancelForm = ({ resumeId }: SuggestionProps) => {
  return (
    <div className="sub-container">
      <div className="resume-input-container input-div">
        <div>
          <Label label="취소 사유" isRequired={true} />
          <div className="suggest-form-textarea-div cancel-form">
            <textarea
              className="resume-text-area"
              name="업무 소개"
              placeholder="업무 소개를 입력하세요."
            />
            <p className="suggest-notice-p">
              취소 사유는 전문가님께 전달됩니다.
              <br />
              불분명한 사유는 이용에 제한이 될 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => console.log('채용 취소 취소')}
          styleClass="abreast-btn white-blue"
        />
        <Btn
          label="신청"
          onClick={() => console.log('채용 신청 취소')}
          styleClass="abreast-btn dark-blue"
        />
      </div>
    </div>
  );
};

export default CancelForm;
