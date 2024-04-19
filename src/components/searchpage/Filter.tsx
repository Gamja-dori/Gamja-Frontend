import { Select } from 'antd';
import { useState, useEffect } from 'react';
import Title from 'components/_common/Title';
import Label from 'components/_common/Label';
import SelectTag from '../resumepage/SelectTag';
import PaySlider from 'components/_common/PaySlider';
import close from '../../assets/icons/hamburger/close.svg';
import { SearchFilterProps } from 'props-type';
import {
  areaData,
  jobData,
  skillData,
  commuteTypeData,
} from '../resumepage/ResumeData';
import { ResumeSearchAtom, ResumeListAtom } from 'recoil/Recommendation';
import { SigninAtom } from 'recoil/Signin';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FilterSeniorList } from 'api/recommends';
import { ResumeSearchData } from 'data-type';

const Filter = ({
  setIsFilterOn,
  setIsSearch,
  setIsLoading,
}: SearchFilterProps) => {
  const [searchData, setSearchData] = useRecoilState(ResumeSearchAtom);
  const [resumeList, setResumeList] = useRecoilState(ResumeListAtom);
  const [selectedArea, setSelectedArea] = useState('직군');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { id } = useRecoilValue(SigninAtom);

  useEffect(() => {
    setSelectedArea(searchData.job_group);
    if (searchData.skills !== '[]') {
      setSelectedSkills(
        JSON.parse('{"skills": ' + searchData.skills + '}').skills,
      );
    }
  }, []);

  const filterSeniorList = async (
    user_id: number,
    search: ResumeSearchData,
  ) => {
    setIsLoading(true);
    setIsFilterOn(false);
    const res = await FilterSeniorList(user_id, search);
    setResumeList(res?.data.resumes);
    setIsSearch(true);
    setIsLoading(false);
  };

  const onAreaChange = (value: string) => {
    setSelectedArea(value);
    setSearchData((prev) => {
      return {
        ...prev,
        job_group: value,
        job_role: '직무',
      };
    });
  };

  const onJobChange = (value: string) => {
    setSearchData((prev) => {
      return {
        ...prev,
        job_role: value,
      };
    });
  };

  const onSkillChange = (value: string[]) => {
    setSelectedSkills(value);
    setSearchData((prev) => {
      const convertedSkills = JSON.stringify(value);
      return {
        ...prev,
        skills: convertedSkills,
      };
    });
  };

  const onCommuteChange = (value: string) => {
    setSearchData((prev) => {
      return {
        ...prev,
        commute_type: value,
      };
    });
  };

  const onResetClick = () => {
    setSearchData((prev) => {
      return {
        ...prev,
        job_group: '직군',
        job_role: '직무',
        min_career_year: 0,
        max_career_year: 50,
        duration_start: 0,
        duration_end: 12,
        skills: '[]',
        min_month_pay: 0,
        max_month_pay: 1000,
        commute_type: '희망 근무 형태',
      };
      // setIsSearch(false);
    });
    setSelectedSkills([]);
  };

  return (
    <div className="search-filter-container">
      <Title label="필터링" />
      <div className="search-filter-title">
        <div className="reset" onClick={onResetClick}>
          초기화
        </div>
        <img
          src={close}
          onClick={() => {
            setIsFilterOn(false);
          }}
        />
      </div>
      <div className="search-filter-contents">
        <div>
          <div>
            <Label label="희망 근무 형태" />
            <Select
              className="select-long"
              value={searchData.commute_type}
              onChange={onCommuteChange}
              options={commuteTypeData.map((a) => ({
                label: a,
                value: a,
              }))}
            />
          </div>
        </div>
        <div>
          <Label label="직군 및 직무" />
          <div className="select-container">
            <Select
              className="select-mini"
              value={searchData.job_group}
              onChange={onAreaChange}
              options={areaData.map((a) => ({
                label: a,
                value: a,
              }))}
            />
            <Select
              className="select-mini"
              onChange={onJobChange}
              value={searchData.job_role}
              options={jobData[areaData.indexOf(selectedArea)]?.map((a) => ({
                label: a,
                value: a,
              }))}
            />
          </div>
        </div>
        <div>
          <Label label="보유 스킬 및 자격증" />
          <Select
            className="select multiple"
            mode="multiple"
            tagRender={SelectTag}
            allowClear
            placeholder="스킬을 검색해 주세요"
            value={selectedSkills}
            onChange={onSkillChange}
            options={skillData}
            style={{ height: 'auto' }}
          />
        </div>
        <div>
          <Label label="경력" />
          <div className="slider-container">
            <PaySlider isCareer={true} />
          </div>
        </div>
        <div>
          <Label label="희망 근무 기간" />
          <div className="slider-container">
            <PaySlider isDuration={true} />
          </div>
        </div>
        <div>
          <Label label="급여" />
          <div className="slider-container">
            <PaySlider isPay={true} />
          </div>
        </div>
        <button
          className="search-filter-confirm-btn"
          onClick={() => {
            filterSeniorList(id, searchData);
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default Filter;
