import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { PaySliderProps } from 'props-type';
import { ResumeAtom } from 'recoil/Resume';
import { useRecoilValue, useRecoilState } from 'recoil';

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
  const [resume, setResume] = useRecoilState(ResumeAtom);

  const onDurationChange = (value: number[]) => {
    setResume((prev) => {
      return {
        ...prev,
        duration_start: value[0],
        duration_end: value[1],
      };
    });
  };

  const onPayChange = (value: number[]) => {
    setResume((prev) => {
      return {
        ...prev,
        min_month_pay: value[0],
        max_month_pay: value[1],
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
            tooltip={{ open: true }}
            style={{ marginTop: '4rem' }}
          />
        ) : (
          <Slider
            range
            marks={durationMarks}
            max={12}
            value={[resume.duration_start, resume.duration_end]}
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
          defaultValue={[0, 50]}
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
              defaultValue={[0, 1000]}
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
              value={[resume.min_month_pay, resume.max_month_pay]}
              onChange={onPayChange}
              tooltip={{ open: true }}
            />
          </>
        ))}
    </>
  );
};

export default PaySlider;
