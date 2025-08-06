import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const JobTestSelectPage = () => {

    return (

        <div className="w-100 d-flex mx-auto flex-column mt-2">
             <div className="w-75 bg-primary p-5 rounded mx-auto">
                <h1 className="md:text-6xl font-extrabold leading-tight text-light">나를 찾아 떠나는 여행</h1>
                <p className="text-xl max-w-3xl mx-auto mt-3 text-light">자신을 더 깊이 이해하고, 진로를 탐색하는 여정을 JobX와 함께 시작해보세요.</p>
             </div>

            <div className="row g-4 mt-3 w-75 mx-auto mt-5">
              {/* 카드 1: 직업 가치관 검사 */}
              <div className=" rounded mx-2" style={{width: '32%'}}>
                <div className="card h-100 shadow border border-0 px-3">
                  <div className="card-body d-flex justify-content-start align-items-start flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light bg-opacity-10 p-2 rounded-circle me-2">
                        <i className="bi bi-briefcase fs-4 text-primary"></i>
                      </div>
                      <h5 className="card-title mb-0 fw-semibold">직업 가치관 검사</h5>
                    </div>
                    <span className="card-text mb-3 text-secondary text-start" style={{marginLeft: 0, paddingLeft: 0}}>
                      직업과 관련된 다양한 가치 중 어떤 것을 중요하게 여기는지 알아보세요.
                    </span>

                    <h6 className="fw-bold">이런 분들께 추천해요!</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                      <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-primary me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 맞는 직업을 찾고 싶은 분 </span></li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>이직을 고민하고 있는 분 </span></li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>진로 선택이 어려우신 분</span></li>
                    </ul>
                    <div className="w-100 mt-auto text-center d-flex flex-column">
                      <small className="text-muted d-block mb-2 text-start">예상 소요 시간: 15-25분</small>
                       <Link to="/jobrecommendationtest?testId=1" className="mt-2">
                            <span className="w-100 btn btn-primary p-2">검사 시작하기</span>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>

            {/* 카드 2: 직업 흥미 검사 */}
                <div className=" rounded mx-2" style={{width: '32%'}}>
                  <div className="card h-100 shadow border border-0 px-3">
                    <div className="card-body d-flex justify-content-start align-items-start flex-column">
                      <div className="d-flex align-items-center mb-3">
                       <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                          <i className="bi bi-compass fs-4 text-success"></i>
                        </div>
                        <h5 className="card-title mb-0 fw-semibold">직업 흥미 검사</h5>
                      </div>
                      <span className="card-text mb-3 text-secondary text-start" style={{marginLeft: 0, paddingLeft: 0}}>
                        어떤 일에 흥미를 느끼는지 파악해 나에게 맞는 직업을 탐색해보세요.
                      </span>

                      <h6 className="fw-bold">이런 분들께 추천해요!</h6>
                      <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                        <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-success me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 나의 흥미 유형과 특징 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>흥미에 맞는 추천 직업 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>관련 학과 및 자격 정보</span></li>
                      </ul>

                       <div className="w-100 mt-auto text-center d-flex flex-column">
                         <small className="text-muted d-block mb-2 text-start">예상 소요 시간: 15-25분</small>
                          <Link to="/jobrecommendationtest?testId=2" className="mt-2">
                               <span className="w-100 btn btn-success p-2">검사 시작하기</span>
                          </Link>
                       </div>
                    </div>
                  </div>
                </div>



              {/* 카드 3: 진로 심리 검사 */}
                <div className=" rounded mx-1" style={{width: '32%'}}>
                  <div className="card h-100 shadow border border-0 px-3">
                    <div className="card-body d-flex justify-content-start align-items-start flex-column">
                      <div className="d-flex align-items-center mb-3">
                       <div className="bg-purple bg-opacity-10 p-2 rounded-circle me-3">
                         <i className="bi bi-person-bounding-box fs-4 text-purple"></i>
                       </div>
                        <h5 className="card-title mb-0 fw-semibold">진로 심리 검사</h5>
                      </div>
                      <span className="card-text mb-3 text-secondary text-start" style={{marginLeft: 0, paddingLeft: 0}}>
                        자신의 성격, 가치관을 종합적으로 분석해 진로 결정에 도움을 받으세요.
                      </span>


                      <h6 className="fw-bold">진로 설계에 도움을 드려요</h6>
                      <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                        <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-purple me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 종합적인 자기 이해 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-purple me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>진로 장벽 및 갈등 해결 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-purple me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>체계적인 진로 계획 수립</span></li>
                      </ul>

                       <div className="w-100 mt-auto text-center d-flex flex-column">
                         <small className="text-muted d-block mb-2 text-start">예상 소요 시간: 15-25분</small>
                          <Link to="/jobrecommendationtest?testId=3" className="mt-2">
                               <span className="w-100 btn btn-secondary p-2">검사 시작하기</span>
                          </Link>
                       </div>
                    </div>
                  </div>
                </div>

            </div>



        </div>

    );

}

export default JobTestSelectPage;