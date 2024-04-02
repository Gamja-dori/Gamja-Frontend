import Title from 'components/_common/Title';
import SuggestionForm from 'components/suggestionpage/form/SuggestionForm';
import { useParams } from 'react-router-dom';

const SuggestionEditPage = () => {
  const resumeId = useParams();
  return (
    <div className="container">
      <Title label="채용 제안" />
      <SuggestionForm resumeId={resumeId} isEdit={true} />
    </div>
  );
};

export default SuggestionEditPage;
