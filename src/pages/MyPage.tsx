import Title from 'components/_common/Title';
import Info from 'components/mypage/info/Info';
import Profile from 'components/mypage/profile/Profile';
import DefaultResume from 'components/mypage/defaultResume/DefaultResume';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { UserProfileAtom } from 'recoil/UserProfile';
import { InfoFormData } from 'data-type';
import { GetCompanyProfile } from 'api/company_user';
import { GetSeniorProfile } from 'api/senior_user';
import Suggestion from 'components/mypage/suggestion/Suggestion';

const MyPage = () => {
  const SigninData = useRecoilValue(SigninAtom);
  const [userProfileData, setUserProfileData] = useRecoilState(UserProfileAtom);

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
      setUserProfileData({
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
    const id = SigninData.id;
    const isSenior = SigninData.is_senior;
    if (id !== -1) {
      if (isSenior) {
        getSeniorData(id);
      } else {
        getCompanyData(id);
      }
    }
  }, [SigninData]);

  const isMobile = useMediaQuery({
    query: '(max-width:802px)',
  });

  return (
    <>
      <Title label="내 정보" />
      {isMobile ? (
        <div className="mypage-div">
          <div className="mypage-mobile-div">
            <Profile />
            <Info />
            {userProfileData.is_senior ? <DefaultResume /> : <Suggestion />}
          </div>
        </div>
      ) : (
        <div className="mypage-div">
          <Info />
          <div className="mypage-small-div">
            <Profile />
            {userProfileData.is_senior ? <DefaultResume /> : <Suggestion />}
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;
