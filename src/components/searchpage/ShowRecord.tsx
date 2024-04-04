import { ShowRecordProps } from 'props-type';

const ShowRecord = ({
  recordId,
  firstName,
  secondName,
  durationStart,
  durationEnd,
  hasDetail = false,
  details,
}: ShowRecordProps) => {
  return (
    <div className="show-record-wrapper" key={recordId}>
      <div className="first-name">{firstName}</div>
      <div className="second-name">{secondName}</div>
      <div className="duration">
        {durationStart} - {durationEnd}
      </div>
      {hasDetail && (
        <>
          {details?.map((dt) => {
            return (
              <div className="show-record-mini-wrapper" key={dt.detailId}>
                <div className="dot" />
                <div className="show-record-wrapper">
                  <div className="detail-name">{dt.detailName}</div>
                  <div className="detail-contents">{dt.detailContents}</div>
                  <div className="detail-duration">
                    {dt.durationStart} - {dt.durationEnd}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ShowRecord;
