
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';
import { searchNews, searchPopularJob } from '../utils/api';

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [newsList, setNewsList] = useState([])
  const [popularJobList, setPopularJobList] = useState([])

  useEffect(() => {

      const getLatestNews = async () => {
        try {
          const response = await searchNews();
          const data = await response.json();
          setNewsList(data)

        } catch (error) {
          console.error('최신 뉴스 검색 중 오류:', error);
        }
      };

     const getPopularJob = async () => {
        try {
          const response = await searchPopularJob();
          const data = await response.json();
          setPopularJobList(data['jobList'])

        } catch (error) {
          console.error('인기 직업 검색 중 오류:', error);
        }
      };

      getLatestNews();
      getPopularJob();

  }, []);




  return (
    <div className="w-75 mx-auto flex-column">

          <div className="d-flex justify-content-center align-items-center flex-column w-100 mt-5 p-3">
            <h1 className="fw-bold">나에게 꼭 맞는 커리어를 찾아보세요.</h1>
            <span className="mb-4" style={{fontSize: '1.2rem'}}>키워드, 분야, 또는 나만의 성향으로 직업을 검색할 수 있어요.</span>

            <SearchBar />

            <div className="d-flex justify-content-start align-items-start flex-column w-100 mt-5">

                 <span className="fw-bold text-dark mb-0" style={{fontSize: '1.8rem'}}>추천 직업</span>
                    <section>
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">

                        {popularJobList.map((part, index) => (
                              <div className="card h-75 shadow border border-0 mx-auto" style={{width:'32%'}} key={index}>
                                <div className="d-flex flex-column flex-md-row align-items-center p-3">

                                  <div className="ms-md-3 d-flex flex-column justify-content-between text-center text-md-start w-100" style={{ height: '180px' }}>
                                    <div>
                                      <span className="badge bg-secondary mb-2">{part.jobLrclNm}</span>
                                      <h5 className="card-title">{part.jobMdclNm}</h5>
                                      <p
                                        className="card-text text-muted"
                                        style={{
                                          display: '-webkit-box',
                                          WebkitLineClamp: 4,
                                          WebkitBoxOrient: 'vertical',
                                          overflow: 'hidden',
                                          minHeight: '72px', // 고정 공간 확보
                                        }}
                                      >
                                        {part.jobSum}
                                      </p>
                                    </div>
                                    <div className="mt-2">
                                      <p className="small text-secondary">
                                          {part.bookmarkCount} 명이 관심을 가지고 있는 직업
                                      </p>

                                      <Link to={`/jobInfo?jobCd=${part.jobCd}`} className="btn btn-secondary btn w-100">
                                        자세히 보기
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                        ))}

                      </div>
                    </section>


                    <section className="w-100 mt-5 mb-2">
                      <div className="bg-primary text-white rounded p-5 text-center">
                        <h3 className="display-6 fw-bold">직업 검사</h3>
                        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
                          어디서부터 시작해야 할지 막막하신가요? 종합 퀴즈가 여러분의 성격, 관심사, <br/> 그리고 역량을 분석해 최적의 커리어 경로를 추천해 드립니다.
                        </p>

                        <Link to="/jobtestselect">
                          <button className="fs-6 text-primary fw-bold btn btn-light btn-lg mt-3">
                            검사 시작하기
                          </button>
                        </Link>
                      </div>
                    </section>


                <div className="w-100 px-0">

                 <span className="fw-bold text-dark mb-0 mt-5 d-flex" style={{fontSize: '1.8rem'}}>최신 커리어 뉴스</span>
                 <section>
                   <div className="row g-4">
                 {newsList.map((news, index) => (
                   <div className="col-md-6 col-lg-3" key={index}>
                     <a
                       href={news.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-decoration-none text-dark"
                     >
                       <div className="card shadow-sm border-0">
                         <img
                           src={news.urlToImage}
                           className="card-img-top"
                           alt="People collaborating in a modern office."
                           style={{ height: '180px', objectFit: 'cover' }}
                         />
                         <div className="card-body d-flex flex-column justify-content-start align-items-start">
                           <small className="text-muted">{news.author}</small>
                           <span
                             className="card-title mt-2 text-start mb-2 fw-bold"
                             style={{ fontSize: '1.05rem' }}
                           >
                             {news.title}
                           </span>
                           <p className="card-text text-start text-secondary">
                             {news.description.length > 60
                               ? news.description.slice(0, 60) + '...'
                               : news.description}
                           </p>
                         </div>
                       </div>
                     </a>
                   </div>
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
