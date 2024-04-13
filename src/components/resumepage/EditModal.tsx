import { EditModalProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
import { GetResumeList, DeleteResume, PatchDefaultResume } from 'api/resume';
import { ResumeCardData } from 'data-type';

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
      setResumeList((prevResumeList: ResumeCardData[]) =>
        prevResumeList.filter(
          (resume: ResumeCardData) => resume.id !== resume_id,
        ),
      );
    }
  };

  const getResumeList = async (user_id: number) => {
    const res = await GetResumeList(user_id);
    if (resumeList && setResumeList && res) {
      setResumeList(res?.data?.resumes);
    }
  };

  const patchDefaultResume = async (user_id: number, resume_id: number) => {
    const res = await PatchDefaultResume(user_id, resume_id);
    if (resumeList && setResumeList && res) {
      /*
      setResumeList((prevResumeList: ResumeCardData[]) =>
        prevResumeList.map((resume: ResumeCardData) => {
          if (resume.id == resume_id) {
            resume.is_default = true;
          } else {
            resume.is_default = false;
          }
        }),
      );
      */
      getResumeList(user_id);
    }
    setIsOpen(false);
  };

  return (
    <>
      {isMobile && <div className="modal-bg-div"></div>}
      <div className="edit-modal-container">
        <div className="edit-modal-text">이력서 이름 변경</div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div
          className="edit-modal-text"
          onClick={() => {
            patchDefaultResume(userId, resumeId);
          }}
        >
          기본 이력서로 설정
        </div>
        {isMobile && <hr className="modal-division-line"></hr>}
        <div className="edit-modal-text">사본 만들기</div>
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
