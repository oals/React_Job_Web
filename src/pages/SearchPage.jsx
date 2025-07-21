import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';


const SearchPage = () => {

    return (
        <div className="w-75 d-flex mx-auto flex-column ">
           <div className="w-100 ">
               <SearchBar />
           </div>

            <div className="w-100 d-flex flex-column justify-content-start align-items-start mt-5">
                 <span className="mt-3">검색결과 56건</span>

                 <div className="mt-3">
                    <section>
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">


                        <div className="col">
                          <div className="card h-100 shadow-sm">
                            <div className="d-flex flex-column flex-md-row align-items-center p-3">
                              <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                                alt="소프트웨어 엔지니어"
                                className="rounded mb-3 mb-md-0"
                                style={{ width: '144px', height: '144px', objectFit: 'cover' }}
                              />
                              <div className="ms-md-3 text-center text-md-start">
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
                          <div className="card h-100 shadow-sm">
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
                          <div className="card h-100 shadow-sm">
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
                 </div>

                 <div className="mt-4 mx-auto">
                     <nav aria-label="Page navigation example">
                     <ul class="pagination">
                       <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                       <li class="page-item"><a class="page-link" href="#">1</a></li>
                       <li class="page-item"><a class="page-link" href="#">2</a></li>
                       <li class="page-item"><a class="page-link" href="#">3</a></li>
                       <li class="page-item"><a class="page-link" href="#">Next</a></li>
                     </ul>
                     </nav>
                 </div>

            </div>

        </div>
    )


}

export default SearchPage;
