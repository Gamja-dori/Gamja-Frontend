import Btn from 'components/_common/Btn';
import { NoticeItemProps } from 'props-type';
import { useEffect, useState } from 'react';

const NoticeItem = ({ name, src, type }: NoticeItemProps) => {
  const [text, setText] = useState('');
  const [btnText, setBtnText] = useState('');
  const handleType = (name: string, type: string) => {
    if (type === '채용 제안') {
      setText(name + '에서 채용 제안이 왔어요!');
      setBtnText('제안 확인하기');
    }
    if (type === '채용 취소') {
      setText(name + '에서 채용을 취소했어요.');
      setBtnText('취소 사유 확인하기');
    }
    if (type === '계약서 체결') {
      setText(name + '와 계약이 성사되었어요!');
      setBtnText('계약서 확인하기');
    }
  };

  useEffect(() => {
    handleType(name, type);
  }, [name, type]);

  return (
    <div className="noticeitem-div">
      <div className="noticeitem-info-div">
        <div className="noticeitem-img-div">
          <img src={src} />
        </div>
        <p>{text}</p>
      </div>
      <Btn
        label={btnText}
        onClick={() => console.log(btnText + ' 클릭')}
        styleClass="inner-btn dark-green"
      />
    </div>
  );
};

export default NoticeItem;
