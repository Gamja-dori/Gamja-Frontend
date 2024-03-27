import { useState } from 'react';
import { Select } from 'antd';

import Subtitle from 'components/_common/Subtitle';
import Label from 'components/_common/Label';
import Btn from 'components/_common/Btn';

const SuggestionForm = () => {
  const [selectedJob, setSelectedJob] = useState('직무');

  const onAreaChange = () => {
    setSelectedJob('직무');
  };

  const startDate = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
  ];

  const endDate = [{ value: 'Yiminghe', label: 'yiminghe' }];

  return (
    <div className="sub-container">
      {/* add senior's profile later */}
      <Subtitle label="제안 내용" />
      <div className="resume-input-container input-div">
        <div>
          <Label label="근무 기간" isRequired={true} />
          <div className="select-container">
            <Select
              className="select-mini"
              defaultValue="시작일"
              onChange={onAreaChange}
              options={startDate}
            />
            <Select
              className="select-mini"
              defaultValue="종료일"
              onChange={onAreaChange}
              options={endDate}
            />
          </div>
        </div>
        <div>
          <Label label="제안 급여" isRequired={true} />
          <div className="suggest-price-div">
            <p>전문가님의 희망 급여</p>
            <p>30,000원 - 50,000원</p>
            <div className="suggest-price-input light-gray">
              <input />
              <p>원</p>
            </div>
            <p className="suggest-price-notice">
              근무 기간을 고려해서 책정해 주세요.
            </p>
          </div>
        </div>
        <div className="suggest-jd-div">
          <Label label="업무 소개" isRequired={true} />
          <textarea
            className="resume-text-area"
            name="업무 소개"
            placeholder="업무 소개를 입력하세요."
          />
        </div>
      </div>
      <div className="btns-div">
        <Btn
          label="취소"
          onClick={() => window.location.replace('/resume/detail/:resumeId')}
          styleClass="abreast-btn white-blue"
        />
        <Btn
          label="채용 제안"
          onClick={() => window.location.replace('/resume/detail/:resumeId')}
          styleClass="abreast-btn dark-blue"
        />
      </div>
    </div>
  );
};

export default SuggestionForm;
