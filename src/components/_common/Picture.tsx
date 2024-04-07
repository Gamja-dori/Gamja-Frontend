import { PictureProps } from 'props-type';
import default_profile from '../../assets/images/default_profile.png';
import cameraIcon from '../../assets/icons/camera.svg';

const Picture = ({ src = default_profile }: PictureProps) => {
  return (
    <>
      <div className="picture-div">
        <img src={src} className="picture light-gray" />
        <div className="picture-icon light-gray">
          <img src={cameraIcon} />
        </div>
      </div>
    </>
  );
};

export default Picture;
