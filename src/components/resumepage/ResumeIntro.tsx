import { ResumeEditProps } from 'props-type';
import Input from 'components/_common/Input';
import Label from 'components/_common/Label';
import BannerBtn from './BannerBtn';
import pencil from '../../assets/icons/resume/pencil.svg';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { useRecoilState } from 'recoil';
import { ResumeAtom } from 'recoil/Resume';
import { useRef } from 'react';
import { useEffect } from 'react';

const ResumeIntro = ({ isSubmitted }: ResumeEditProps) => {
  const [resumeData, setResumeData] = useRecoilState(ResumeAtom);

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeData((prev) => {
      return {
        ...prev,
        keyword: e.target.value,
      };
    });
  };

  const editorRef = useRef<Editor>(null);

  const onIntroChange = () => {
    const content = editorRef.current?.getInstance().getHTML() || '';
    setResumeData((prev) => {
      return {
        ...prev,
        introduction: content,
      };
    });
  };

  useEffect(() => {
    editorRef?.current?.getInstance().setHTML(resumeData.introduction);
  }, []);

  return (
    <>
      <div className="resume-banner-container">
        <BannerBtn
          title="전문가 소개 자동완성"
          content="이력서 바탕으로 소개 문구 추천받기"
          svg={pencil}
          styleClass="dark-green"
        />
      </div>
      <div className="resume-input-container input-div">
        <Input
          label="키워드"
          isRequired={true}
          placeholder="전문가님의 핵심 키워드들을 적어주세요."
          value={resumeData.keyword}
          onChange={onKeywordChange}
          isAlertRequired={false}
        />
        <div>
          <Label label="전문가 소개" isRequired={true} />
          <Editor
            initialValue="전문가님의 경험과 자신 있는 분야에 대해 구체적으로 적어주세요."
            previewStyle="tab"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            plugins={[colorSyntax]}
            language="ko-KR"
            ref={editorRef}
            onChange={onIntroChange}
          />
        </div>
      </div>
    </>
  );
};
export default ResumeIntro;
