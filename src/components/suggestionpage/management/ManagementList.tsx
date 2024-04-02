import ManagementItem from './ManagementItem';
import { useEffect, useState } from 'react';
import { ManagementItemData } from 'data-type';
import mock from '../../../assets/mock/management.json';
import { ManagementListProps } from 'props-type';

const ManagementList = ({ option, searchValue }: ManagementListProps) => {
  const [data, setData] = useState<ManagementItemData[]>([]);
  useEffect(() => {
    setData(mock);
  }, []);

  return (
    <div className="resume-long-card-container">
      {data.map((item) => {
        return <ManagementItem key={item.resumeId} item={item} />;
      })}
    </div>
  );
};

export default ManagementList;
