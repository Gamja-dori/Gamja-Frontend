import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { PaySliderProps } from 'props-type';
import { ResumeAtom } from 'recoil/Resume';
import { ResumeSearchAtom } from 'recoil/Recommendation';
import { useRecoilState } from 'recoil';

const hourMarks: SliderSingleProps['marks'] = {
  0: '0원',
  50: '50만원',
};

const monthMarks: SliderSingleProps['marks'] = {
  0: '0원',
  1000: '1000만원',
};

const careerMarks: SliderSingleProps['marks'] = {
  0: '0년',
  50: '50년',
};

const durationMarks: SliderSingleProps['marks'] = {
  0: '0개월',
  12: '12개월',
};

const PaySlider = ({
  isSearch = true,
  isDuration,
  isCareer,
  isPay,
}: PaySliderProps) => {
  const [resumeData, setResumeData] = useRecoilState(ResumeAtom);
  const [searchData, setSearchData] = useRecoilState(ResumeSearchAtom);
  const onDurationChange = (value: number[]) => {
    if (isSearch) {
      setSearchData((prev) => {
        return {
          ...prev,
          duration_start: value[0],
          duration_end: value[1],
        };
      });
    }
    setResumeData((prev) => {
      return {
        ...prev,
        duration_start: value[0],
        duration_end: value[1],
      };
    });
  };

  const onPayChange = (value: number[]) => {
    if (isSearch) {
      setSearchData((prev) => {
        return {
          ...prev,
          min_month_pay: value[0],
          max_month_pay: value[1],
        };
      });
    } else {
      setResumeData((prev) => {
        return {
          ...prev,
          min_month_pay: value[0],
          max_month_pay: value[1],
        };
      });
    }
  };

  const onCareerChange = (value: number[]) => {
    setSearchData((prev) => {
      return {
        ...prev,
        min_career_year: value[0],
        max_career_year: value[1],
      };
    });
  };

  return (
    <>
      {isDuration &&
        (isSearch ? (
          <Slider
            range
            marks={durationMarks}
            max={12}
            defaultValue={[0, 12]}
            //value={[searchData.duration_start, searchData.duration_end]}
            //onChange={onDurationChange}
            tooltip={{ open: true }}
            style={{ marginTop: '4rem' }}
          />
        ) : (
          <Slider
            range
            marks={durationMarks}
            max={12}
            value={[resumeData.duration_start, resumeData.duration_end]}
            onChange={onDurationChange}
            tooltip={{ open: true }}
            style={{ marginTop: '4rem' }}
          />
        ))}
      {isCareer && (
        <Slider
          range
          marks={careerMarks}
          max={50}
          value={[searchData.min_career_year, searchData.max_career_year]}
          onChange={onCareerChange}
          tooltip={{ open: true }}
          style={{ marginTop: '4rem' }}
        />
      )}
      {isPay &&
        (isSearch ? (
          <>
            <div className="slider-title">월급</div>
            <Slider
              range
              marks={monthMarks}
              max={1000}
              value={[searchData.min_month_pay, searchData.max_month_pay]}
              onChange={onPayChange}
              tooltip={{ open: true }}
            />
          </>
        ) : (
          <>
            <div className="slider-title">월급</div>
            <Slider
              range
              marks={monthMarks}
              max={1000}
              value={[resumeData.min_month_pay, resumeData.max_month_pay]}
              onChange={onPayChange}
              tooltip={{ open: true }}
            />
          </>
        ))}
    </>
  );
};

export default PaySlider;
