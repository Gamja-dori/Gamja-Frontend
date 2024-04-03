import { useState } from 'react';
import ResumeLongCard from './ResumeLongCard';
import { Select, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import filter from '../../assets/icons/search/filter.svg';
import info from '../../assets/icons/search/info.svg';
import miniSearch from '../../assets/icons/search/mini-search.svg';
import profile from '../../assets/images/profile.png';
import del from '../../assets/icons/search/delete.svg';
import bigDel from '../../assets/icons/search/circle-delete.svg';

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const filterData = [
    { value: '추천순', label: '추천순' },
    { value: '조회수 높은순', label: '조회수 높은순' },
    { value: '리뷰 높은순', label: '리뷰 높은순' },
    { value: '업데이트순', label: '업데이트순' },
  ];
  const skills = ['React', 'JavaScript', 'TypeScript'];
  const skills2 = ['React'];
  const skills3 = ['React', 'JavaScript'];
  const commentData = [
    { commentType: 1, comments: ['OO', '96'] },
    { commentType: 2, comments: ['React.js', 'Vue.js'] },
    { commentType: 3, comments: [] },
    { commentType: 4, comments: ['10'] },
  ];
  const tooltipTxt = `예시) 기계 산업 도면에 대한 경험 또는 교육을 받은 자`;
  const searchRecord: string[] = [
    '비즈니스 영어가 가능하고 제약회사 경험이 있는 사람',
    '해외 영업팀 근무 경험이 있으면서 영어에 능통하고 소통이 원활한 5년차 이상의 전문 통역가',
  ];
  const navigate = useNavigate();

  return (
    <div className="sub-container">
      <div className="search-title-container">
        <div className="search-info-container">
          <div className="search-title">업무 한 줄 소개</div>
          <Tooltip title={tooltipTxt} color={'#41c0f2'}>
            <img src={info} />
          </Tooltip>
        </div>
        <div
          className="filter-container white"
          onClick={() => {
            navigate('filter');
          }}
        >
          <img src={filter} />
        </div>
      </div>
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="업무를 한 줄로 소개해 주세요."
          onClick={() => {
            setIsSearch(true);
          }}
          onBlur={() => {
            setIsSearch(false);
          }}
        />
        {isSearch && (
          <>
            <img src={bigDel} className="search-delete" />
            {searchRecord.length != 0 && (
              <div className="search-history-container">
                <div className="search-history-title">
                  <div>최근 검색 기록</div>
                  <div className="delete">전체 삭제</div>
                </div>
                <div className="search-history-contents">
                  {searchRecord.map((sr, idx) => (
                    <div className="content" key={idx}>
                      <img src={miniSearch} />
                      <div>{sr}</div>
                      <img src={del} className="delete" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="search-title-container">
        <div className="search-subtitle">지금 떠오르는 인재</div>
        <Select
          className="filter-select"
          defaultValue="조회수 높은순"
          options={filterData}
        />
      </div>
      <div className="resume-long-card-container">
        <ResumeLongCard
          seniorName="김**"
          careerYear={10}
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          skillSummary="10년차 개발자/반응형 웹/생명주기 관리"
          skills={skills}
          commuteType="원격"
          isVerified={true}
          resumeId={1}
          profileImage={profile}
        />
        <ResumeLongCard
          seniorName="김**"
          careerYear={1}
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          skillSummary="10년차 개발자/반응형 웹/생명주기 관리"
          skills={skills2}
          commuteType="원격"
          isVerified={true}
          resumeId={1}
          profileImage={profile}
          recommendComments={commentData}
        />
        <ResumeLongCard
          seniorName="김**"
          careerYear={1}
          jobGroup="개발"
          jobName="프론트엔드 개발자"
          skillSummary="10년차 개발자/반응형 웹/생명주기 관리"
          skills={skills3}
          commuteType="원격"
          isVerified={true}
          resumeId={1}
          profileImage={profile}
          recommendComments={commentData}
        />
      </div>
    </div>
  );
};
export default Search;
