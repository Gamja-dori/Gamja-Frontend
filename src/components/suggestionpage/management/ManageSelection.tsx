import { Select } from 'antd';
import { ManagementProps } from 'props-type';

const ManagementSelection = ({ value, setValue }: ManagementProps) => {
  const handleClick = (value: string) => {
    setValue(value);
  };

  const tabType = ['진행 중인 채용', '전체 채용', '완료된 채용'];

  return (
    <div className="suggest-manage-select-wrapper light-gray">
      <Select
        className="select"
        onChange={handleClick}
        value={value}
        options={tabType.map((t) => ({
          label: t,
          value: t,
        }))}
      />
    </div>
  );
};

export default ManagementSelection;
