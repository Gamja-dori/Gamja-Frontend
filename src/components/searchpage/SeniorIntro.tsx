import { Viewer } from '@toast-ui/react-editor';
import { useRecoilValue } from 'recoil';
import { ResumeDetailAtom } from 'recoil/Recommendation';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const SeniorIntro = () => {
  const { introduction } = useRecoilValue(ResumeDetailAtom);
  return (
    <div className="senior-info">
      <Viewer initialValue={introduction} />
    </div>
  );
};
export default SeniorIntro;
