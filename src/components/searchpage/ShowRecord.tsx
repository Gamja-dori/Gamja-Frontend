import { ShowRecordProps } from 'props-type';

const ShowRecord = ({
  recordId,
  firstName,
  secondName,
  durationStart,
  durationEnd,
  isDetail = false,
}: ShowRecordProps) => {
  return (
    <>
      {isDetail ? (
        <div className="show-record-mini-wrapper" key={recordId}>
          <div className="dot" />
          <div className="show-record-wrapper">
            <div className="detail-name">{firstName}</div>
            <div className="detail-contents">{secondName}</div>
            <div className="detail-duration">
              {durationStart} - {durationEnd}
            </div>
          </div>
        </div>
      ) : (
        <div className="show-record-wrapper" key={recordId}>
          <div className="first-name">{firstName}</div>
          <div className="second-name">{secondName}</div>
          <div className="duration">
            {durationStart} - {durationEnd}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRecord;
