
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';
import { searchNews, searchPopularJob } from '../utils/api';
import CareerIntroSection from '../components/common/CareerIntroSection';
import PopularJobCard from '../components/job/PopularJobCard';
import CareerNewsCard from '../components/news/CareerNewsCard';

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [newsList, setNewsList] = useState([])
  const [popularJobList, setPopularJobList] = useState([])
  const isLogin = localStorage.getItem('isLogin') === 'true';

  useEffect(() => {

    const getLatestNews = async () => {
      try {
        const response = await searchNews("", 1, 8);
        const data = await response.json();
        setNewsList(data['newsList'])

      } catch (error) {
        console.error('최신 뉴스 검색 중 오류:', error);
      }
    };

    const getPopularJob = async () => {
      try {
        const response = await searchPopularJob();
        const data = await response.json();
        setPopularJobList(chunkArray(data['jobList'], 3))

      } catch (error) {
        console.error('인기 직업 검색 중 오류:', error);
      }
    };

    getLatestNews();
    getPopularJob();

  }, []);

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <div className="w-75 mx-auto flex-column">
      <div className="d-flex justify-content-center align-items-center flex-column w-100 mt-5 p-3">
        <h1 className="fw-bold">나에게 꼭 맞는 커리어를 찾아보세요.</h1>
        <span className="mb-4" style={{ fontSize: '1.2rem' }}>키워드, 분야, 또는 나만의 성향으로 직업을 검색할 수 있어요.</span>
        <SearchBar
          isJobSearch={true}
        />
        <div className="d-flex justify-content-start align-items-start flex-column w-100 mt-5">
          <span className="fw-bold text-dark mb-0" style={{ fontSize: '1.8rem' }}>사람들의 관심 직업</span>
          <div id="jobCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
            <div className="carousel-inner">
              {popularJobList.map((group, idx) => (
                <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                  <div className="d-flex justify-content-between">
                    {group.map((part, index) => (
                      <PopularJobCard
                        item={part}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#jobCarousel"
              data-bs-slide="prev"
              style={{ width: '3rem' }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#jobCarousel"
              data-bs-slide="next"
              style={{ width: '3rem' }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <CareerIntroSection
            title={isLogin ? '커리어 진단 시작하기' : '로그인 하기'}
            linkUrl={isLogin ? '/jobtestselect' : '/login'}
          />
          <div className="w-100 px-0">
            <div className="d-flex justify-content-between align-items-end">
              <span className="fw-bold text-dark mb-0 mt-5 d-flex" style={{ fontSize: '1.8rem' }}>최신 커리어 뉴스</span>
              <span
                className="fw-bold text-primary mb-0 mt-5 d-flex mx-4"
                style={{ fontSize: '1.1rem', alignItems: 'center' }}
              >
                <Link to="/news?text=" className="text-primary">
                  전체 보기 <span style={{ marginLeft: '0.25rem' }}>→</span>
                </Link>
              </span>
            </div>
            <section>
              <div className="row g-4">
                {newsList.map((news, index) => (
                  <CareerNewsCard
                    item={news}
                    key={index}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;