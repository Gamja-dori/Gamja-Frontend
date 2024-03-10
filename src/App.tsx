import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Layout from './components/_common/layout/Layout';
import { RecoilRoot } from 'recoil';

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
import SearchFilterPage from 'pages/SearchFilterPage';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
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
            <Route path="search/filter" element={<SearchFilterPage />} />
            <Route path="/find/id" element={<FindIdPage />}>
              <Route path="form" element={<FindIdForm />} />
              <Route path="result" element={<FindIdResult />} />
            </Route>
            <Route path="/find/pw" element={<FindPwPage />}>
              <Route path="form" element={<FindPwForm />} />
              <Route path="reset" element={<FindPwReset />} />
            </Route>
          </Routes>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
