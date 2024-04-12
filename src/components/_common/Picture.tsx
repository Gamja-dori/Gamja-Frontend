import cameraIcon from '../../assets/icons/camera.svg';
import { ChangeProfile } from 'api/user';
import { useRecoilState, useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { UserProfileAtom } from 'recoil/UserProfile';

const Picture = () => {
  const signinData = useRecoilValue(SigninAtom);
  const [userProfileData, setUserProfileData] = useRecoilState(UserProfileAtom);

  const handleProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const form = new FormData();
      form.append('image', e.target.files[0]);

      const id = signinData.id;
      const res = await ChangeProfile(id, form);
      if (res?.status === 200) {
        setUserProfileData(res.data.image);
      } else {
        alert(
          '프로필 사진 변경을 실패했습니다.\n작은 크기의 사진으로 설정해 주세요.',
        );
      }
    }
  };

  return (
    <>
      <div className="picture-div">
        <img
          src={'data:image/;base64,' + userProfileData}
          className="picture light-gray"
        />
        <div className="picture-icon light-gray">
          <input
            type="file"
            id="file"
            accept="image/jpeg, image/png"
            onChange={handleProfile}
          />
          <label htmlFor="file">
            <img src={cameraIcon} />
          </label>
        </div>
      </div>
    </>
  );
};

export default Picture;
