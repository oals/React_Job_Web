import React from 'react';
import { useState } from 'react';

const JobInfoPage = () => {

    return (
       <div className="w-75 mx-auto">

        <div className="position-relative mb-5 w-100">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
            alt="소프트웨어 엔지니어"
            className="img-fluid rounded"
            style={{ objectFit: 'cover' }}
          />

          <div
            className="position-absolute bottom-0 start-0 w-100"
            style={{
              height: '60px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
            }}
          ></div>
         <h5
            className="position-absolute bottom-0 start-50 translate-middle-x text-primary fw-bold mb-5 pb-1"
            style={{ zIndex: 2 }}
          >
            IT & 개발
          </h5>
        <h1
          className="position-absolute bottom-0 start-50 translate-middle-x text-white fw-bold fs-2 mb-3"
          style={{ zIndex: 2 }}
        >
          소프트웨어 엔지니어
        </h1>



        </div>

            <div className="w-50 mx-auto">
                   <p className="fs-6 text-secondary mb-5">
                     <strong>소프트웨어 엔지니어</strong>는 다양한 산업 분야에서 사용되는
                     소프트웨어 애플리케이션을 설계·개발·테스트·유지보수합니다. 프로그래밍
                     언어와 자료구조, 알고리즘을 활용해 문제를 해결하며, 다른 엔지니어,
                     제품 기획자, 디자이너 등과 협업해 고품질의 소프트웨어를 만듭니다.
                   </p>
            </div>

               <div className="w-75 mx-auto bg-white">
                    <div className="text-center">
                      <h2 className="fw-bold fs-2 text-dark">자격 요건</h2>
                    </div>

                    <div className="row gy-4 justify-content-center">

                      {/* 학력 */}
                      <div className="col-md-6">
                        <div className="card border-0 h-100 shadow-sm p-4 rounded-4">
                          <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-mortarboard text-primary fs-2 me-3"></i>
                            <h3 className="fs-4 fw-bold mb-0 text-dark">학력</h3>
                          </div>
                          <ul className="list-unstyled">
                            <li className="d-flex mb-3">
                              <i className="bi bi-check-circle-fill text-primary me-3"></i>
                              <div className="d-flex flex-column justify-content-start align-items-start">
                                <p className="fw-semibold mb-1">컴퓨터 공학 또는 관련 분야 학사 학위 이상</p>
                                <p className="text-muted">일부 회사는 석사 또는 박사 학위를 선호할 수 있습니다.</p>
                              </div>
                            </li>
                            <li className="d-flex">
                              <i className="bi bi-check-circle-fill text-primary me-3"></i>
                              <p className="fw-semibold ">비전공자의 경우, 관련 부트캠프 수료 또는 이에 준하는 프로젝트 경험</p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* 자격증 (우대) */}
                      <div className="col-md-6">
                        <div className="card border-0 h-100 shadow-sm p-4 rounded-4">
                          <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-award-fill text-success fs-2 me-3"></i>
                            <h3 className="fs-4 fw-bold mb-0 text-dark">자격증 (우대)</h3>
                          </div>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-3">
                              <i className="bi bi-check-circle-fill text-success me-3"></i>
                              <p className="fw-semibold mb-0">정보처리기사</p>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                              <i className="bi bi-check-circle-fill text-success me-3"></i>
                              <p className="fw-semibold mb-0">클라우드 관련 자격증 (AWS, GCP, Azure 등)</p>
                            </li>
                            <li className="d-flex align-items-start">
                              <i className="bi bi-check-circle-fill text-success me-3"></i>
                              <p className="fw-semibold mb-0">리눅스마스터, 네트워크관리사 등 직무 관련 자격증</p>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>



<div className="container bg-white py-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold fs-2 text-dark">평균 연봉</h2>
    <p className="fs-5 text-muted">경력과 기술 스택에 따라 연봉은 달라질 수 있습니다.</p>
  </div>

  <div className="row justify-content-center gy-4">

    {/* 신입 */}
    <div className="col-md-4 shadow">
      <div className="card bg-light h-100 text-center p-4 border-0 rounded-4 shadow-sm">
        <h3 className="fs-4 fw-bold text-dark mb-2">신입 (1~3년)</h3>
        <p className="fs-2 fw-bold text-primary mb-0">₩4,500만</p>
        <p className="text-muted mt-2">이상</p>
      </div>
    </div>

    {/* 중급 */}
    <div className="col-md-4 shadow">
      <div className="card bg-primary h-100 text-center text-white p-4 border-0 rounded-4 shadow">
        <h3 className="fs-4 fw-bold mb-2">중급 (4~8년)</h3>
        <p className="fs-2 fw-bold mb-0">₩7,000만</p>
        <p className="text-light mt-2">이상</p>
      </div>
    </div>

    {/* 고급 */}
    <div className="col-md-4 shadow">
      <div className="card bg-light h-100 text-center p-4 border-0 rounded-4 shadow-sm">
        <h3 className="fs-4 fw-bold text-dark mb-2">고급 (8년 이상)</h3>
        <p className="fs-2 fw-bold text-primary mb-0">₩1억</p>
        <p className="text-muted mt-2">이상</p>
      </div>
    </div>

  </div>
</div>

           <div className="d-flex mt-5 flex-column w-100 pt-0 p-5">
            <h2 className="fw-bold fs-2 text-dark">주요 업무</h2>
            <section className="mt-4 w-100">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">

                {/* Card 1 */}
                <div className="col">
                  <div className="card shadow border border-0">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3">

                      <div className="text-center text-md-start ms-md-3">
                        <span className="badge bg-primary mb-4 p-3">Software</span>
                      <h5 className="card-title mb-3">코딩 및 개발</h5>
                       <p className="card-text text-muted">
                         깨끗하고 효율적인 코드를 작성하여 소프트웨어 애플리케이션을 개발하고 유지보수합니다.
                       </p>
                      </div>
                    </div>
                  </div>
                </div>




                {/* Card 2 */}
                <div className="col mx-auto">
                  <div className="card shadow border border-0">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3">

                      <div className="text-center text-md-start ms-md-3">
                        <span className="badge bg-primary mb-4 p-3">Software</span>
                      <h5 className="card-title mb-3">코딩 및 개발</h5>
                       <p className="card-text text-muted">
                         깨끗하고 효율적인 코드를 작성하여 소프트웨어 애플리케이션을 개발하고 유지보수합니다.
                       </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                 <div className="col mx-auto">
                   <div className="card shadow border border-0">
                     <div className="d-flex flex-column flex-md-row align-items-center p-3">

                       <div className="text-center text-md-start ms-md-3">
                         <span className="badge bg-primary mb-4 p-3">Software</span>
                       <h5 className="card-title mb-3">코딩 및 개발</h5>
                        <p className="card-text text-muted">
                          깨끗하고 효율적인 코드를 작성하여 소프트웨어 애플리케이션을 개발하고 유지보수합니다.
                        </p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </section>
            </div>

           <div className="d-flex mt-5 flex-column w-100 p-5 pt-0">
            <h2 className="fw-bold fs-2 text-dark">필요 기술</h2>
            <section className=" w-100">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">

                {/* Card 1 */}
                <div className="col text-center">
                  <div className="card border-0 h-100 ">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 p-4 pt-0 mt-0 ">
                      <span className="badge mb-4 p-3 text-success" style={{background: '#d1e7dd'}}>Software</span>
                      <h5 className="card-title mb-3">프로그래밍 언어</h5>
                        <div className="skill-container my-3">
                          <span className="skill-pill">Spring</span>
                          <span className="skill-pill">React</span>
                          <span className="skill-pill">Node.js</span>
                          <span className="skill-pill">Django</span>
                          <span className="skill-pill">Vue.js</span>
                        </div>
                    </div>
                   </div>
                </div>


              <div className="col text-center">
                <div className="card border-0 h-100">
                  <div className="d-flex flex-column justify-content-center align-items-center h-100 p-4 pt-0 mt-0">
                    <span className="badge mb-4 p-3 text-success" style={{background: '#d1e7dd'}}>Software</span>
                    <h5 className="card-title mb-3">프로그래밍 언어</h5>
                      <div className="skill-container my-3">
                        <span className="skill-pill">Spring</span>
                        <span className="skill-pill">React</span>
                        <span className="skill-pill">Node.js</span>
                        <span className="skill-pill">Django</span>
                        <span className="skill-pill">Vue.js</span>
                      </div>
                  </div>
                 </div>
              </div>


               <div className="col text-center">
                 <div className="card border-0 h-100">
                   <div className="d-flex flex-column justify-content-center align-items-center h-100 p-4 pt-0 mt-0">
                     <span className="badge mb-4 p-3 text-success" style={{background: '#d1e7dd'}}>Software</span>
                     <h5 className="card-title mb-3">프로그래밍 언어</h5>
                       <div className="skill-container my-3">
                         <span className="skill-pill">Spring</span>
                         <span className="skill-pill">React</span>
                         <span className="skill-pill">Node.js</span>
                         <span className="skill-pill">Django</span>
                         <span className="skill-pill">Vue.js</span>
                       </div>
                   </div>
                  </div>
               </div>

              </div>
            </section>
            </div>


          </div>


    );
}

export default JobInfoPage;