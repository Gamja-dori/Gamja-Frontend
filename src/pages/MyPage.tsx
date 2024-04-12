import Title from 'components/_common/Title';
import Info from 'components/mypage/info/Info';
import Profile from 'components/mypage/profile/Profile';
import DefaultResume from 'components/mypage/defaultResume/DefaultResume';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { SigninAtom, SigninStateAtom } from 'recoil/Signin';
import { UserInfoAtom, UserProfileAtom } from 'recoil/UserProfile';
import { InfoFormData } from 'data-type';
import { GetCompanyProfile } from 'api/company_user';
import { GetSeniorProfile } from 'api/senior_user';
import Suggestion from 'components/mypage/suggestion/Suggestion';
import { useNavigate } from 'react-router-dom';
import { GetProfile } from 'api/user';

const MyPage = () => {
  const signinData = useRecoilValue(SigninAtom);
  const [userInfoData, setUserInfoData] = useRecoilState(UserInfoAtom);
  const setUserProfileData = useSetRecoilState(UserProfileAtom);

  const { isSignin } = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [isSignin]);

  const getProfile = async (id: number) => {
    const res = await GetProfile(id);
    const data = res?.data;
    setUserProfileData(data.image);
  };

  const getSeniorData = async (id: number) => {
    const res = await GetSeniorProfile(id);
    const data = res?.data;
    saveData(data);
  };

  const getCompanyData = async (id: number) => {
    const res = await GetCompanyProfile(id);
    const data = res?.data;
    saveData(data);
  };

  const saveData = (data: InfoFormData) => {
    if (data) {
      setUserInfoData({
        id: data.id,
        name: data.name,
        username: data.username,
        phone_number: data.phone_number,
        email: data.email,
        is_senior: data.is_senior,
        is_enterprise: data.is_enterprise,
        default_resume: data.default_resume ?? -1,
        business_number: data.business_number ?? '',
        is_certified: data.is_certified ?? false,
      });
    }
  };

  useEffect(() => {
    const id = signinData.id;
    const isSenior = signinData.is_senior;
    if (id !== -1) {
      getProfile(id);
      if (isSenior) {
        getSeniorData(id);
      } else {
        getCompanyData(id);
      }
    }
  }, [signinData]);

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
