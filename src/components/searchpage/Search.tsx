import { useState, useEffect } from 'react';
import { SearchLog } from './SearchLog';
import { Select, Tooltip } from 'antd';
import {
  ResumeSearchAtom,
  ResumeListAtom,
  ResumeDetailAtom,
} from 'recoil/Recommendation';
import { SigninAtom } from 'recoil/Signin';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ResumeSearchData } from 'data-type';
import { GetMainSeniorList, PostRecommendation } from 'api/recommends';
import { blurName, parseSkills } from 'components/utils/ResumeUtils';
import ResumeLongCard from './ResumeLongCard';
import Filter from './Filter';
import filter from '../../assets/icons/search/filter.svg';
import info from '../../assets/icons/search/info.svg';
import bigDel from '../../assets/icons/search/circle-delete.svg';
import Btn from 'components/_common/Btn';

const Search = () => {
  const [searchData, setSearchData] = useRecoilState(ResumeSearchAtom);
  const [resumeList, setResumeList] = useRecoilState(ResumeListAtom);
  const [resumeData, setResumeData] = useRecoilState(ResumeDetailAtom);
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
  const { id, name } = useRecoilValue(SigninAtom);

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
    setSearchData((prev) => {
      // 검색 데이터 초기화
      return {
        query: '',
        job_group: '직군',
        job_role: '직무',
        skills: '[]',
        min_career_year: 0,
        max_career_year: 50,
        duration_start: 0,
        duration_end: 12,
        min_month_pay: 0,
        max_month_pay: 1000,
        commute_type: '희망 근무 형태',
      };
    });
    setResumeData(() => {
      return {
        successfully_get: false,
        user_id: -1,
        resume_id: -1,
        is_submitted: true,
        keyword: '',
        introduction: '',
        job_group: '',
        job_role: '',
        career_year: -1,
        skills: '[]',
        careers: [],
        educations: [],
        projects: [],
        portfolios: [],
        duration_start: -1,
        duration_end: -1,
        min_month_pay: -1,
        max_month_pay: -1,
        commute_type: '',
        profile_image: '',
        name: '',
        is_verified: false,
      };
    });
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
        <Filter setIsFilterOn={setIsFilterOn} setIsSearch={setIsSearch} />
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
              <div className="search-subtitle">{name}님께 딱 맞는 전문가</div>
            ) : (
              <div className="search-subtitle">지금 떠오르는 인재</div>
            )}
            <Select
              className="filter-select"
              defaultValue="조회수 높은순"
              options={filterData}
            />
          </div>
          {resumeList.length > 0 ? (
            <div className="resume-long-card-container">
              {resumeList?.map((r, index) => {
                return (
                  <ResumeLongCard
                    key={index}
                    seniorName={blurName(r.name)}
                    careerYear={r.career_year}
                    jobGroup={r.job_group}
                    jobName={r.job_role}
                    keyword={r.keyword}
                    skills={parseSkills(r.skills)}
                    commuteType={r.commute_type}
                    isVerified={r.is_verified}
                    resumeId={r.resume_id}
                    profileImage={r.profile_image}
                    recommendComments={r.comments}
                  />
                );
              })}
            </div>
          ) : (
            <p className="resume-list-empty">검색 결과가 없습니다!</p>
          )}
        </div>
      )}
    </>
  );
};
export default Search;
