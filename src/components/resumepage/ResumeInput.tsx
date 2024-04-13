import { useState, useEffect } from 'react';
import { Select } from 'antd';
import {
  areaData,
  jobData,
  yearData,
  skillData,
  commuteTypeData,
} from './ResumeData';
import { useRecoilState } from 'recoil';
import { ResumeAtom } from 'recoil/Resume';
import SelectTag from './SelectTag';
import BannerBtn from './BannerBtn';
import Record from './Record';
import UploadBtn from './UploadBtn';
import PaySlider from '../_common/PaySlider';
import Label from 'components/_common/Label';
import resume from '../../assets/icons/resume/resume.svg';
import bulb from '../../assets/icons/resume/bulb.svg';

const ResumeInput = () => {
  const [selectedArea, setSelectedArea] = useState('직군');
  const [resumeData, setResumeData] = useRecoilState(ResumeAtom);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    setSelectedArea(resumeData.job_group);
    setSelectedSkills(JSON.parse(resumeData.skills));
  }, []);

  const onAreaChange = (value: string) => {
    setSelectedArea(value);
    setResumeData((prev) => {
      return {
        ...prev,
        job_group: value,
        job_role: '직무',
      };
    });
  };

  const onJobChange = (value: string) => {
    setResumeData((prev) => {
      return {
        ...prev,
        job_role: value,
      };
    });
  };

  const onYearChange = (value: number) => {
    setResumeData((prev) => {
      return {
        ...prev,
        career_year: value,
      };
    });
  };

  const onSkillChange = (value: string[]) => {
    setSelectedSkills(value);
    setResumeData((prev) => {
      const convertedSkills = JSON.stringify(value);
      return {
        ...prev,
        skills: convertedSkills,
      };
    });
  };

  const onCommuteChange = (value: string) => {
    setResumeData((prev) => {
      return {
        ...prev,
        commute_type: value,
      };
    });
  };

  return (
    <>
      <div className="resume-banner-container">
        <BannerBtn
          title="이력서 자동완성"
          content="기존 이력서 파일 업로드"
          svg={resume}
          styleClass="dark-green"
        />
        <BannerBtn
          title="경력 인증하기"
          content="건강보험공단 통해 경력 조회"
          svg={bulb}
          styleClass="dark-blue"
        />
      </div>
      <div className="resume-input-container input-div">
        <div>
          <Label label="직군 및 직무" isRequired={true} />
          <div className="select-container">
            <Select
              className="select-mini"
              onChange={onAreaChange}
              value={resumeData.job_group}
              options={areaData.map((a) => ({
                label: a,
                value: a,
              }))}
            />
            <Select
              className="select-mini"
              onChange={onJobChange}
              value={resumeData.job_role}
              options={jobData[areaData.indexOf(selectedArea)]?.map((job) => ({
                label: job,
                value: job,
              }))}
            />
          </div>
        </div>
        <div>
          <Label label="총 경력" isRequired={true} />
          <Select
            className="select"
            placeholder="총 경력"
            onChange={onYearChange}
            value={resumeData.career_year}
            options={yearData.map((y) => ({
              label: String(y) + '년',
              value: y,
            }))}
          />
        </div>
        <div>
          <Label label="보유 스킬 및 자격증" isRequired={true} />
          <Select
            className="select multiple"
            mode="multiple"
            tagRender={SelectTag}
            allowClear
            placeholder="스킬을 검색해 주세요"
            value={selectedSkills}
            onChange={onSkillChange}
            options={skillData}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="경력사항" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record firstPlaceholder="회사명" secondPlaceholder="부서/직책명" />
          <button className="add-mini-record-btn">+주요 성과 추가</button>
          <Record
            isMini={true}
            firstPlaceholder="성과명"
            secondPlaceholder="상세 업무 내용을 기입해주세요"
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="학력사항" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record firstPlaceholder="학교명" secondPlaceholder="학위/전공명" />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="프로젝트 이력" isRequired={true} />
          <button className="add-record-btn">+추가</button>
          <Record
            needDetail={true}
            firstPlaceholder="프로젝트명"
            secondPlaceholder="상세 작업 내용을 기입해주세요"
          />
        </div>
        <div>
          <Label label="포트폴리오 파일" />
          <UploadBtn />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="희망 근무 기간" isRequired={true} />
          <PaySlider isDuration={true} isSearch={false} />
        </div>
        <div>
          <Label label="희망 급여" isRequired={true} />
          <div className="slider-container">
            <PaySlider isPay={true} isSearch={false} />
          </div>
        </div>
        <div>
          <Label label="희망 근무 형태" isRequired={true} />
          <Select
            className="select-long"
            onChange={onCommuteChange}
            value={resumeData.commute_type}
            options={commuteTypeData.map((c) => ({
              label: c,
              value: c,
            }))}
          />
        </div>
      </div>
    </>
  );
};
export default ResumeInput;
