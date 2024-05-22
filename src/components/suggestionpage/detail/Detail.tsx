import { GetSuggestionDatail, UpdateProgress } from 'api/suggestion';
import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import Subtitle from 'components/_common/Subtitle';
import { SuggestDetailData } from 'data-type';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { suggestId } = useParams();
  const [data, setData] = useState<SuggestDetailData>();

  const getSuggestDetail = async () => {
    const res = await GetSuggestionDatail(Number(suggestId));
    setData(res?.data);
  };

  useEffect(() => {
    getSuggestDetail();
  }, [suggestId]);

  const handleBtnClick = async (progress: string) => {
    const res = await UpdateProgress(Number(suggestId), progress);
    if (res?.status === 200) {
      window.location.href = '/notice';
    }
  };

  return (
    <div className="sub-container">
      <div className="suggest-detail-profile">
        <div className="suggest-detail-profile-img">
          <img src={data?.profile_image} />
        </div>
        <p>{data?.company}</p>
      </div>
      <div className="suggest-detail-content-div">
        <Subtitle label="제안 내용" />
        <div>
          <Label label="근무 형태" />
          <div className="suggest-detail-content resume-tag green-tag">
            {data?.commute_type}
          </div>
        </div>
        <div>
          <Label label="근무 기간" />
          <div className="suggest-detail-content">
            <p>{data?.duration}개월</p>
            {data?.start_year_month} - {data?.end_year_month}
          </div>
        </div>
        <div>
          <Label label="제안 급여" />
          <div className="suggest-detail-content">월급: {data?.pay}만 원</div>
        </div>
        <div>
          <Label label="업무 소개" />
          <div className="suggest-detail-content suggest-detail-jd light-gray">
            {data?.job_description}
          </div>
        </div>
      </div>
      <div className="btns-div">
        <Btn
          label="수락"
          onClick={() => handleBtnClick('is_accepted')}
          styleClass="abreast-btn dark-green"
        />
        <Btn
          label="거절"
          onClick={() => handleBtnClick('is_declined')}
          styleClass="abreast-btn white"
        />
      </div>
    </div>
  );
};

export default Detail;
