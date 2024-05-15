import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Layout from './components/_common/layout/Layout';
import ScrollToTop from 'components/utils/ScrollToTop';
import MainPage from './pages/MainPage';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import MyPage from 'pages/MyPage';
import Verification from 'components/signuppage/verification/Verification';
import UserType from 'components/signuppage/usertype/UserType';
import Complete from 'components/signuppage/complete/Complete';
import SeniorForm from 'components/signuppage/form/SeniorForm';
import CompanyForm from 'components/signuppage/form/CompanyForm';
import InfoEditPage from 'pages/InfoEditPage';
import ResumeEditPage from 'pages/ResumeEditPage';
import ResumeListPage from 'pages/ResumeListPage';
import SearchPage from 'pages/SearchPage';
import FindIdPage from 'pages/FindIdPage';
import FindIdForm from 'components/findidpage/FindIdForm';
import FindIdResult from 'components/findidpage/FindIdResult';
import FindPwPage from 'pages/FindPwPage';
import FindPwForm from 'components/findpwpage/FindPwForm';
import FindPwReset from 'components/findpwpage/FindPwReset';
import ResumeDetailPage from 'pages/ResumeDetailPage';
import AboutUsPage from 'pages/AboutUsPage';
import SeniorTab from 'components/aboutuspage/SeniorTab';
import CompanyTab from 'components/aboutuspage/CompanyTab';
import NoticePage from 'pages/NoticePage';
import SuggestionPage from 'pages/SuggestionPage';
import SuggestionManagementPage from 'pages/SuggestionManagementPage';
import SuggestionEditPage from 'pages/SuggestionEditPage';
import SuggestionCancelPage from 'pages/SuggestionCancelPage';
import SuggestionPaymentPage from 'pages/SuggestionPaymentPage';
import SuggestionPaymentCompletePage from 'pages/SuggestionPaymentCompletePage';
import SuggestionDetailPage from 'pages/SuggestionDetailPage';
import ReviewPage from 'pages/ReviewPage';
import ReviewWritePage from 'pages/ReviewWritePage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />}>
            <Route path="verification" element={<Verification />} />
            <Route path="user-type" element={<UserType />} />
            <Route path="senior/form" element={<SeniorForm />} />
            <Route path="company/form" element={<CompanyForm />} />
            <Route path="complete" element={<Complete />} />
          </Route>
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-page/edit" element={<InfoEditPage />} />
          <Route path="/resume" element={<ResumeListPage />} />
          <Route path="/resume/edit/:resumeId" element={<ResumeEditPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="search/detail/:resumeId"
            element={<ResumeDetailPage />}
          />
          <Route path="/find/id" element={<FindIdPage />}>
            <Route path="form" element={<FindIdForm />} />
            <Route path="result" element={<FindIdResult />} />
          </Route>
          <Route path="/find/pw" element={<FindPwPage />}>
            <Route path="form" element={<FindPwForm />} />
            <Route path="reset" element={<FindPwReset />} />
          </Route>
          <Route path="about-us" element={<AboutUsPage />}>
            <Route path="senior" element={<SeniorTab />} />
            <Route path="company" element={<CompanyTab />} />
          </Route>
          <Route path="/notice" element={<NoticePage />} />
          <Route
            path="/suggestion/resume/:resumeId"
            element={<SuggestionPage />}
          />
          <Route
            path="/suggestion/edit/:resumeId"
            element={<SuggestionEditPage />}
          />
          <Route
            path="/suggestion/management"
            element={<SuggestionManagementPage />}
          />
          <Route
            path="/suggestion/cancel/:resumeId"
            element={<SuggestionCancelPage />}
          />
          <Route
            path="/suggestion/payment/:resumeId"
            element={<SuggestionPaymentPage />}
          />
          <Route
            path="/suggestion/payment/complete"
            element={<SuggestionPaymentCompletePage />}
          />
          <Route
            path="/suggestion/detail/:suggestionId"
            element={<SuggestionDetailPage />}
          />
          <Route
            path="/search/detail/:resumeId/review"
            element={<ReviewPage />}
          />
          <Route path="/review/new/:resumeId" element={<ReviewWritePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
