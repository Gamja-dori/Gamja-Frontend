import del from '../../assets/icons/search/delete.svg';
import miniSearch from '../../assets/icons/search/mini-search.svg';
export const SearchLog = () => {
  const searchRecord: string[] = [
    '비즈니스 영어가 가능하고 제약회사 경험이 있는 사람',
    '해외 영업팀 근무 경험이 있으면서 영어에 능통하고 소통이 원활한 5년차 이상의 전문 통역가',
  ];
  return (
    <>
      {searchRecord.length != 0 && (
        <div className="search-history-container">
          <div className="search-history-title">
            <div>최근 검색 기록</div>
            <div className="delete">전체 삭제</div>
          </div>
          <div className="search-history-contents">
            {searchRecord.map((sr, idx) => (
              <div className="content" key={idx}>
                <img src={miniSearch} />
                <div>{sr}</div>
                <img src={del} className="delete" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
