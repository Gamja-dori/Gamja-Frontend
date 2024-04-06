import { UserProps } from 'props-type';
import { useEffect, useState } from 'react';

import senior from '../../../assets/icons/senior.svg';
import company from '../../../assets/icons/company.svg';
import { useNavigate } from 'react-router-dom';

const TypeContent = ({ user }: UserProps) => {
  const [color, setColor] = useState('dark-green');
  const [imgSrc, setImgSrc] = useState('');
  const [path, setPath] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (user === '시니어') {
      setColor('dark-green');
      setImgSrc(senior);
      setPath('senior');
    } else if (user === '기업') {
      setColor('dark-blue');
      setImgSrc(company);
      setPath('company');
    }
  }, [user]);

  return (
    <div
      className={`${color} signup-type-div`}
      onClick={() => navigate(`/sign-up/${path}/form`, { replace: true })}
    >
      <div>
        <p>{user} 회원가입</p>
        <div className="big-arrow"></div>
      </div>
      <img src={imgSrc} />
    </div>
  );
};

export default TypeContent;
