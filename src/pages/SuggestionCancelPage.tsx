import Title from 'components/_common/Title';
import CancelForm from 'components/suggestionpage/cancel/CancelForm';
import { useParams } from 'react-router-dom';

const SuggestionCancelPage = () => {
  const resumeId = useParams();
  return (
    <div className="container">
      <Title label="채용 취소하기" />
      <CancelForm resumeId={resumeId} />
    </div>
  );
};

export default SuggestionCancelPage;
