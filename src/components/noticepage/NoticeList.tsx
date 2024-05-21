import { NoticeListProps } from 'props-type';
import NoticeItem from './NoticeItem';
import { useEffect, useState } from 'react';
import { NotificationData } from 'data-type';
import { useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { GetCompanyNotification, GetSeniorNotification } from 'api/suggestion';

const NoticeList = ({ isOld }: NoticeListProps) => {
  const [data, setData] = useState<NotificationData[]>([]);
  const { id, is_senior } = useRecoilValue(SigninAtom);

  useEffect(() => {
    if (is_senior) {
      getSeniorData();
    } else {
      getCompanyData();
    }
  }, [is_senior]);

  const getSeniorData = async () => {
    const res = await GetSeniorNotification(id);
    setData(res?.data.suggests);
  };

  const getCompanyData = async () => {
    const res = await GetCompanyNotification(id);
    filterData(res?.data.suggests);
  };

  const filterData = (data: NotificationData[]) => {
    const filteredData = data.filter(
      (item) =>
        item.is_accepted === true ||
        item.is_cancelled === true ||
        item.is_paid === true,
    );
    setData(filteredData);
  };

  const handleType = (notification: NotificationData) => {
    if (is_senior) {
      if (notification.is_paid) {
        return '결제 완료';
      }
      return '채용 제안';
    } else {
      if (notification.is_paid) {
        return '결제 완료';
      }
      if (notification.is_accepted) {
        return '제안 수락';
      }
      if (notification.is_cancelled) {
        return '제안 거절';
      }
    }
    return '';
  };

  return (
    <div className="noticelist-div">
      {data.map((item) => {
        const type = handleType(item);
        return (
          isOld === item.is_read && (
            <NoticeItem key={item.suggest_id} notification={item} type={type} />
          )
        );
      })}
    </div>
  );
};

export default NoticeList;
