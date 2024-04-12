import { Link } from 'react-router-dom';
import Content from './Content';
import computer from '../../assets/icons/computer.svg';
import folder from '../../assets/icons/folder.svg';
import zoom from '../../assets/icons/zoom.svg';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const Contents = () => {
  const { isSenior } = useRecoilValue(SigninStateAtom);
  return (
    <>
      <div className="button-div">
        <div className="contents-wrapper">
          <Link to="/about-us/senior">
            <Content
              title="다시"
              content="서비스 소개 바로가기"
              svg={computer}
              styleClass="green"
              subtitle="시니어 전문가 인재풀"
            />
          </Link>
          {isSenior ? (
            <Link to="/resume">
              <Content
                title="이력서 관리"
                content="이력서 등록하기"
                svg={folder}
                styleClass="dark-green"
              />
            </Link>
          ) : (
            <Link to="/suggestion/management">
              <Content
                title="채용 제안 관리"
                content="채용 제안 관리하기"
                svg={folder}
                styleClass="dark-green"
              />
            </Link>
          )}
          <Link to="/search">
            <Content
              title="AI 인재 추천"
              content="맞춤형 전문가 찾기"
              svg={zoom}
              styleClass="dark-blue"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Contents;
