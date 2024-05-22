import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { SuggestionProps } from 'props-type';
import { useRecoilState } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import { blurName } from 'components/utils/ResumeUtils';
import { GetResumeDetail } from 'api/recommends';
import { useEffect, useState } from 'react';
import { ApprovePay, GetSuggestionDatail, PostPay } from 'api/suggestion';
import { SuggestDetailData } from 'data-type';
import { useMediaQuery } from 'react-responsive';

const Payment = ({ resumeId, suggestId }: SuggestionProps) => {
  const [resumeData, setResumeData] = useRecoilState(ResumeDetailAtom);
  const [suggest, setSuggest] = useState<SuggestDetailData>();
  const [totalAmount, setTotalAmount] = useState(0);
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });

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
      };
    });
  };

  const getSuggestionDetail = async (suggest_id: number) => {
    const res = await GetSuggestionDatail(suggest_id);
    setSuggest(res?.data);
    setTotalAmount((res?.data.pay ?? 0) / 10);
  };

  useEffect(() => {
    getResumeDetail(resumeId);
    getSuggestionDetail(suggestId);
  }, [resumeId, suggestId]);

  const handleBtnClick = async () => {
    const price = totalAmount * 10000;
    const res = await PostPay(suggestId, resumeData.name, price);
    if (res?.data) {
      const url = isMobile
        ? res?.data?.next_redirect_mobile_url
        : res?.data?.next_redirect_pc_url;
      window.location.href = url;
      requestApproval();
    } else {
      alert('결제 실패');
    }
  };

  const requestApproval = async () => {
    const params = new URL(document.location.toString()).searchParams;
    const pgToken: string = params.get('pg_token') || '';
    const res = await ApprovePay(suggestId, pgToken);
    if (res?.status === 200) {
      history.replaceState({}, location.pathname);
      console.log('결제 성공');
    } else {
      alert('결제 실패');
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
      />
      <div className="suggest-pay-div">
        <div>
          <Label label="근무 형태" />
          <div className="resume-tag blue-tag">{suggest?.commute_type}</div>
        </div>
        <div>
          <Label label="근무 기간" />
          <div className="suggest-pay-text-div">
            <p className="suggest-pay-p medium"></p>
            <p className="suggest-pay-p">
              {suggest?.start_year_month} - {suggest?.end_year_month}
            </p>
          </div>
        </div>
        <div>
          <Label label="결제 수단" />
          <div className="suggest-pay-radio-div">
            <div>
              <input
                type="radio"
                id="option1"
                name="option"
                value="kakao"
                defaultChecked
              />
              <label htmlFor="option1">카카오페이</label>
            </div>
          </div>
        </div>
        <div>
          <Label label="결제 금액" />
          <div className="suggest-pay-text-div">
            <p className="suggest-pay-p">{totalAmount}만 원</p>
            <p className="suggest-notice-p">
              다시의 수수료 정책에 따라 제안 금액의 10%를 납부합니다.
            </p>
          </div>
        </div>
        <Btn
          label="결제하기"
          onClick={handleBtnClick}
          styleClass="longer-btn dark-blue"
        />
      </div>
    </div>
  );
};

export default Payment;
