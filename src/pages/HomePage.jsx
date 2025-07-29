
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

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

                        <div className="col">
                          <div className="card h-100 shadow border border-0">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                                alt="소프트웨어 엔지니어"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="ms-md-3 text-center text-md-start ">
                                <span className="badge bg-primary mb-2">IT</span>
                                <h5 className="card-title">소프트웨어 엔지니어</h5>
                                <p className="card-text text-muted"
                                 style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}>
                                  다양한 산업 분야에서 사용되는 애플리케이션을 설계·개발·테스트·유지보수하는 역할을 합니다.
                                  프로그래밍과 알고리즘을 활용해 문제를 해결하며 협업을 통해 고품질 소프트웨어를 만듭니다.
                                </p>
                                <Link to="/jobinfo" className="btn btn-primary btn-sm">자세히 보기</Link>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col">
                          <div className="card h-100 shadow border border-0">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD42s7ezjtz8uQZ1zod6Zj2Ki3uPqiiDTE8pLUGowa3pBrgTJcTG-Rt_WyfleFQtb3lEF7P27Ii7pMunD8nGpRwjC6Lktdz-j7RKWJLTfn2Yruz8yLyATaYkt6QEc3gzvOEnmrvjzKn0Ey9Jf4qUQxRwZKqSi3mIbIv91m6g-S-56PsSgwPy9rrl9xKZHHLQZLSwkCsyXSSPksixcIuDIznQ3X7bnLrWqYkcPwAEzPaFa3T3fRLYnQm9MPzN01mkc3Z_MaiNBvg9tc"
                                alt="헬스케어 솔루션"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="ms-md-3 text-center text-md-start">
                                <span className="badge bg-info mb-2">의료 · 건강</span>
                                <h5 className="card-title">스마트 헬스케어 솔루션</h5>
                                <p className="card-text text-muted"
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}>
                                  AI와 빅데이터를 활용한 개인 맞춤형 건강 관리 서비스를 통해 예방과 치료를 돕습니다.
                                </p>
                                <button className="btn btn-info btn-sm text-white">자세히 보기</button>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="col">
                          <div className="card h-100 shadow border border-0">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBppCNGxayWe02IfWZjfDRzzlwtD05zqvbTKG5bjgjhhx21QmScrVOOgvzskAbERFmhHyqLVuJPlgohiXhaQDdQLknvHclN4h0W9HQ-MRqRZbMY_BL-YWnEvhLX_yZg-mGVHf07Okxf6pabfLZCs_hxkzW6dxtYfsH_zuiTknslYhqnjzSxFQOPDeqZI36hF9hby9bkhMYA9hNs79GPzKgNrTju6MbWeHWBWg48UgY-rY-VQb8MnHuJJVpBlbZO9SQ5CIBeSv7RfWE"
                                alt="재무 설계"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="ms-md-3 text-center text-md-start">
                                <span className="badge bg-success mb-2">금융 · 재무</span>
                                <h5 className="card-title">개인화된 재무 설계로 미래 준비</h5>
                                <p className="card-text text-muted"
                                style={{
                                   display: '-webkit-box',
                                   WebkitLineClamp: 4,
                                   WebkitBoxOrient: 'vertical',
                                   overflow: 'hidden'
                                 }}>
                                  소비 습관과 자산 구조를 분석해 은퇴와 투자를 포함한 재무 전략을 제시하는 전문가 직무입니다.
                                </p>
                                <button className="btn btn-success btn-sm">자세히 보기</button>
                              </div>
                            </div>
                          </div>
                        </div>

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
                    <div className="col-md-6 col-lg-3">
                      <div className="card shadow-sm border-0">

                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_M9O4Fxjj32mYVswn218lXZ3MW6xZFXvhK_DXxb2MNK6oIUq0-68woCb1XWofWv5_w7SJ9xiXnfJCb2F4yBJqLHGxUEiMAj85lysYb2kPxFrA2rb3a6dypIYcUiOpPwqQUTLCk4IYcko_K0_jNrY6NZt06wHSkjeITSGzOcsZwecWK8-e1tfLEmcIrgtIq8sQgzaZWH-iydoeUtW83vIjpAnQVuQhvhL0QH6CzQ906owg1m95HFYnzT_PEJv2ZJap3HvTUOmWwAB"
                          className="card-img-top"
                          alt="People collaborating in a modern office."
                          style={{ height: '180px', objectFit: 'cover' }}
                        />

                        <div className="card-body d-flex flex-column justify-content-start align-items-start">
                          <small className="text-muted">취업 트렌드</small>
                          <span className="card-title mt-2 mb-2 fw-bold" style={{ fontSize: '1.05rem' }}>
                            2024년 상반기 채용 시장 전망
                          </span>
                          <p className="card-text text-secondary">
                            AI 기술의 발전과 함께 새로운 직업들이 부상하고 있습니다. 미래 유망 직종에 대해 알아보세요.
                          </p>
                        </div>
                      </div>
                    </div>


                   <div className="col-md-6 col-lg-3">
                     <div className="card shadow-sm border-0">

                       <img
                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_M9O4Fxjj32mYVswn218lXZ3MW6xZFXvhK_DXxb2MNK6oIUq0-68woCb1XWofWv5_w7SJ9xiXnfJCb2F4yBJqLHGxUEiMAj85lysYb2kPxFrA2rb3a6dypIYcUiOpPwqQUTLCk4IYcko_K0_jNrY6NZt06wHSkjeITSGzOcsZwecWK8-e1tfLEmcIrgtIq8sQgzaZWH-iydoeUtW83vIjpAnQVuQhvhL0QH6CzQ906owg1m95HFYnzT_PEJv2ZJap3HvTUOmWwAB"
                         className="card-img-top"
                         alt="People collaborating in a modern office."
                         style={{ height: '180px', objectFit: 'cover' }}
                       />

                       <div className="card-body d-flex flex-column justify-content-start align-items-start">
                         <small className="text-muted">취업 트렌드</small>
                         <span className="card-title mt-2 mb-2 fw-bold" style={{ fontSize: '1.05rem' }}>
                           2024년 상반기 채용 시장 전망
                         </span>
                         <p className="card-text text-secondary">
                           AI 기술의 발전과 함께 새로운 직업들이 부상하고 있습니다. 미래 유망 직종에 대해 알아보세요.
                         </p>
                       </div>
                     </div>
                   </div>

                    <div className="col-md-6 col-lg-3">
                      <div className="card shadow-sm border-0">

                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_M9O4Fxjj32mYVswn218lXZ3MW6xZFXvhK_DXxb2MNK6oIUq0-68woCb1XWofWv5_w7SJ9xiXnfJCb2F4yBJqLHGxUEiMAj85lysYb2kPxFrA2rb3a6dypIYcUiOpPwqQUTLCk4IYcko_K0_jNrY6NZt06wHSkjeITSGzOcsZwecWK8-e1tfLEmcIrgtIq8sQgzaZWH-iydoeUtW83vIjpAnQVuQhvhL0QH6CzQ906owg1m95HFYnzT_PEJv2ZJap3HvTUOmWwAB"
                          className="card-img-top"
                          alt="People collaborating in a modern office."
                          style={{ height: '180px', objectFit: 'cover' }}
                        />

                        <div className="card-body d-flex flex-column justify-content-start align-items-start">
                          <small className="text-muted">취업 트렌드</small>
                          <span className="card-title mt-2 mb-2 fw-bold" style={{ fontSize: '1.05rem' }}>
                            2024년 상반기 채용 시장 전망
                          </span>
                          <p className="card-text text-secondary">
                            AI 기술의 발전과 함께 새로운 직업들이 부상하고 있습니다. 미래 유망 직종에 대해 알아보세요.
                          </p>
                        </div>
                      </div>
                    </div>

                     <div className="col-md-6 col-lg-3">
                       <div className="card shadow-sm border-0">

                         <img
                           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU_M9O4Fxjj32mYVswn218lXZ3MW6xZFXvhK_DXxb2MNK6oIUq0-68woCb1XWofWv5_w7SJ9xiXnfJCb2F4yBJqLHGxUEiMAj85lysYb2kPxFrA2rb3a6dypIYcUiOpPwqQUTLCk4IYcko_K0_jNrY6NZt06wHSkjeITSGzOcsZwecWK8-e1tfLEmcIrgtIq8sQgzaZWH-iydoeUtW83vIjpAnQVuQhvhL0QH6CzQ906owg1m95HFYnzT_PEJv2ZJap3HvTUOmWwAB"
                           className="card-img-top"
                           alt="People collaborating in a modern office."
                           style={{ height: '180px', objectFit: 'cover' }}
                         />

                         <div className="card-body d-flex flex-column justify-content-start align-items-start">
                           <small className="text-muted">취업 트렌드</small>
                           <span className="card-title mt-2 mb-2 fw-bold" style={{ fontSize: '1.05rem' }}>
                             2024년 상반기 채용 시장 전망
                           </span>
                           <p className="card-text text-secondary">
                             AI 기술의 발전과 함께 새로운 직업들이 부상하고 있습니다. 미래 유망 직종에 대해 알아보세요.
                           </p>
                         </div>
                       </div>
                     </div>

                   </div>
                 </section>




            </div>
            </div>

        </div>






    </div>
  );
}


export default HomePage;
