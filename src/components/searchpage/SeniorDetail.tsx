import { ResumeDetailAtom } from 'recoil/Recommendation';
import { useRecoilState } from 'recoil';
import { parseSkills } from 'components/utils/ResumeUtils';
import Label from 'components/_common/Label';
import ShowRecord from './ShowRecord';
const SeniorDetail = () => {
  const [resumeData, setResumeData] = useRecoilState(ResumeDetailAtom);
  const skills: string[] = parseSkills(resumeData.skills);

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
          {resumeData.careers?.map((c, index) => {
            return (
              <>
                <ShowRecord
                  key={index}
                  recordId={c.id}
                  firstName={c.company_name}
                  secondName={c.job_name}
                  durationStart={c.start_year_month}
                  durationEnd={c.end_year_month}
                />
                {c.performances?.map((p, index) => {
                  return (
                    <ShowRecord
                      key={index}
                      recordId={p.id}
                      firstName={p.performance_name}
                      secondName={p.performance_detail}
                      durationStart={p.start_year_month}
                      durationEnd={p.end_year_month}
                      isDetail={true}
                    />
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
      <div>
        <Label label="학력사항" />
        <div className="senior-resume-contents">
          {resumeData.educations?.map((e, index) => {
            return (
              <ShowRecord
                key={index}
                recordId={e.id}
                firstName={e.education_name}
                secondName={e.education_info}
                durationStart={e.start_year_month}
                durationEnd={e.end_year_month}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Label label="프로젝트 이력" />
        <div className="senior-resume-contents">
          {resumeData.projects?.map((p, index) => {
            return (
              <ShowRecord
                key={index}
                recordId={p.id}
                firstName={p.project_name}
                secondName={p.project_detail}
                durationStart={p.start_year_month}
                durationEnd={p.end_year_month}
              />
            );
          })}
        </div>
      </div>
      <div>
        {resumeData.portfolios.length > 0 && (
          <>
            <Label label="포트폴리오" />
            <div className="resume-card-tags">
              {resumeData.portfolios?.map((p, index) => (
                <button className="resume-tag senior-portfolio" key={index}>
                  {p.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default SeniorDetail;
