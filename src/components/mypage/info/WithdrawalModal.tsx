import { DeleteAccount } from 'api/user';
import Btn from 'components/_common/Btn';
import Modal from 'components/_common/Modal';
import { ModalProps } from 'props-type';
import { useRecoilValue } from 'recoil';
import { SigninAtom } from 'recoil/Signin';

const WithdrawalModal = ({ setModal }: ModalProps) => {
  const { id } = useRecoilValue(SigninAtom);
  const handleWithdrawal = async () => {
    // fixing errors
    // const res = await DeleteAccount(id);
    // console.log(res);
    // if (res?.status) {
    //   window.localStorage.clear();
    //   window.location.href = '/';
    // }
  };
  return (
    <Modal>
      <p className="modal-title">회원탈퇴</p>
      <p className="modal-text withdrawal">정말 탈퇴하시겠습니까?</p>
      <div className="modal-btn-div">
        <Btn
          label="취소"
          onClick={() => setModal(false)}
          styleClass="modal-btn dark-green"
        />
        <Btn
          label="탈퇴"
          onClick={handleWithdrawal}
          styleClass="modal-btn white"
        />
      </div>
    </Modal>
  );
};

export default WithdrawalModal;
