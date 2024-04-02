import { ManagementProps } from 'props-type';

const ManagementSearch = ({ setValue }: ManagementProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-input-container">
      <input
        className="search-input"
        placeholder="전문가 검색"
        onChange={handleInput}
      />
    </div>
  );
};

export default ManagementSearch;
