import Label from 'components/_common/Label';
import ShowRecord from './ShowRecord';
const SeniorDetail = () => {
  const skills = ['React', 'JavaScript', 'TypeScript'];
  const files = ['abcde.pdf', 'shabevs.txt'];
  const details = [
    {
      detailId: 1,
      detailName: 'abcde 개발',
      detailContents: '어쩌고 저쩌고 기술로 개발에 참여하여 신기술 완성에 공헌',
      durationStart: '2020년 4월',
      durationEnd: '2022년 1월',
    },
    {
      detailId: 2,
      detailName: 'abcde 개발',
      detailContents: '어쩌고 저쩌고 기술로 개발에 참여하여 신기술 완성에 공헌',
      durationStart: '2020년 4월',
      durationEnd: '2022년 1월',
    },
  ];
  return (
    <div className="resume-input-container input-div">
      <div>
        <Label label="보유 스킬 및 자격증" />
        <div className="resume-card-tags">
          {skills.map((sk, index) => (
            <div className="resume-tag skill-tag" key={index}>
              {sk}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Label label="경력사항" />
        <div className="senior-resume-contents">
          <ShowRecord
            recordId={1}
            firstName="삼성전자"
            secondName="네트워크 사업부 수석 연구원"
            durationStart="2007년 8월"
            durationEnd="2023년 12월"
            hasDetail={true}
            details={details}
          />
          <ShowRecord
            recordId={2}
            firstName="삼성전자"
            secondName="네트워크 사업부 수석 연구원"
            durationStart="2007년 8월"
            durationEnd="2023년 12월"
          />
        </div>
      </div>
      <div>
        <Label label="학력사항" />
        <div className="senior-resume-contents">
          <ShowRecord
            recordId={3}
            firstName="카이스트"
            secondName="전산학 석사"
            durationStart="2001년 3월"
            durationEnd="2003년 2월"
          />
          <ShowRecord
            recordId={3}
            firstName="카이스트"
            secondName="전산학 학사"
            durationStart="1997년 3월"
            durationEnd="2001년 2월"
          />
        </div>
      </div>
      <div>
        <Label label="프로젝트 이력" />
        <div className="senior-resume-contents">
          <ShowRecord
            recordId={4}
            firstName="abcde 프로젝트"
            secondName="이런 저런 기술을 이용해 어쩌고 저쩌고를 만들어 무슨무슨 상을 받았음"
            durationStart="2007년 8월"
            durationEnd="2023년 12월"
          />
        </div>
      </div>
      <div>
        <Label label="포트폴리오" />
        <div className="resume-card-tags">
          {files.map((fl, index) => (
            <button className="resume-tag senior-portfolio" key={index}>
              {fl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SeniorDetail;
