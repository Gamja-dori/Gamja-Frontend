import { RecordProps, RecordDateProps } from 'props-type';
import { DeleteResumeDetail } from 'api/resume';
import { ResumeAtom } from 'recoil/Resume';
import { useRecoilState } from 'recoil';
import deleteIcon from '../../assets/icons/resume/delete-detail.svg';

const RecordDate = ({
  target,
  targetId,
  startDate,
  endDate,
  careerId,
  onDetailChange,
}: RecordDateProps) => {
  const [resumeData, setResumeData] = useRecoilState(ResumeAtom);

  const deleteResumeDetail = async (
    user_id: number,
    resume_id: number,
    detail_type: string,
    detail_id: number,
    career_id = 0,
  ) => {
    const res = await DeleteResumeDetail(
      user_id,
      resume_id,
      detail_type,
      detail_id,
      career_id,
    );
    setResumeData((prev) => {
      if (detail_type !== 'performances') {
        const newItems = prev[detail_type].filter(
          (item: any) => item.id !== detail_id,
        );
        const newResume = { ...prev };
        newResume[detail_type] = newItems;
        return newResume;
      } else {
        const newCareers = prev['careers'].map((item: any) => {
          console.log('perf');
          const newCareer = { ...item };
          if (career_id == item.id) {
            newCareer['performances'] = newCareer['performances'].filter(
              (p: any) => p.id !== detail_id,
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

  return (
    <>
      <div className="record-container">
        <div className="record-date ">
          <input
            placeholder="0000.00"
            value={startDate}
            onChange={(e) =>
              onDetailChange(
                targetId,
                target,
                'start_year_month',
                e.target.value,
                careerId,
              )
            }
          />
          <p>~</p>
          <input
            placeholder="0000.00"
            value={endDate}
            onChange={(e) =>
              onDetailChange(
                targetId,
                target,
                'end_year_month',
                e.target.value,
                careerId,
              )
            }
          />
        </div>
        <img
          className="record-delete"
          src={deleteIcon}
          onClick={() =>
            deleteResumeDetail(
              resumeData.user_id,
              resumeData.resume_id,
              target,
              targetId,
              careerId,
            )
          }
        />
      </div>
    </>
  );
};

const Record = ({
  isMini = false,
  needDetail = false,
  startDate,
  endDate,
  firstPlaceholder,
  secondPlaceholder,
  firstValue,
  secondValue,
  targetId,
  careerId,
  target,
  target_detail,
  onDetailChange,
}: RecordProps) => {
  return (
    <>
      {isMini ? (
        <div className="record-wrapper record-mini">
          <RecordDate
            targetId={targetId}
            careerId={careerId}
            target={target}
            startDate={startDate}
            endDate={endDate}
            onDetailChange={onDetailChange}
          />
          <input
            className="input"
            placeholder={firstPlaceholder}
            value={firstValue}
            onChange={(e) =>
              onDetailChange(
                targetId,
                target,
                target_detail[0],
                e.target.value,
                careerId,
              )
            }
          />
          <textarea
            className="resume-text-area"
            style={{ height: '8rem', marginTop: '1rem' }}
            placeholder={secondPlaceholder}
            value={secondValue}
            onChange={(e) =>
              onDetailChange(
                targetId,
                target,
                target_detail[1],
                e.target.value,
                careerId,
              )
            }
          />
        </div>
      ) : (
        <div className="record-wrapper">
          <RecordDate
            targetId={targetId}
            target={target}
            startDate={startDate}
            endDate={endDate}
            onDetailChange={onDetailChange}
          />
          <input
            className="input"
            placeholder={firstPlaceholder}
            value={firstValue}
            onChange={(e) =>
              onDetailChange(targetId, target, target_detail[0], e.target.value)
            }
          />
          {needDetail ? (
            <textarea
              className="resume-text-area"
              style={{ height: '8rem', marginTop: '1rem' }}
              placeholder={secondPlaceholder}
              value={secondValue}
              onChange={(e) =>
                onDetailChange(
                  targetId,
                  target,
                  target_detail[1],
                  e.target.value,
                )
              }
            />
          ) : (
            <input
              className="input"
              placeholder={secondPlaceholder}
              value={secondValue}
              onChange={(e) =>
                onDetailChange(
                  targetId,
                  target,
                  target_detail[1],
                  e.target.value,
                )
              }
            />
          )}
        </div>
      )}
    </>
  );
};

export default Record;
