import Title from 'components/_common/Title';
import ManagementSelection from 'components/suggestionpage/management/ManageSelection';
import ManagementList from 'components/suggestionpage/management/ManagementList';
import ManagementSearch from 'components/suggestionpage/management/ManagementSearch';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SigninStateAtom } from 'recoil/Signin';

const SuggestionManagementPage = () => {
  const [selectedOpt, setSelectedOpt] = useState('진행 중인 채용');
  const [searchValue, setSearchValue] = useState('');

  const signinState = useRecoilValue(SigninStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!signinState.isSignin) {
      alert('로그인이 필요합니다.');
      navigate('/sign-in');
    }
  }, [signinState]);

  return (
    <>
      {signinState.isSignin && (
        <div className="container">
          <Title label="채용 제안 관리" />
          <div className="suggest-manage-div">
            <ManagementSearch value={searchValue} setValue={setSearchValue} />
            <ManagementSelection
              value={selectedOpt}
              setValue={setSelectedOpt}
            />
            <ManagementList option={selectedOpt} searchValue={searchValue} />
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestionManagementPage;
