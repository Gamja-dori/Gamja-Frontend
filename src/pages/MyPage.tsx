import Title from 'components/_common/Title';
import Info from 'components/mypage/info/Info';
import Profile from 'components/mypage/profile/Profile';
import DefaultResume from 'components/mypage/defaultResume/DefaultResume';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';
import { UserInfoAtom } from 'recoil/UserProfile';
import Suggestion from 'components/mypage/suggestion/Suggestion';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const userInfoData = useRecoilValue(UserInfoAtom);

  const { isSignin } = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [isSignin]);

  const isMobile = useMediaQuery({
    query: '(max-width:802px)',
  });

  return (
    <>
      {isSignin && (
        <>
          <Title label="내 정보" />
          {isMobile ? (
            <div className="mypage-div">
              <div className="mypage-mobile-div">
                <Profile />
                <Info />
                {userInfoData.is_senior ? <DefaultResume /> : <Suggestion />}
              </div>
            </div>
          ) : (
            <div className="mypage-div">
              <Info />
              <div className="mypage-small-div">
                <Profile />
                {userInfoData.is_senior ? <DefaultResume /> : <Suggestion />}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MyPage;
