
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';
import { searchNews, searchPopularJob } from '../utils/api';

function chunkArray(arr, chunkSize) {
  const chunks = [];
  for(let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [newsList, setNewsList] = useState([])
  const [popularJobList, setPopularJobList] = useState([])
  const isLogin = localStorage.getItem('isLogin') === 'true';

  useEffect(() => {

      const getLatestNews = async () => {
        try {
          const response = await searchNews("",1,8);
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



  return (
    <div className="w-75 mx-auto flex-column">

          <div className="d-flex justify-content-center align-items-center flex-column w-100 mt-5 p-3">
            <h1 className="fw-bold">나에게 꼭 맞는 커리어를 찾아보세요.</h1>
            <span className="mb-4" style={{fontSize: '1.2rem'}}>키워드, 분야, 또는 나만의 성향으로 직업을 검색할 수 있어요.</span>

            <SearchBar
                isJobSearch={true}
            />

            <div className="d-flex justify-content-start align-items-start flex-column w-100 mt-5">

                 <span className="fw-bold text-dark mb-0" style={{fontSize: '1.8rem'}}>사람들의 관심 직업</span>
         <div id="jobCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner">
                {popularJobList.map((group, idx) => (
                  <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                    <div className="d-flex justify-content-between">
                      {group.map((part, index) => (
                        <div
                          className="card h-75 shadow border-0 mx-2"
                          style={{ width: '32%' }}
                          key={index}
                        >
                          <div className="d-flex flex-column flex-md-row align-items-center p-3">
                            <div
                              className="ms-md-3 d-flex flex-column justify-content-between text-center text-md-start w-100"
                              style={{ height: '150px' }}
                            >
                              <div>
                                <span className="badge bg-primary mb-2">{part.jobLrclNm}</span>
                                <h5 className="card-title">{part.jobMdclNm}</h5>
                                <p
                                  className="card-text text-muted"
                                  style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    minHeight: '72px',
                                  }}
                                >
                                  {part.jobSum}
                                </p>
                              </div>

                              <div className="mt-2 d-flex justify-content-between align-items-center">
                                <span className="small text-secondary">
                                  <span className="text-primary">{part.bookmarkCount}</span> 명의 관심 직업
                                </span>

                                <Link
                                  to={`/jobInfo?jobCd=${part.jobCd}`}
                                  className="btn btn-sm btn-primary w-25 rounded p-2"
                                >
                                  자세히 보기
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 컨트롤 버튼 */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#jobCarousel"
                data-bs-slide="prev"
                 style={{width: '3rem'}}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#jobCarousel"
                data-bs-slide="next"
                style={{width: '3rem'}}
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            <section className="w-100 bg-primary rounded-4 p-5 text-white mt-3 mb-3  d-flex align-items-center justify-content-between">
              <div className="text-start">
                <h2 className="h3 fw-bold mb-3">내게 맞는 커리어, 아직 확신이 없다면?</h2>
                <p className="opacity-75" style={{ maxWidth: '600px' }}>
                  간단한 진단을 통해 당신의 성향과 역량에 맞는 커리어 방향성을 탐색해 보세요.
                </p>
              </div>

                 <Link to={isLogin ? '/jobtestselect' : '/login'}>
                      <button className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill flex-shrink-0">
                        {isLogin ? '커리어 진단 시작하기' : '로그인 하기'}
                      </button>
                    </Link>

            </section>

                <div className="w-100 px-0">

                <div className="d-flex justify-content-between align-items-end">
                    <span className="fw-bold text-dark mb-0 mt-5 d-flex" style={{fontSize: '1.8rem'}}>최신 커리어 뉴스</span>
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
