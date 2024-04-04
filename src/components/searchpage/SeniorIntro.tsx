import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { SeniorIntroProps } from 'props-type';

const SeniorIntro = ({ markdownText }: SeniorIntroProps) => {
  return (
    <div className="senior-info">
      <Viewer initialValue={markdownText} />
    </div>
  );
};
export default SeniorIntro;
