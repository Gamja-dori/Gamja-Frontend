import cameraIcon from '../../assets/icons/camera.svg';
import { ChangeProfile } from 'api/user';
import { useRecoilState } from 'recoil';
import { SigninAtom } from 'recoil/Signin';

const Picture = () => {
  const [signinData, setSigninData] = useRecoilState(SigninAtom);

  const handleProfile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const form = new FormData();
      form.append('image', e.target.files[0]);

      const id = signinData.id;
      const res = await ChangeProfile(id, form);
      if (res?.status === 200) {
        setSigninData({ ...signinData, profile_image: res.data.profile_image });
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
        <img src={signinData.profile_image} className="picture light-gray" />
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
