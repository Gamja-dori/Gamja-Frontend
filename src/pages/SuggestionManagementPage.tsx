import Title from 'components/_common/Title';
import ManagementSelection from 'components/suggestionpage/management/ManageSelection';
import ManagementList from 'components/suggestionpage/management/ManagementList';
import ManagementSearch from 'components/suggestionpage/management/ManagementSearch';

import { useState } from 'react';

const SuggestionManagementPage = () => {
  const [selectedOpt, setSelectedOpt] = useState('진행 중인 채용');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <Title label="채용 제안 관리" />
      <div className="suggest-manage-div">
        <ManagementSearch value={searchValue} setValue={setSearchValue} />
        <ManagementSelection value={selectedOpt} setValue={setSelectedOpt} />
        <ManagementList option={selectedOpt} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default SuggestionManagementPage;
