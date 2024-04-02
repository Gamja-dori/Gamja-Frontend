import { Select } from 'antd';
import type { SelectProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from 'components/_common/Title';
import Label from 'components/_common/Label';
import SelectTag from '../resumepage/SelectTag';
import PaySlider from 'components/_common/PaySlider';
import close from '../../assets/icons/hamburger/close.svg';

const Filter = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState('직군');
  const [selectedJob, setSelectedJob] = useState('직무');
  const [selectedCareer, setSelectedCareer] = useState('0년');

  const onAreaChange = () => {
    setSelectedJob('직무');
  };

  const areaData = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
  ];
  const jobData = [{ value: 'Yiminghe', label: 'yiminghe' }];
  const yearData = [
    { value: 1, label: '1년' },
    { value: 2, label: '2년' },
  ];
  const skills: SelectProps['options'] = [
    // 보유 기술
    { value: 1, label: '1년' },
    { value: 2, label: '2년' },
  ];
  const commuteTypeData = [
    { value: '상주 근무', label: '상주 근무' },
    { value: '원격 근무', label: '원격 근무' },
    { value: '상주 근무 및 원격 근무', label: '상주 근무 및 원격 근무' },
  ];

  return (
    <div className="search-filter-container">
      <Title label="필터링" />
      <div className="search-filter-title">
        <div className="reset">초기화</div>
        <img
          src={close}
          onClick={() => {
            navigate('/search');
          }}
        />
      </div>
      <div className="search-filter-contents">
        <div>
          <div>
            <Label label="희망 근무 형태" />
            <Select
              className="select-long"
              defaultValue="상주 근무"
              onChange={onAreaChange}
              options={commuteTypeData}
            />
          </div>
        </div>
        <div>
          <Label label="직군 및 직무" />
          <div className="select-container">
            <Select
              className="select-mini"
              defaultValue="직군"
              onChange={onAreaChange}
              options={areaData}
            />
            <Select
              className="select-mini"
              defaultValue="직무"
              onChange={onAreaChange}
              options={jobData}
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
            defaultValue={[]}
            options={skills}
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
            navigate('/search');
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default Filter;
