import company from '../../assets/icons/aboutus/about-company.png';

const CompanyTab = () => {
  return (
    <div className="about-div">
      <div className="about-desc-div">
        <div className="about-title-div">
          <img src={company} />
          <p>기업 회원</p>
        </div>
        <div className="about-content-div">
          <li>경력을 갖춘 전문가 인재를 다시의 인재풀에서 찾을 수 있어요.</li>
          <li>AI 인재 추천으로 맞춤형 전문가를 모아볼 수 있어요.</li>
          <li>원하는 인재에게 간편하게 채용 제안을 보내요.</li>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">AI 인재 추천</p>
        <div className="about-content-div">
          <li>업무 한 줄 소개를 검색하면 AI가 전문가를 찾아줘요.</li>
          <li>
            필터링으로 원하는 조건을 설정해요.
            <br />
            (근무 형태 / 직군 및 직무 / 보유 스킬 및 자격증 / 경력 / 희망 고용
            형태 / 급여)
          </li>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">채용 제안</p>
        <div className="about-content-div">
          <li>이력서를 확인하고 원하는 인재에게 채용 제안서를 작성해요.</li>
          <li>
            제안을 수락한 전문가와 협의 후 계약금의 10%를 수수료로 납부해요.
          </li>
          <li>결제 후 전문가의 연락처를 열람하고 채용을 진행해요.</li>
        </div>
      </div>
      <div className="about-desc-div">
        <p className="about-subtitle">리뷰 작성</p>
        <div className="about-content-div">
          <li>결제가 완료되면 전문가에 대한 리뷰를 작성할 수 있어요.</li>
          <li>리뷰는 전문가의 평판을 확인할 수 있는 자료로 활용돼요.</li>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
