import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const JobTestSelectPage = () => {

    return (

        <div className="w-50 d-flex mx-auto flex-column mt-2">
             <div class="">
                <h1 class="md:text-6xl font-extrabold leading-tight">나를 찾아 떠나는 여행</h1>
                <p class="text-xl max-w-3xl mx-auto mt-3">자신을 더 깊이 이해하고, 진로를 탐색하는 여정을 JobX와 함께 시작해보세요.</p>
             </div>

            <div className="row g-4 mt-3">
              {/* 카드 1: 직업 가치관 검사 */}
              <div className="col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-briefcase fs-4 text-primary"></i>
                      </div>
                      <h5 className="card-title mb-0">직업 가치관 검사</h5>
                    </div>
                    <p className="card-text mb-3">
                      직업과 관련된 다양한 가치 중 어떤 것을 중요하게 여기는지 알아보세요.
                    </p>
                    <h6 className="fw-bold">이런 분들께 추천해요!</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>맞는 직업을 찾고 싶은 분</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>이직을 고민하고 있는 분</li>
                      <li><i className="bi bi-check-circle-fill text-primary me-2"></i>진로 선택이 어려우신 분</li>
                    </ul>
                    <div className="mt-auto text-center">
                      <small className="text-muted d-block mb-2">예상 소요 시간: 15-25분</small>
                         <Link to="/jobrecommendationtest">
                              <a href="#" className="btn btn-primary btn-sm w-100">검사 시작하기</a>
                         </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 카드 2: 직업 흥미 검사 */}
              <div className="col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-compass fs-4 text-success"></i>
                      </div>
                      <h5 className="card-title mb-0">직업 흥미 검사</h5>
                    </div>
                    <p className="card-text mb-3">
                      어떤 종류의 일에 흥미를 느끼는지 파악하여 자신에게 맞는 직업 분야를 탐색해보세요.
                    </p>
                    <h6 className="fw-bold">검사를 통해 알 수 있는 것</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>나의 흥미 유형과 특징</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>흥미에 맞는 추천 직업</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>관련 학과 및 자격 정보</li>
                    </ul>
                    <div className="mt-auto text-center">
                      <small className="text-muted d-block mb-2">예상 소요 시간: 20-30분</small>
                      <a href="#" className="btn btn-success btn-sm w-100">검사 시작하기</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 카드 3: 진로 심리 검사 */}
              <div className="col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-purple bg-opacity-10 p-2 rounded-circle me-3">
                        <i className="bi bi-person-bounding-box fs-4 text-purple"></i>
                      </div>
                      <h5 className="card-title mb-0">진로 심리 검사</h5>
                    </div>
                    <p className="card-text mb-3">
                      자신의 성격, 가치관, 능력을 종합적으로 분석하여 진로 결정에 도움을 받으세요.
                    </p>
                    <h6 className="fw-bold">진로 설계에 도움을 드려요</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                      <li><i className="bi bi-check-circle-fill text-purple me-2"></i>종합적인 자기 이해</li>
                      <li><i className="bi bi-check-circle-fill text-purple me-2"></i>진로 장벽 및 갈등 해결</li>
                      <li><i className="bi bi-check-circle-fill text-purple me-2"></i>체계적인 진로 계획 수립</li>
                    </ul>
                    <div className="mt-auto text-center">
                      <small className="text-muted d-block mb-2">예상 소요 시간: 25-35분</small>
                      <a href="#" className="btn btn-secondary btn-sm w-100">검사 시작하기</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

    );

}

export default JobTestSelectPage;