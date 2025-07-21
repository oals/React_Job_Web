
import React from 'react';
import { useState } from 'react';

const JobRecommendationResultPage = () => {

    return (
        <div className="d-flex justify-content-start align-items-center w-100 flex-column">
            <h2>검사 결과</h2>

            <p style={{fontSize: '1.2rem'}}>
              검사 결과를 토대로 당신에게 딱 맞는 커리어 경로를 추천해드립니다.
            </p>

            <div className="d-flex align-items-start mt-4" style={{width: '75%'}}>
                <div className="w-50 d-flex justify-content-end">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                    alt="Software Engineer"
                    className="rounded mb-3 mb-md-0"
                    style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                  />
                </div>
                 <div className="w-100 mx-5 d-flex text-start align-items-start flex-column">
                     <span className="fw-bold" style={{fontSize: '1.2rem'}}>Software Engineer</span>
                     <span className="text-secondary mt-3" >asfasfasfasfasfasfasfasfasfas fasfasfasfasfasfasfas fasfasfasfasfasfasfasfasfasfas fasfasfasfasf asfasfasfasf asfasfa sfasfasfasfasf asfasfasfasfasfasf asfasfasf asfasfasfasfasfasfasfasfasfas fasdd222222222222222222222 222222222222222222222222fasf</span>
                 </div>
            </div>

            <div className="d-flex align-items-start mt-5 flex-column" style={{width: '75%'}}>
                <span className="fw-bold" style={{fontSize: '1.4rem'}}>필요 기술 </span>

                <div className="d-flex justify-content-between w-100 mt-3">
                    <div className="border border-1 rounded w-50 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                          ></path>
                        </svg>
                        <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                    </div>

                      <div className="border border-1 rounded w-50 p-3 mx-3 me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                              d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                            ></path>
                          </svg>
                          <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                      </div>

                     <div className="border border-1 rounded w-50 p-3">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                           <path
                             d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                           ></path>
                         </svg>
                         <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                     </div>
                </div>

                  <div className="d-flex align-items-start mt-5 flex-column w-100">
                      <span className="fw-bold" style={{fontSize: '1.4rem'}}>비슷한 직업</span>
                      <section className="mt-3">
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
                                    자세히 보기
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
                                    자세히 보기
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
                                    자세히 보기
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                </div>


            </div>


        </div>

    );

}

export default JobRecommendationResultPage;