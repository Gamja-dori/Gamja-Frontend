import { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';
import {
  areaData,
  jobData,
  yearData,
  skillData,
  commuteTypeData,
} from './ResumeData';
import { useRecoilState } from 'recoil';
import { ResumeAtom } from 'recoil/Resume';
import { ExtractPriorResume, CreateResumeDetail } from 'api/resume';
import SelectTag from './SelectTag';
import BannerBtn from './BannerBtn';
import Record from './Record';
import UploadBtn from './UploadBtn';
import PaySlider from '../_common/PaySlider';
import Label from 'components/_common/Label';
import resume from '../../assets/icons/resume/resume.svg';
import bulb from '../../assets/icons/resume/bulb.svg';

const ResumeInput = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedArea, setSelectedArea] = useState('직군');
  const [resumeData, setResumeData] = useRecoilState(ResumeAtom);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  useEffect(() => {
    setSelectedArea(resumeData.job_group);
    const newSkills = '{"skills": ' + resumeData.skills + '}';
    setSelectedSkills(JSON.parse(newSkills).skills);
    console.log(newSkills);
    console.log(JSON.parse(newSkills).skills);
  }, [resumeData.successfully_get]);

  const extractPriorResume = async (
    user_id: number,
    resume_id: number,
    prior_resume_name: string,
    prior_resume_file: File,
  ) => {
    const res = await ExtractPriorResume(
      user_id,
      resume_id,
      prior_resume_name,
      prior_resume_file,
    );
    setResumeData((prev) => {
      return {
        ...prev,
        careers: [...prev.careers, ...res?.data.careers],
        educations: [...prev.educations, ...res?.data.educations],
      };
    });
    setIsLoading(false);
  };

  const createResumeDetail = async (
    user_id: number,
    resume_id: number,
    detail_type: string,
    career_id = 0,
  ) => {
    const res = await CreateResumeDetail(
      user_id,
      resume_id,
      detail_type,
      career_id,
    );
    setResumeData((prev) => {
      if (detail_type !== 'performances') {
        const newItems = [...prev[detail_type], { ...res?.data.detail }];
        const newResume = { ...prev };
        newResume[detail_type] = newItems;
        return newResume;
      } else {
        const newCareers = prev['careers'].map((item: any) => {
          const newCareer = { ...item };
          if (career_id == item.id) {
            newCareer['performances'] = [
              ...item.performances,
              { ...res?.data.detail },
            ];
          }
          return newCareer;
        });
        const newResume = { ...prev };
        newResume['careers'] = newCareers;
        return newResume;
      }
    });
  };

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

  const onDetailChange = (
    target_id: number,
    target: string,
    target_detail: string,
    value: string,
    career_id?: number,
  ) => {
    setResumeData((prev) => {
      if (target !== 'performances') {
        const newItems = prev[target].map((item: any) => {
          // newItems 배열 반환
          const newItem = { ...item };
          newItem[target_detail] =
            item.id == target_id ? value : item[target_detail];
          return newItem; // newItem 객체 반환
        });
        const newResume = { ...prev };
        newResume[target] = newItems; // newItems 배열 교체
        return newResume; // resumeData 객체 반환
      } else {
        const newCareers = prev['careers'].map((item: any) => {
          const newCareer = { ...item };
          if (career_id == item.id) {
            newCareer['performances'] = newCareer['performances'].map(
              (p: any) => {
                const newPerformance = { ...p };
                newPerformance[target_detail] =
                  p.id == target_id ? value : p[target_detail];
                return newPerformance; // newItem 객체 반환
              },
            );
          }
          return newCareer;
        });
        const newResume = { ...prev };
        newResume['careers'] = newCareers;
        return newResume;
      }
    });
  };

  const fileInput = useRef<HTMLInputElement>(null);

  // 파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const handleButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    fileInput.current?.click();
  };

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsLoading(true);
      extractPriorResume(
        resumeData.user_id,
        resumeData.resume_id,
        e.target.files[0].name,
        e.target.files[0],
      );
    }
  };

  return (
    <>
      {isLoading && (
        <div className="modal-bg-div">
          <Spin tip="이력서 정보 추출중 ..." size="large"></Spin>
        </div>
      )}
      <div className="resume-banner-container">
        <BannerBtn
          title="이력서 자동완성"
          content="기존 이력서 파일 업로드"
          svg={resume}
          styleClass="dark-green"
          onClick={handleButtonClick}
        />
        <input
          type="file"
          ref={fileInput}
          accept=".pdf"
          onChange={handleChange}
          style={{ display: 'none' }}
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
            style={{ height: 'auto' }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="경력사항" isRequired={true} />
          <button
            className="add-record-btn"
            onClick={() =>
              createResumeDetail(
                resumeData.user_id,
                resumeData.resume_id,
                'careers',
              )
            }
          >
            +추가
          </button>
          {resumeData.careers?.map((c, index) => {
            return (
              <div key={index}>
                <Record
                  startDate={c.start_year_month}
                  endDate={c.end_year_month}
                  firstPlaceholder="회사명"
                  secondPlaceholder="부서/직책명"
                  firstValue={c.company_name}
                  secondValue={c.job_name}
                  targetId={c.id}
                  target="careers"
                  target_detail={['company_name', 'job_name']}
                  onDetailChange={onDetailChange}
                />
                <button
                  className="add-mini-record-btn"
                  onClick={() =>
                    createResumeDetail(
                      resumeData.user_id,
                      resumeData.resume_id,
                      'performances',
                      c.id,
                    )
                  }
                >
                  +주요 성과 추가
                </button>
                <div className="record-div">
                  {c.performances.map((p, index) => {
                    return (
                      <Record
                        key={index}
                        isMini={true}
                        startDate={p.start_year_month}
                        endDate={p.end_year_month}
                        firstPlaceholder="성과명"
                        secondPlaceholder="상세 업무 내용을 기입해주세요"
                        firstValue={p.performance_name}
                        secondValue={p.performance_detail}
                        targetId={p.id}
                        careerId={c.id}
                        target="performances"
                        target_detail={[
                          'performance_name',
                          'performance_detail',
                        ]}
                        onDetailChange={onDetailChange}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="학력사항" isRequired={true} />
          <button
            className="add-record-btn"
            onClick={() =>
              createResumeDetail(
                resumeData.user_id,
                resumeData.resume_id,
                'educations',
              )
            }
          >
            +추가
          </button>
          <div className="record-div">
            {resumeData.educations?.map((e, index) => {
              return (
                <Record
                  key={index}
                  startDate={e.start_year_month}
                  endDate={e.end_year_month}
                  firstPlaceholder="학교명"
                  secondPlaceholder="학위/전공명"
                  firstValue={e.education_name}
                  secondValue={e.education_info}
                  targetId={e.id}
                  target="educations"
                  target_detail={['education_name', 'education_info']}
                  onDetailChange={onDetailChange}
                />
              );
            })}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Label label="프로젝트 이력" isRequired={true} />
          <button
            className="add-record-btn"
            onClick={() =>
              createResumeDetail(
                resumeData.user_id,
                resumeData.resume_id,
                'projects',
              )
            }
          >
            +추가
          </button>
          <div className="record-div">
            {resumeData.projects?.map((p, index) => {
              return (
                <Record
                  key={index}
                  needDetail={true}
                  startDate={p.start_year_month}
                  endDate={p.end_year_month}
                  firstPlaceholder="프로젝트명"
                  secondPlaceholder="상세 작업 내용을 기입해주세요"
                  firstValue={p.project_name}
                  secondValue={p.project_detail}
                  targetId={p.id}
                  target="projects"
                  target_detail={['project_name', 'project_detail']}
                  onDetailChange={onDetailChange}
                />
              );
            })}
          </div>
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
