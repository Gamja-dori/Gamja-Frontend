import { EditModalProps } from 'props-type';
import { useMediaQuery } from 'react-responsive';
import { DeleteResume, PatchDefaultResume, PatchResumeTitle } from 'api/resume';
import { ResumeCardData } from 'data-type';
import Modal from 'components/_common/Modal';
import Input from 'components/_common/Input';
import Btn from 'components/_common/Btn';
import { useState } from 'react';

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

  const [isInput, setIsInput] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

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

  const patchDefaultResume = async (user_id: number, resume_id: number) => {
    const res = await PatchDefaultResume(user_id, resume_id);
    if (resumeList && setResumeList && res) {
      setResumeList((prevResumeList: ResumeCardData[]) => {
        const newList = prevResumeList.map((resume: ResumeCardData) => {
          return {
            ...resume,
            is_default: resume.id == resume_id ? true : false,
          };
        });
        return newList;
      });
    }
    setIsOpen(false);
  };

  const patchResumeTitle = async (
    user_id: number,
    resume_id: number,
    title: string,
  ) => {
    const res = await PatchResumeTitle(user_id, resume_id, title);
    if (resumeList && setResumeList && res) {
      setResumeList((prevResumeList: ResumeCardData[]) => {
        const newList = prevResumeList.map((resume: ResumeCardData) => {
          return {
            ...resume,
            title: resume.id == resume_id ? title : resume.title,
          };
        });
        return newList;
      });
    }
    setIsInput(false);
    setIsOpen(false);
  };

  return (
    <>
      {isInput ? (
        <Modal>
          <p className="modal-title">이력서 제목 변경</p>
          <p className="modal-text">새로운 이력서 제목을 입력해 주세요.</p>
          <Input
            label=""
            placeholder="새 이력서 제목"
            isAlertRequired={false}
            onChange={onTitleChange}
          />
          <div className="modal-btn-div">
            <Btn
              label="취소"
              onClick={() => {
                setIsInput(false);
                setIsOpen(false);
              }}
              styleClass="modal-btn white"
            />
            <Btn
              label="확인"
              onClick={() => patchResumeTitle(userId, resumeId, newTitle)}
              styleClass="modal-btn dark-green"
            />
          </div>
        </Modal>
      ) : (
        <>
          {isMobile && <div className="modal-bg-div"></div>}
          <div className="edit-modal-container">
            <div className="edit-modal-text" onClick={() => setIsInput(true)}>
              이력서 이름 변경
            </div>
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
      )}
    </>
  );
};
export default EditModal;
