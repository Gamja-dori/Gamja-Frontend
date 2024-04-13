import { RecordProps, RecordDateProps } from 'props-type';

const RecordDate = ({
  target,
  targetId,
  startDate,
  endDate,
  onDetailChange,
}: RecordDateProps) => {
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
              )
            }
          />
          <p>~</p>
          <input
            placeholder="0000.00"
            value={endDate}
            onChange={(e) =>
              onDetailChange(targetId, target, 'end_year_month', e.target.value)
            }
          />
        </div>
        <div className="record-date">x</div>
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
          <textarea
            className="resume-text-area"
            style={{ height: '8rem', marginTop: '1rem' }}
            placeholder={secondPlaceholder}
            value={secondValue}
            onChange={(e) =>
              onDetailChange(targetId, target, target_detail[1], e.target.value)
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
