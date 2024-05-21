import ManagementItem from './ManagementItem';
import { useEffect, useState } from 'react';
import { ManagementItemData } from 'data-type';
import { ManagementListProps } from 'props-type';
import { useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';
import { GetPaidList, GetSuggestionList, GetUnpaidList } from 'api/suggestion';

const ManagementList = ({ option, searchValue }: ManagementListProps) => {
  const [data, setData] = useState<ManagementItemData[]>([]);
  const { id } = useRecoilValue(SigninAtom);

  useEffect(() => {
    if (option === '전체 채용') {
      getAllData();
    } else if (option === '진행 중인 채용') {
      getUnpaidData();
    } else if (option === '완료된 채용') {
      getPaidData();
    }
  }, [option]);

  const getAllData = async () => {
    const res = await GetSuggestionList(id);
    console.log(res?.data.suggests);
    const suggests = res?.data.suggests;
    setData(suggests);
  };

  const getUnpaidData = async () => {
    const res = await GetUnpaidList(id);
    //console.log(res?.data.suggests);
    setData(res?.data.suggests);
  };

  const getPaidData = async () => {
    const res = await GetPaidList(id);
    //console.log(res?.data.suggests);
    setData(res?.data.suggests);
  };

  return (
    <div className="resume-long-card-container">
      {data ? (
        data.map((item) => {
          return <ManagementItem key={item.resume_id} item={item} />;
        })
      ) : (
        <div>{option} 내역이 없어요!</div>
      )}
    </div>
  );
};

export default ManagementList;
