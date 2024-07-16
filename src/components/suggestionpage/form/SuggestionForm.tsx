import { useEffect, useState } from 'react';
import { Select } from 'antd';

import { SuggestionProps } from 'props-type';
import Subtitle from 'components/_common/Subtitle';
import Label from 'components/_common/Label';
import Btn from 'components/_common/Btn';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { commuteTypeData } from 'components/resumepage/ResumeData';
import { blurName } from 'components/utils/ResumeUtils';
import { CreateSuggestion, GetSuggestionDatail } from 'api/suggestion';
import { GetResumeDetail } from 'api/recommends';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { useNavigate } from 'react-router-dom';
import { ResumeDetailAtom } from 'recoil/Recommendation';

const SuggestionForm = ({ isEdit, suggestId, resumeId }: SuggestionProps) => {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useRecoilState(ResumeDetailAtom);
  const signinAtom = useRecoilValue(SigninAtom);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [commuteType, setCommuteType] = useState('');
  const [pay, setPay] = useState(0);
  const [jd, setJD] = useState('');
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const dateRegex = /^\d{4}\.\d{2}$/;

    if (dateRegex.test(startDate) && dateRegex.test(endDate)) {
      const [startY, startM] = startDate.split('.').map(Number);
      const [endY, endM] = endDate.split('.').map(Number);

      const diff = (endY - startY) * 12 + Math.abs(endM - startM) + 1;
      if (diff > 0) {
        setDuration(diff);
      } else {
        alert('날짜를 다시 입력해 주세요.');
      }
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (isEdit) {
      getSuggestionDatail();
    }
  }, [isEdit]);

  useEffect(() => {
    console.log(resumeId, resumeData.resume_id);
    if (resumeId !== resumeData.resume_id) {
      getResumeDetail(resumeId);
    }
  }, [resumeId, resumeData.resume_id]);

  const getResumeDetail = async (resume_id: number) => {
    const res = await GetResumeDetail(resume_id);
    setResumeData(() => {
      return {
        ...res?.data.resume,
        user_id: res?.data.user_id,
        resume_id: res?.data.resume_id,
        name: res?.data.name,
        profile_image: res?.data.profile_image,
        is_verified: res?.data.is_verified,
        successfully_get: true,
        review_avg: res?.data.review_avg,
      };
    });
  };

  const getSuggestionDatail = async () => {
    const res = await GetSuggestionDatail(Number(suggestId));
    const data = res?.data;
    setCommuteType(data.commute_type);
    setStartDate(data.start_year_month);
    setEndDate(data.end_year_month);
    setPay(data.pay);
    setJD(data.job_description);
  };

  const onCommuteChange = (value: string) => {
    setCommuteType(value);
  };
  const onStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const onEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };
  const onPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strPay = e.target.value;
    setPay(Number(strPay));
  };
  const onJDChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJD(e.target.value);
  };

  const handleSuggest = async () => {
    const res = await CreateSuggestion({
      senior_id: resumeData.user_id,
      enterprise_id: signinAtom.id,
      start_year_month: startDate,
      end_year_month: endDate,
      commute_type: commuteType,
      duration: duration,
      job_description: jd,
      pay: pay,
      resume_id: Number(resumeId),
    });
    if (res?.status == 201) {
      alert('채용 제안을 보냈습니다.');
      navigate('/suggestion/management');
    }
  };

  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={resumeData.profile_image}
        seniorName={blurName(resumeData.name)}
        jobGroup={resumeData.job_group}
        jobName={resumeData.job_role}
        careerYear={resumeData.career_year}
        commuteType={resumeData.commute_type}
        isVerified={resumeData.is_verified}
        resumeId={resumeData.resume_id}
        needSubinfo={true}
        keyword={resumeData.keyword}
        durationStart={resumeData.duration_start}
        durationEnd={resumeData.duration_end}
        payStart={resumeData.min_month_pay}
        payEnd={resumeData.max_month_pay}
        review_avg={resumeData.review_avg}
      />
      {isEdit && (
        <div style={{ width: '100%', marginBottom: '4rem' }}>
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
              prefixCls="blue-select"
              defaultValue="근무 형태"
              onChange={onCommuteChange}
              options={commuteTypeData.map((c) => ({
                label: c,
                value: c,
              }))}
              value={commuteType || '근무 형태'}
            />
          </div>
        </div>
        <div>
          <Label label="근무 기간" isRequired={true} />
          <div className="record-date suggestion-date">
            <div>
              <p className="date-label">시작일</p>
              <input
                placeholder="0000.00"
                onChange={onStartChange}
                value={startDate}
              />
            </div>
            <p>~</p>
            <div>
              <p className="date-label">종료일</p>
              <input
                placeholder="0000.00"
                onChange={onEndChange}
                value={endDate}
              />
            </div>
          </div>
        </div>
        <div>
          <Label label="제안 급여" isRequired={true} />
          <div className="suggest-form-price-div">
            <p>전문가님의 희망 급여</p>
            <p>
              월 {resumeData.min_month_pay}만 원 - {resumeData.max_month_pay}만
              원
            </p>
            <div className="suggest-form-price-input light-gray">
              <input onChange={onPayChange} value={pay} />
              <p>만 원</p>
            </div>
            <p className="suggest-notice-p">수수료는 제안 급여의 10%입니다.</p>
          </div>
        </div>
        <div className="suggest-form-textarea-div">
          <Label label="업무 소개" isRequired={true} />
          <textarea
            className="resume-text-area"
            name="업무 소개"
            placeholder="업무 소개를 입력하세요."
            onChange={onJDChange}
            value={jd}
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
            onClick={() => console.log(startDate, endDate, pay, duration)}
            styleClass="abreast-btn dark-blue"
          />
        ) : (
          <Btn
            label="채용 제안"
            onClick={handleSuggest}
            styleClass="abreast-btn dark-blue"
          />
        )}
      </div>
    </div>
  );
};

export default SuggestionForm;
