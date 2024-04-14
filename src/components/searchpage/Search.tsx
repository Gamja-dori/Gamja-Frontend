import { useState, useEffect } from 'react';
import { SearchLog } from './SearchLog';
import { Select, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ResumeSearchAtom, ResumeListAtom } from 'recoil/Recommendation';
import { SigninAtom } from 'recoil/Signin';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ResumeLongCardData, ResumeSearchData } from 'data-type';
import { GetMainSeniorList, PostRecommendation } from 'api/recommends';
import ResumeLongCard from './ResumeLongCard';
import Filter from './Filter';
import filter from '../../assets/icons/search/filter.svg';
import info from '../../assets/icons/search/info.svg';
import bigDel from '../../assets/icons/search/circle-delete.svg';
import Btn from 'components/_common/Btn';

const Search = () => {
  const [searchData, setSearchData] = useRecoilState(ResumeSearchAtom);
  const [resumeList, setResumeList] = useRecoilState(ResumeListAtom);
  const [isLogOn, setIsLogOn] = useState(false); // 검색 기록 on off
  const [isSearch, setIsSearch] = useState(false); // 검색 실행 o x
  const [isFilterOn, setIsFilterOn] = useState(false); // 필터 on off
  const filterData = [
    { value: '추천순', label: '추천순' },
    { value: '조회수 높은순', label: '조회수 높은순' },
    { value: '리뷰 높은순', label: '리뷰 높은순' },
    { value: '업데이트순', label: '업데이트순' },
  ];
  const tooltipTxt = `예시) 기계 산업 도면에 대한 경험 또는 교육을 받은 자`;
  const navigate = useNavigate();
  const { id } = useRecoilValue(SigninAtom);

  const getMainSeniorList = async () => {
    const res = await GetMainSeniorList();
    setResumeList(res?.data?.resumes);
  };

  const postRecommendation = async (
    user_id: number,
    search: ResumeSearchData,
  ) => {
    const res = await PostRecommendation(user_id, search);
    setResumeList(res?.data.resumes);
    setIsSearch(true);
  };

  useEffect(() => {
    getMainSeniorList();
  }, []);

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData((prev: ResumeSearchData) => {
      return { ...prev, query: e.target.value };
    });
  };

  const resetQuery = () => {
    setSearchData((prev: ResumeSearchData) => {
      return { ...prev, query: '' };
    });
  };

  return (
    <>
      {isFilterOn ? (
        <Filter setIsFilterOn={setIsFilterOn} />
      ) : (
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
                setIsFilterOn(true);
              }}
            >
              <img src={filter} />
            </div>
          </div>
          <div className="search-input-container">
            <input
              className="search-input"
              placeholder="업무를 한 줄로 소개해 주세요."
              value={searchData.query}
              onChange={onQueryChange}
              /*
          onClick={() => {
            setIsLogOn(true);
          }}
          onBlur={() => {
            setIsLogOn(false);
          }}
          */
            />
            <Btn
              label="검색"
              onClick={() => {
                postRecommendation(id, searchData);
              }}
              styleClass="search-btn white-blue"
            />
            <img src={bigDel} className="search-delete" onClick={resetQuery} />
            {isLogOn && <SearchLog />}
          </div>
          <div className="search-title-container">
            {isSearch ? (
              <div className="search-subtitle">OO님께 딱 맞는 인재</div>
            ) : (
              <div className="search-subtitle">지금 떠오르는 인재</div>
            )}
            <Select
              className="filter-select"
              defaultValue="조회수 높은순"
              options={filterData}
            />
          </div>
          <div className="resume-long-card-container">
            {resumeList?.map((r, index) => {
              const convertedSkills = JSON.parse(
                '{"skills": ' + r.skills + '}',
              ).skills;
              return (
                <ResumeLongCard
                  key={index}
                  seniorName="김**"
                  careerYear={r.career_year}
                  jobGroup={r.job_group}
                  jobName={r.job_role}
                  keyword={r.keyword}
                  skills={convertedSkills}
                  commuteType={r.commute_type}
                  isVerified={r.is_verified}
                  resumeId={r.resume_id}
                  profileImage={r.profile_image}
                  recommendComments={r.comments}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Search;
