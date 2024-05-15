import Label from './Label';

import mail from '../../assets/icons/contact/mail.svg';
import phone from '../../assets/icons/contact/phone.svg';
import user from '../../assets/icons/contact/user.svg';

const Contact = () => {
  return (
    <div className="contact-div">
      <Label label={`${'김다시'}님의 연락처`} />
      <div className="contact-info-div">
        <div>
          <img src={user} />
          <p>김다시</p>
        </div>
        <div>
          <img src={phone} />
          <p>010-1234-4556</p>
        </div>
        <div>
          <img src={mail} />
          <p>kimdasi@fake.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
