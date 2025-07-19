
import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)


  return (
    <div className="w-75 mx-auto flex-column">


          <div className="d-flex justify-content-center align-items-center flex-column w-100 mt-5 p-3">
                      {/* 버튼 영역 */}
        {/*               <div className="mx-5"> */}
        {/*                 <button type="button" className="btn btn-light btn-sm mx-2 p-3 rounded-pill fw-semibold fs-6 border border-1 shadow-sm"> */}
        {/*                   <span className="text-success"><i className="bi bi-stars me-1"></i> 회원님을 위한 추천공고 </span> */}
        {/*                 </button> */}
        {/*                 <button type="button" className="btn btn-light btn-sm mx-2 p-3 rounded-pill fw-semibold fs-6 border border-1 shadow-sm"> */}
        {/*                   <span className="text-secondary"><i className="bi bi-fire me-1"></i> 지금 핫한 대기업 공고</span> */}
        {/*                 </button> */}
        {/*                 <button type="button" className="btn btn-light btn-sm mx-2 p-3 rounded-pill fw-semibold fs-6 border border-1 shadow-sm"> */}
        {/*                   <span className="text-secondary"><i className="bi bi-bank me-1"></i> 공기업 공고 </span> */}
        {/*                 </button> */}
        {/*               </div> */}

            <h1 className="fw-bold">나에게 꼭 맞는 커리어를 찾아보세요.</h1>
            <span className="mb-4" style={{fontSize: '1.2rem'}}>키워드, 분야, 또는 나만의 성향으로 직업을 검색할 수 있어요.</span>

            <SearchBar />


            <div className="d-flex justify-content-start align-items-start flex-column w-100 mt-3">

                 <span className="fw-bold text-dark mb-4" style={{fontSize: '1.8rem'}}>추천 직업</span>
                <section className=" my-1">
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {/* Card 1 */}
                        <div className="col">
                          <div className="card h-100 shadow-sm">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                                alt="Software Engineer"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="text-center text-md-start ms-md-3">
                                <span className="badge bg-primary mb-2">Software</span>
                              <h5 className="card-title">asfasfasfasfasf asfasfasfasfasf</h5>
                               <p className="card-text text-muted">
                                 asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf.
                               </p>
                                <button className="btn btn-primary btn-sm">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col">
                          <div className="card h-100 shadow-sm">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD42s7ezjtz8uQZ1zod6Zj2Ki3uPqiiDTE8pLUGowa3pBrgTJcTG-Rt_WyfleFQtb3lEF7P27Ii7pMunD8nGpRwjC6Lktdz-j7RKWJLTfn2Yruz8yLyATaYkt6QEc3gzvOEnmrvjzKn0Ey9Jf4qUQxRwZKqSi3mIbIv91m6g-S-56PsSgwPy9rrl9xKZHHLQZLSwkCsyXSSPksixcIuDIznQ3X7bnLrWqYkcPwAEzPaFa3T3fRLYnQm9MPzN01mkc3Z_MaiNBvg9tc"
                                alt="Registered Nurse"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="text-center text-md-start ms-md-3">
                                <span className="badge bg-info mb-2">Healthcare</span>
                                <h5 className="card-title">asfasfasfasfasf asfasfasfasfasf</h5>
                                <p className="card-text text-muted">
                                  asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf.
                                </p>
                                <button className="btn btn-info btn-sm text-white">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col">
                          <div className="card h-100 shadow-sm">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBppCNGxayWe02IfWZjfDRzzlwtD05zqvbTKG5bjgjhhx21QmScrVOOgvzskAbERFmhHyqLVuJPlgohiXhaQDdQLknvHclN4h0W9HQ-MRqRZbMY_BL-YWnEvhLX_yZg-mGVHf07Okxf6pabfLZCs_hxkzW6dxtYfsH_zuiTknslYhqnjzSxFQOPDeqZI36hF9hby9bkhMYA9hNs79GPzKgNrTju6MbWeHWBWg48UgY-rY-VQb8MnHuJJVpBlbZO9SQ5CIBeSv7RfWE"
                                alt="Financial Analyst"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="text-center text-md-start ms-md-3">
                                <span className="badge bg-success mb-2">Finance</span>
                                <h5 className="card-title">asfasfasfasfasf asfasfasfasfasf</h5>
                                <p className="card-text text-muted">
                                  asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf asfasfasfasfasf.
                                </p>
                                <button className="btn btn-success btn-sm">
                                  View Details
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


                    <section className="w-100 mt-5">
                      <div className="bg-primary text-white rounded p-5 text-center">
                        <h3 className="display-6 fw-bold">직업 검사</h3>
                        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
                          어디서부터 시작해야 할지 막막하신가요? 종합 퀴즈가 여러분의 성격, 관심사, <br/> 그리고 역량을 분석해 최적의 커리어 경로를 추천해 드립니다.
                        </p>

                        <Link to="/JobRecommendationTestPage">
                          <button className="btn btn-light btn-lg">
                            시작하기
                          </button>
                        </Link>
                      </div>
                    </section>





            </div>

        </div>






    </div>
  );
}


export default HomePage;
