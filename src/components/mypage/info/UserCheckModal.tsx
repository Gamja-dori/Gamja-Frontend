import Btn from 'components/_common/Btn';
import Input from 'components/_common/Input';
import Modal from 'components/_common/Modal';
import { ModalProps } from 'props-type';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserProfileAtom } from 'recoil/UserProfile';

const UserCheckModal = ({ setModal }: ModalProps) => {
  const UserProfileData = useRecoilValue(UserProfileAtom);
  const navigate = useNavigate();

  return (
    <Modal>
      <p className="modal-title">비밀번호 확인</p>
      <p className="modal-text">
        개인정보보호를 위해 회원님의 비밀번호를 다시 한 번 확인합니다.
      </p>
      <Input
        label=""
        defaultValue={UserProfileData.username}
        disabled={true}
        isAlertRequired={false}
      />
      <Input
        label=""
        placeholder="비밀번호"
        type="password"
        isAlertRequired={false}
      />
      <div className="modal-btn-div">
        <Btn
          label="취소"
          onClick={() => setModal(false)}
          styleClass="modal-btn white"
        />
        <Btn
          label="확인"
          onClick={() => navigate('/my-page/edit')}
          styleClass="modal-btn dark-green"
        />
      </div>
    </Modal>
  );
};

export default UserCheckModal;
