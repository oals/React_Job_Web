import React, { useState } from 'react';

const SearchBarAccordion = ({callBack}) => {

  return (
       <div className="row w-100 border border-1">

             <div className="p-2 d-flex justify-content-end align-items-end">
               <div
                 className="border border-secondary rounded d-flex justify-content-center align-items-center"
                 style={{ width: "40px", height: "40px" }}
               >
                 <button
                   type="button"
                   className="btn btn-light p-0 m-0"
                   aria-label="닫기"
                   onClick={() => callBack()}
                   style={{ lineHeight: 1 }}
                 >
                   <i className="bi bi-x fs-3"></i>
                 </button>
               </div>
                <div
                  className="border border-secondary rounded d-flex justify-content-center align-items-center ms-2"
                  style={{ width: "40px", height: "40px" }}
                >
                  <button
                    type="button"
                    className="btn btn-light p-0 m-0"
                    aria-label="새로고침"
                    style={{ lineHeight: 1 }}
                  >
                    <i className="bi bi-arrow-counterclockwise fs-3 "></i>
                  </button>
                </div>
             </div>

          <div className="accordion accordion-flush d-flex w-100" id="accordionFlushExample">

            {/* 아코디언 1 */}
            <div className="col-4 accordion-item border-top border-bottom-0">
              <h2 className="accordion-header">
                <div className="d-flex justify-content-end mt-2 ">
                     <button
                       className="btn btn-outline-none"
                       type="button"
                       id="button-addon1"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                       style={{
                         border: "none",
                         background: "transparent",
                         padding: "0 1rem",

                       }}
                     >
                       <i className="bi bi-search" style={{ color: "#198754" }}></i>
                     </button>
                     <input
                       type="text"
                       className="form-control border-0 fw-bold"
                       placeholder="검색어를 입력하세요"
                       aria-label="Example text with button addon"
                       aria-describedby="button-addon1"
                       data-bs-toggle="collapse"
                       data-bs-target="#flush-collapseOne"
                       aria-expanded="false"
                       aria-controls="flush-collapseOne"
                       style={{
                         outline: "none",
                         boxShadow: "none",
                         fontSize: '14px'
                       }}
                     />

                 </div>
              </h2>

              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
               <div
                 className="accordion-body p-1 "
                 style={{
                   borderLeftColor: "#e0e0e0",
                   width: "300%",
                   position: "relative",
                 }}
               >
                 <div className="d-flex flex-wrap w-100">
                   <span className="m-3 mx-1 d-flex fw-bold text-secondary w-100">최근 검색어</span>

                   {Array.from({ length: 15 }).map((_, index) => (
                     <div key={index} className="d-flex align-items-center mx-2 my-1">
                       <span style={{ fontSize: "13px" }}>검색 텍스트</span>
                       <span className="ms-1 " style={{ fontSize: "13px" }}>x</span>
                     </div>
                   ))}


                 </div>

               </div>

              </div>
            </div>

            {/* 아코디언 2 */}
            <div className="col-4 accordion-item border-top border-bottom-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{fontSize: '14px'}}
                >
                  <i className="bi bi-geo-alt me-3 " style={{ color: "#198754" }}></i>
                  지역을 선택해주세요
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >


            <div className="accordion-body p-0 " style={{
                    width: "300%",
                    position: "relative",
                    borderLeftColor: "#e0e0e0",
                    left: "-100%",
                }}>
              <div className="d-flex justify-content-start align-items-start flex-column mb-3">
                   <div className="d-flex justify-content-start w-50">
                        <div className="input-group mx-2 mt-2 mb-2  ">
                          <input
                            type="text"
                            className="form-control border-1"
                            placeholder="지역명 입력"
                            aria-label="지역명 입력"
                            style={{ outline: 'none', boxShadow: 'none',fontSize : '14px' }}
                          />
                        </div>
                  </div>


                    <div className="d-flex w-100 gap-1 mt-2 overflow-auto " style={{
                         maxHeight: "200px",
                         scrollbarWidth: "none",
                         msOverflowStyle: "none",
                        }}>
                        <div className="w-50 ">
                          <div className="flex-fill w-100 d-flex justify-content-center">
                            <div className="d-flex flex-column gap-1 mx-auto">
                              {[...Array(10)].map((_, i) => (
                                <span key={i} className="d-block m-1" style={{fontSize: '13px'}}>서울</span>
                              ))}
                            </div>

                            <div className="d-flex flex-column gap-1 mx-auto">
                              {[...Array(10)].map((_, i) => (
                               <span key={i} className="d-block m-1" style={{fontSize: '13px'}}>대전</span>
                              ))}
                            </div>

                          </div>
                        </div>



                  <div
                    className="overflow-auto flex-fill border-start w-100"
                    style={{
                      maxHeight: '200px',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',

                    }}
                  >
                    <div
                      className="d-flex flex-wrap gap-2 mx-3 p-2 "
                      style={{
                        alignContent: 'flex-start',
                      }}
                    >
                      {[...Array(50)].map((_, idx) => (
                        <span
                          key={idx}
                          className="d-inline-block text-dark text-center"
                          style={{
                            fontSize: '13px',
                            padding: '6px 12px',
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            minWidth: '80px',
                          }}
                        >
                          항목 {idx + 1}
                        </span>
                      ))}
                    </div>
                  </div>





                </div>
              </div>
            </div>






              </div>
            </div>

            {/* 아코디언 3 */}
            <div className="col-4 accordion-item border-top border-bottom-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                   style={{fontSize: '14px'}}
                >
                  <i className="bi bi-card-text me-3" style={{ color: "#198754" }}></i>
                  직업을 선택해주세요.
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">내용 3</div>
              </div>
            </div>


          </div>

      <div>
        <div class="accordion" id="exampleAccordion">
          <div class="accordion-item mt-1 mb-1 border border-0 border-top ">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button collapsed justify-content-center text-center border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <span class="w-100 text-center"  style={{fontSize: '14px'}}>상세설정</span>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#exampleAccordion">
              <div class="accordion-body d-flex justify-content-between align-items-start">
                <div className="d-flex justify-content-start align-items-start flex-column" style={{width: '10%'}}>
                    <span className="fw-bold">연봉</span>
                    <span className="fw-bold mt-4">경력선택</span>
                    <span className="fw-bold mt-2">학력선택</span>
                    <span className="fw-bold mt-2">재택근무</span>
                    <span className="fw-bold mt-2">업종</span>
                    <span className="fw-bold mt-2">기업형태</span>
                    <span className="fw-bold mt-2">근무형태</span>
                    <span className="fw-bold mt-2">근무요일</span>
                    <span className="fw-bold mt-2">복리후생</span>
                    <span className="fw-bold mt-2">제외 검색어</span>

                </div>
                <div className="d-flex justify-content-start align-items-start flex-column " style={{width: '90%'}}>

                   <div className="input-group w-25">
                       <div className="input-group">
                         <input
                           type="text"
                           className="form-control border-0 border-bottom"
                           placeholder="2400"
                           aria-label="2400"
                           style={{ outline: 'none', boxShadow: 'none',fontSize : '14px' }}
                         />
                         <span>만원 이상</span>
                       </div>

                   </div>

                     <div className="input-group w-25">
                         <div className="input-group">
                           <input
                             type="text"
                             className="form-control border-0 border-bottom"
                             placeholder="3"
                             aria-label="3"
                             style={{ outline: 'none', boxShadow: 'none',fontSize : '14px' }}
                           />
                           <span>년 이상</span>
                         </div>

                     </div>

                  <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Small button
                    </button>
                    <ul class="dropdown-menu">
                        <li className="dropdown-item">고교 졸업 이하 </li>
                        <li className="dropdown-item">고등학교 졸업</li>
                        <li className="dropdown-item">대학 졸업 (2,3년제)</li>
                        <li className="dropdown-item">대학교 졸업 (4년제)</li>
                        <li className="dropdown-item">대학원 석사 졸업</li>
                        <li className="dropdown-item">대학원 박사 졸업</li>
                        <li className="dropdown-item">박사 졸업 이상</li>

                    </ul>
                  </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkChecked" checked />
                        <label className="form-check-label" for="checkChecked">
                          재택근무 가능
                        </label>
                    </div>
                    <span className="fw-bold">연봉</span>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

          <div className="d-flex justify-content-start flex-column align-items-start p-4 border border-1 rounded ">
              <div className="d-flex justify-content-start">
                  <div>
                      <span className="text-secondary" style={{fontSize: '13px'}} > 검색어 &gt; 파이썬 </span>
                      <span className="text-secondary" style={{fontSize: '13px'}} > x </span>
                  </div>
                  <div className="ms-3">
                      <span className="text-secondary" style={{fontSize: '13px'}} > 서울 &gt; 강북구 </span>
                      <span className="text-secondary" style={{fontSize: '13px'}} > x </span>

                      <span className="text-secondary ms-3" style={{fontSize: '13px'}} > 서울 &gt; 강진구 </span>
                      <span className="text-secondary" style={{fontSize: '13px'}} > x </span>
                  </div>
              </div>

              <div className="w-100 mt-4">
                  <button className="btn btn-success w-100 py-2">검색하기</button>
              </div>

          </div>

        </div>


  )

}

export default SearchBarAccordion