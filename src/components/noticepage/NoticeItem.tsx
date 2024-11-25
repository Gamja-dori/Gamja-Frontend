import { PatchNotification } from 'api/suggestion';
import Btn from 'components/_common/Btn';
import { NoticeItemProps } from 'props-type';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NotificationCntAtom } from 'recoil/Notifications';
import { SigninAtom } from 'recoil/Signin';

const NoticeItem = ({ notification, type }: NoticeItemProps) => {
  const [text, setText] = useState('');
  const [btnText, setBtnText] = useState('');
  const [url, setUrl] = useState('');

  const navigate = useNavigate();
  const { id } = useRecoilValue(SigninAtom);
  const [notificationCnt, setNotificationCnt] =
    useRecoilState(NotificationCntAtom);

  const handleSeniorType = (name: string, type: string) => {
    if (type === '채용 제안') {
      setText(name + '에서 채용 제안이 왔어요!');
      setBtnText('제안 확인하기');
      setUrl(`/suggestion/detail/${notification.suggest_id}`);
    }
    if (type === '채용 취소') {
      setText(name + '에서 채용을 취소했어요.');
      setBtnText('취소 사유 확인하기');
    }
    if (type === '결제 완료') {
      setText(name + '와 계약이 성사되었어요!');
      setBtnText('계약서 확인하기');
    }
    if (type === '리뷰 작성') {
      setText(name + '에서 리뷰를 작성했어요.');
      setBtnText('리뷰 보러가기');
      setUrl(`/search/detail/${notification.resume_id}`);
    }
  };

  const handleCompanyType = (name: string, type: string) => {
    if (type === '제안 수락') {
      setText(name + '님이 채용을 수락했어요!');
      setBtnText('결제하기');
      setUrl(
        `/suggestion/payment/${notification.resume_id}/${notification.suggest_id}`,
      );
    }
    if (type === '제안 거절') {
      setText(name + '님이 채용을 거절했어요.');
      setBtnText('확인');
    }
    if (type === '결제 완료') {
      setText(name + '님과 계약이 성사됐어요!');
      setBtnText('계약서 보러 가기');
    }
  };

  useEffect(() => {
    if (notification.company) {
      handleSeniorType(notification.company, type);
    } else {
      handleCompanyType(notification.name, type);
    }
  }, [notification.company, notification.name, type]);

  const handleBtnClick = async () => {
    if (!notification.is_read) {
      const res = await PatchNotification(id, notification.suggest_id);
      if (res?.status === 200) {
        setNotificationCnt(notificationCnt - 1);
      }
    }
    if (url) {
      navigate(url);
    }
  };

  return (
    <div className="noticeitem-div">
      <div className="noticeitem-info-div">
        <div className="noticeitem-img-div">
          <img src={notification.profile_image} />
        </div>
        <p>{text}</p>
      </div>
      <Btn
        label={btnText}
        onClick={handleBtnClick}
        styleClass="inner-btn dark-green"
      />
    </div>
  );
};

export default NoticeItem;
