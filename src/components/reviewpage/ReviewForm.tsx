import { Select } from 'antd';
import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import SelectTag from 'components/resumepage/SelectTag';
import ResumeDetailCard from 'components/searchpage/ResumeDetailCard';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import { tagData } from './TagData';
import StarRate from './StarRate';
import { CreateReview } from 'api/user';
import { useNavigate, useParams } from 'react-router-dom';
import { SigninAtom } from 'recoil/Signin';
import { GetSuggestionDatail, UpdateProgress } from 'api/suggestion';

const ReviewForm = () => {
  const suggestId = Number(useParams()['suggestId']);
  const resumeData = useRecoilValue(ResumeDetailAtom);
  const { id } = useRecoilValue(SigninAtom);
  const navigate = useNavigate();

  const [starRate, setStarRate] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tags, setTags] = useState('');
  const [comment, setComment] = useState('');

  const [commuteType, setCommuteType] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (suggestId > 0) {
      getSuggestDetail();
    }
  }, [suggestId]);

  const onTagChange = (value: string[]) => {
    const convertedTags = JSON.stringify(value);
    setSelectedTags(value);
    setTags(convertedTags);
  };

  const createReview = async () => {
    const res = await CreateReview(
      suggestId,
      resumeData.user_id,
      id,
      starRate,
      tags,
      comment,
    );
    if (res?.status === 200) {
      updateProgress();
    } else {
      alert('리뷰 작성 실패');
    }
  };

  const updateProgress = async () => {
    const res = await UpdateProgress(suggestId, 'is_reviewed');
    if (res?.status === 200) {
      navigate('/suggestion/management');
    } else {
      alert('상태 업데이트 실패');
    }
  };

  const getSuggestDetail = async () => {
    const res = await GetSuggestionDatail(Number(suggestId));
    const data = res?.data;
    setCommuteType(data.commute_type);
    setDuration(data.start_year_month + '~' + data.end_year_month);
  };

  return (
    <div className="sub-container">
      <ResumeDetailCard
        profileImage={resumeData.profile_image}
        seniorName={resumeData.name}
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
      <div className="review-form-div">
        <div className="review-form-info-div">
          <p>고용 형태{'>'}</p>
          <p>{commuteType}</p>
        </div>
        <div className="review-form-info-div">
          <p>고용 기간{'>'}</p>
          <p>{duration}</p>
        </div>
      </div>
      <div className="review-form-div review-form-star-div">
        <p>별점을 입력해 주세요</p>
        <StarRate setStarRate={setStarRate} />
      </div>
      <div className="review-form-div">
        <Label label="태그" />
        <Select
          className="select multiple"
          prefixCls="blue-select"
          mode="multiple"
          tagRender={SelectTag}
          allowClear
          placeholder="태그를 검색해 주세요"
          value={selectedTags}
          onChange={onTagChange}
          options={tagData}
          style={{ height: 'auto' }}
        />
      </div>
      <div className="review-form-div">
        <Label label="후기" />
        <textarea
          className="resume-text-area"
          style={{ height: '8rem', marginTop: '1rem' }}
          placeholder="후기를 입력해 주세요"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="review-form-div review-form-notice-div">
        <p>작성된 리뷰는 수정, 삭제할 수 없습니다.</p>
        <p>부적절한 후기 작성 시 삭제될 수 있습니다.</p>
      </div>
      <Btn
        label="리뷰 작성하기"
        onClick={createReview}
        styleClass="longer-btn dark-blue"
      />
    </div>
  );
};

export default ReviewForm;
