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
                <div className="card h-100 shadow border border-0 px-3">
                  <div className="card-body d-flex justify-content-start align-items-start flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
                        <i className="bi bi-briefcase fs-4 text-primary"></i>
                      </div>
                      <h5 className="card-title mb-0 fw-semibold">직업 가치관 검사</h5>
                    </div>
                    <span className="card-text mb-3 text-secondary" style={{marginLeft: 0, paddingLeft: 0}}>
                      직업과 관련된 다양한 가치 중 어떤 것을 중요하게 여기는지 알아보세요.
                    </span>


                    <h6 className="fw-bold">이런 분들께 추천해요!</h6>
                    <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                      <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-primary me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 맞는 직업을 찾고 싶은 분 </span></li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>이직을 고민하고 있는 분 </span></li>
                      <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>진로 선택이 어려우신 분</span></li>
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
                  <div className="card h-100 shadow border border-0 px-3">
                    <div className="card-body d-flex justify-content-start align-items-start flex-column">
                      <div className="d-flex align-items-center mb-3">
                       <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                          <i className="bi bi-compass fs-4 text-success"></i>
                        </div>
                        <h5 className="card-title mb-0 fw-semibold">직업 흥미 검사</h5>
                      </div>
                      <span className="card-text mb-3 text-secondary" style={{marginLeft: 0, paddingLeft: 0}}>
                        어떤 일에 흥미를 느끼는지 파악해 나에게 맞는 직업을 탐색해보세요.
                      </span>


                      <h6 className="fw-bold">이런 분들께 추천해요!</h6>
                      <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                        <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-success me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 나의 흥미 유형과 특징 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>흥미에 맞는 추천 직업 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>관련 학과 및 자격 정보</span></li>
                      </ul>
                      <div className="mt-auto text-center">
                        <small className="text-muted d-block mb-2">예상 소요 시간: 15-25분</small>
                           <Link to="/jobrecommendationtest">
                                <a href="#" className="btn btn-success btn-sm w-100">검사 시작하기</a>
                           </Link>
                      </div>
                    </div>
                  </div>
                </div>



              {/* 카드 3: 진로 심리 검사 */}
                <div className="col-lg-4">
                  <div className="card h-100 shadow border border-0 px-3">
                    <div className="card-body d-flex justify-content-start align-items-start flex-column">
                      <div className="d-flex align-items-center mb-3">
                       <div className="bg-purple bg-opacity-10 p-2 rounded-circle me-3">
                         <i className="bi bi-person-bounding-box fs-4 text-purple"></i>
                       </div>
                        <h5 className="card-title mb-0 fw-semibold">진로 심리 검사</h5>
                      </div>
                      <span className="card-text mb-3 text-secondary" style={{marginLeft: 0, paddingLeft: 0}}>
                        자신의 성격, 가치관을 종합적으로 분석해 진로 결정에 도움을 받으세요.
                      </span>


                      <h6 className="fw-bold">진로 설계에 도움을 드려요</h6>
                      <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                        <li className="mb-2 mt-1"><i className="bi bi-check-circle-fill text-purple me-2 "></i><span className="text-secondary" style={{fontSize: '0.90rem'}}> 종합적인 자기 이해 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-purple me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>진로 장벽 및 갈등 해결 </span></li>
                        <li className="mb-2"><i className="bi bi-check-circle-fill text-purple me-2"></i><span className="text-secondary" style={{fontSize: '0.90rem'}}>체계적인 진로 계획 수립</span></li>
                      </ul>
                      <div className="mt-auto text-center">
                        <small className="text-muted d-block mb-2">예상 소요 시간: 15-25분</small>
                           <Link to="/jobrecommendationtest">
                                <a href="#" className="btn btn-secondary btn-sm w-100">검사 시작하기</a>
                           </Link>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

        <div className="bg-white py-5">
              <div className="container">
                <h2 className="text-center mb-5 fw-bold fs-2">자주 묻는 질문 (FAQ)</h2>

                <div className="accordion accordion-flush mx-auto" style={{ maxWidth: '768px' }} id="faqAccordion">

                  {/* Q1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq-heading-1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-1" aria-expanded="false" aria-controls="faq-collapse-1">
                        검사 결과는 어떻게 확인할 수 있나요?
                      </button>
                    </h2>
                    <div id="faq-collapse-1" className="accordion-collapse collapse" aria-labelledby="faq-heading-1" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        검사를 완료하면 결과 페이지로 바로 이동하며, 언제든지 '마이페이지'에서 다시 확인할 수 있습니다. 모든 결과는 PDF 파일로 다운로드하여 보관할 수 있습니다.
                      </div>
                    </div>
                  </div>

                  {/* Q2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq-heading-2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-2" aria-expanded="false" aria-controls="faq-collapse-2">
                        검사는 무료인가요?
                      </button>
                    </h2>
                    <div id="faq-collapse-2" className="accordion-collapse collapse" aria-labelledby="faq-heading-2" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        네, JobX에서 제공하는 모든 기본 진로 검사는 무료입니다. 더 심층적인 분석이나 전문가 상담이 필요한 경우에만 유료 옵션을 선택할 수 있습니다.
                      </div>
                    </div>
                  </div>

                  {/* Q3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq-heading-3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-3" aria-expanded="false" aria-controls="faq-collapse-3">
                        검사를 하다가 중단하면 어떻게 되나요?
                      </button>
                    </h2>
                    <div id="faq-collapse-3" className="accordion-collapse collapse" aria-labelledby="faq-heading-3" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        로그인 상태에서 검사를 진행하셨다면 진행 상황이 자동으로 저장됩니다. 나중에 다시 로그인하여 중단된 부분부터 이어서 진행할 수 있습니다.
                      </div>
                    </div>
                  </div>

                  {/* Q4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faq-heading-4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-collapse-4" aria-expanded="false" aria-controls="faq-collapse-4">
                        검사 결과에 대한 추가적인 상담을 받을 수 있나요?
                      </button>
                    </h2>
                    <div id="faq-collapse-4" className="accordion-collapse collapse" aria-labelledby="faq-heading-4" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        물론입니다. 결과 페이지 하단에 있는 '전문가 상담 신청' 버튼을 통해 진로 상담사와 연결하여 결과에 대한 심층적인 해석과 조언을 얻을 수 있습니다. (유료 서비스)
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


        </div>

    );

}

export default JobTestSelectPage;