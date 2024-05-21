import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import notice from '../../../assets/icons/notice.svg';
import hamburger from '../../../assets/icons/hamburger.svg';
import logo from '../../../assets/icons/logo.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SigninAtom, SigninStateAtom } from 'recoil/Signin';
import { GetNotificationCnt } from 'api/suggestion';
import { NotificationCntAtom } from 'recoil/Notifications';

const Header = () => {
  const { isSignin, isSenior } = useRecoilValue(SigninStateAtom);
  const [notificationCntData, setNotificationCntData] =
    useRecoilState(NotificationCntAtom);
  const { id } = useRecoilValue(SigninAtom);
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [notificationCnt, setNotificationCnt] = useState(0);

  useEffect(() => {
    if (id > 0 && notificationCntData !== notificationCnt) {
      getNotificationCnt();
    }
  }, [id, notificationCntData]);

  const getNotificationCnt = async () => {
    const res = await GetNotificationCnt(id);
    const cnt = res?.data.notifications_count;
    setNotificationCnt(cnt);
    setNotificationCntData(cnt);
  };

  return (
    <div className="header">
      <div className="header_logo" onClick={() => navigate('/')}>
        <img src={logo} />
        다시
      </div>
      {isMobile ? (
        <div style={{ display: 'flex' }}>
          <div className="header-notice">
            <img
              className="header_icon"
              onClick={() => navigate('/notice')}
              src={notice}
            />
            {notificationCnt > 0 && <div>{notificationCnt}</div>}
          </div>
          <img
            className="header_icon"
            src={hamburger}
            onClick={() => setIsOpen(true)}
          />
          {isOpen && <Hamburger setIsOpen={setIsOpen} isLogin={isSignin} />}
        </div>
      ) : (
        <>
          <div className="header_txt_container">
            <div
              className="header_txt"
              onClick={() => navigate('/about-us/senior')}
            >
              서비스 소개
            </div>
            {isSenior ? (
              <div className="header_txt" onClick={() => navigate('/resume')}>
                이력서 관리
              </div>
            ) : (
              <div
                className="header_txt"
                onClick={() => navigate('/suggestion/management')}
              >
                채용 제안 관리
              </div>
            )}
            <div className="header_txt" onClick={() => navigate('/search')}>
              인재풀 조회
            </div>
          </div>
          {isSignin ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="header-notice">
                <img
                  className="header_icon"
                  src={notice}
                  onClick={() => navigate('/notice')}
                />
                {notificationCnt > 0 && <div>{notificationCnt}</div>}
              </div>
              <button
                className="header_btn"
                onClick={() => navigate('/my-page')}
              >
                내 정보
              </button>
            </div>
          ) : (
            <button className="header_btn" onClick={() => navigate('/sign-in')}>
              로그인/회원가입
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
