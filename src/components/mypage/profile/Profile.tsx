import Picture from 'components/_common/Picture';
import UserTag from './UserTag';
import { useRecoilValue } from 'recoil';
import { UserProfileAtom } from 'recoil/UserProfile';

const Profile = () => {
  const UserProfileData = useRecoilValue(UserProfileAtom);

  return (
    <div className="mypage-profile-div">
      <p className="mypage-title mypage-flexdiv profile-title">프로필</p>
      <div className="profile-div light-gray">
        <Picture />
        <div className="profile-user-box">
          <div className="profile-username">
            <p>{UserProfileData.name}</p>
            <p>님</p>
          </div>
          {UserProfileData.is_senior ? (
            <UserTag user={'시니어 회원'} />
          ) : (
            <UserTag user={'기업 회원'} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
