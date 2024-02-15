import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import Layout from './components/_common/layout/Layout';
import { RecoilRoot } from 'recoil';

import MainPage from './pages/MainPage';
import SignInPage from 'pages/SignInPage';
import MyPage from 'pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Layout>
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<MainPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/my-page" element={<MyPage />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
