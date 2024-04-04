import Btn from 'components/_common/Btn';
import Label from 'components/_common/Label';
import Subtitle from 'components/_common/Subtitle';

const Detail = () => {
  return (
    <div className="sub-container">
      <div className="suggest-detail-profile">
        <div className="suggest-detail-profile-img">
          <img src="https://cdn.vectorstock.com/i/preview-1x/17/46/development-business-logo-template-vector-31471746.jpg" />
        </div>
        <div className="suggest-detail-profile-content">
          <p>(주)개발코리아</p>
          <p>IT 기업</p>
        </div>
      </div>
      <div className="suggest-detail-content-div">
        <Subtitle label="제안 내용" />
        <div>
          <Label label="근무 형태" />
          <div className="suggest-detail-content resume-tag green-tag">
            외주
          </div>
        </div>
        <div>
          <Label label="근무 기간" />
          <div className="suggest-detail-content">
            2024년 1월 1일 ~ 2025년 1월 1일
          </div>
        </div>
        <div>
          <Label label="업무 소개" />
          <div className="suggest-detail-content suggest-detail-jd light-gray">
            안녕하세요, SI 기업 개발 코리아 입니다.글로벌 쇼핑몰 리뉴얼
            프로젝트의 타입스크립트 마이그레이션 작업을 부탁드리고 싶습니다.
            현장 근무와 원격 근무 모두 가능합니다.
          </div>
        </div>
      </div>
      <div className="btns-div">
        <Btn
          label="수락"
          onClick={() => console.log('수락 클릭')}
          styleClass="abreast-btn dark-green"
        />
        <Btn
          label="거절"
          onClick={() => console.log('거절 클릭')}
          styleClass="abreast-btn white"
        />
      </div>
    </div>
  );
};

export default Detail;
