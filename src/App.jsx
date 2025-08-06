import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobRecommendationTestPage from './pages/JobRecommendationTestPage';
import JobRecommendationResultPage from './pages/JobRecommendationResultPage';
import JobTestSelectPage from './pages/JobTestSelectPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JobInfoPage from './pages/JobInfoPage';
import SearchPage from './pages/SearchPage';
import NewsPage from './pages/NewsPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === "true");
	
  return (
    <>
        <main className="mt-5 flex-grow-1">
            <Router>
                <ScrollToTop />
                 <div className="d-flex flex-column min-vh-100 ">
                    <NavigationBar isLogin={isLogin} setIsLogin={setIsLogin}  />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/jobinfo" element={<JobInfoPage />} />
                        <Route path="/jobtestselect" element={<JobTestSelectPage />} />
                        <Route path="/jobrecommendationtest" element={<JobRecommendationTestPage />} />
                        <Route path="/jobrecommendationresult" element={<JobRecommendationResultPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/news" element={<NewsPage />} />
                    </Routes>
                </div>
           </Router>
         </main>
         <Footer />
    </>
  )
}

export default App
