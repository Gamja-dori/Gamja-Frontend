import { ManagementProps } from 'props-type';
import { useState } from 'react';

const ManagementSelection = ({ value, setValue }: ManagementProps) => {
  const [dropActive, setDropActive] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = event.currentTarget;
    const textContent = target.textContent || '';
    setValue(textContent);
  };

  return (
    <div className="suggest-manage-select-wrapper light-gray">
      <div
        className="suggest-manage-select-div"
        onClick={() => setDropActive(!dropActive)}
      >
        <div>{value}</div>
        <div className={`${dropActive ? 'up-arrow' : 'down-arrow'}`}></div>
      </div>
      <ul
        className={`suggest-manage-select-list light-gray ${dropActive && 'active'}`}
      >
        <li
          className={`suggest-manage-select-item ${value === '진행 중인 채용' && 'active'}`}
          onClick={handleClick}
        >
          진행 중인 채용
        </li>
        <div className="light-gray suggest-manage-select-line"></div>
        <li
          className={`suggest-manage-select-item ${value === '전체 채용' && 'active'}`}
          onClick={handleClick}
        >
          전체 채용
        </li>
        <div className="light-gray suggest-manage-select-line"></div>
        <li
          className={`suggest-manage-select-item ${value === '완료된 채용' && 'active'}`}
          onClick={handleClick}
        >
          완료된 채용
        </li>
      </ul>
    </div>
  );
};

export default ManagementSelection;
