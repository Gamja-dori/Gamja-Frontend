import { useState } from 'react';
import { Select } from 'antd';

import Subtitle from 'components/_common/Subtitle';
import Label from 'components/_common/Label';
import Btn from 'components/_common/Btn';
import { SuggestionProps } from 'props-type';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import profile from '../../../assets/images/profile.png';

const SuggestionForm = ({ resumeId, isEdit }: SuggestionProps) => {
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
      <ResumeDetailCard
        seniorName="김다시"
        jobGroup="개발"
        jobName="프론트엔드 개발자"
        careerYear={10}
        commuteType="원격"
        profileImage={profile}
        resumeId={1}
        date="2024.03.02"
        durationStart={3}
        durationEnd={12}
        payStart={100}
        payEnd={300}
        needSubinfo={true}
      />
      {isEdit && (
        <div style={{ marginBottom: '4rem' }}>
          <Btn
            label="채용 취소하기"
            onClick={() => console.log('채용 취소 클릭')}
            styleClass="longer-btn dark-blue"
          />
        </div>
      )}
      <Subtitle label="제안 내용" />
      <div className="resume-input-container input-div">
        <div>
          <Label label="근무 형태" isRequired={true} />
          <div className="select-container">
            <Select
              className="select-long"
              defaultValue="근무 형태"
              onChange={onAreaChange}
              options={startDate}
            />
          </div>
        </div>
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
          <div className="suggest-form-price-div">
            <p>전문가님의 희망 급여</p>
            <p>30,000원 - 50,000원</p>
            <div className="suggest-form-price-input light-gray">
              <input />
              <p>원</p>
            </div>
            <p className="suggest-notice-p">
              근무 기간을 고려해서 책정해 주세요.
            </p>
          </div>
        </div>
        <div className="suggest-form-textarea-div">
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
        {isEdit ? (
          <Btn
            label="수정"
            onClick={() => window.location.replace('/resume/detail/:resumeId')}
            styleClass="abreast-btn dark-blue"
          />
        ) : (
          <Btn
            label="채용 제안"
            onClick={() => window.location.replace('/resume/detail/:resumeId')}
            styleClass="abreast-btn dark-blue"
          />
        )}
      </div>
    </div>
  );
};

export default SuggestionForm;
