import Title from 'components/_common/Title';
import SuggestionForm from 'components/suggestionpage/SuggestionForm';

const SuggestionPage = () => {
  return (
    <div className="container">
      <Title label="채용 제안" />
      <SuggestionForm />
    </div>
  );
};

export default SuggestionPage;
