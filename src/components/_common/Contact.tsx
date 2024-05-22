import Label from './Label';

import mail from '../../assets/icons/contact/mail.svg';
import phone from '../../assets/icons/contact/phone.svg';
import user from '../../assets/icons/contact/user.svg';

import { useEffect, useState } from 'react';
import { ContactData } from 'data-type';
import { GetSecret } from 'api/senior_user';
import { parsePhoneNumber } from 'components/utils/PhoneUtils';
import { ContactProps } from 'props-type';

const Contact = ({ id }: ContactProps) => {
  const [data, setData] = useState<ContactData>({
    name: '',
    phone_number: '',
    email: '',
  });

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const res = await GetSecret(id);
    setData(res?.data);
  };

  return (
    <div className="contact-div">
      <Label label={`${data.name}님의 연락처`} />
      <div className="contact-info-div">
        <div>
          <img src={user} />
          <p>{data.name}</p>
        </div>
        {data.phone_number && (
          <div>
            <img src={phone} />
            <p>{parsePhoneNumber(data.phone_number)}</p>
          </div>
        )}
        {data.email && (
          <div>
            <img src={mail} />
            <p>{data.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
