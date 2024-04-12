import { EditModalProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
import { DeleteResume } from 'api/resume';

const EditModal = ({
  userId,
  resumeId,
  setIsOpen,
  resumeList,
  setResumeList,
}: EditModalProps) => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:802px)',
  });

  const deleteResume = async (user_id: number, resume_id: number) => {
    const res = await DeleteResume(user_id, resume_id);
    if (resumeList && setResumeList && res) {
      setResumeList(resumeList.filter((item) => item.resume_id !== resume_id));
      console.log(resumeList.filter((item) => item.resume_id !== resume_id));
    }
    return;
  };

  return (
    <>
      {isMobile && <div className="modal-bg-div"></div>}
      <div className="edit-modal-container">
        <div className="edit-modal-text">이력서 이름 변경</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text">사본 만들기</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text">다운로드</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div
          className="edit-modal-text-alert"
          onClick={() => {
            deleteResume(userId, resumeId);
          }}
        >
          이력서 삭제
        </div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div
          className="edit-modal-text-cancel"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          취소
        </div>
      </div>
    </>
  );
};
export default EditModal;
