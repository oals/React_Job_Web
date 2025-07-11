import React, { useState } from 'react';

const SearchBarAccordion = ({callBack}) => {

  return (
       <div className="row w-100">
          <div className="accordion accordion-flush d-flex w-100" id="accordionFlushExample">

            {/* 아코디언 1 */}
            <div className="col-3 accordion-item">
              <h2 className="accordion-header">
                <div className="d-flex justify-content-end mt-2">
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
                       className="form-control border-0"
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
                 className="accordion-body p-1 border border-1 border-top-0"
                 style={{
                   borderLeftColor: "#e0e0e0",
                   width: "100%",
                   position: "relative",
                 }}
               >
                 <div className="d-flex justify-content-start align-items-start flex-column">
                   <span className="m-3 mx-1 fw-bold text-secondary">최근 검색어</span>

                   <div className="d-flex w-100 justify-content-between mb-1">
                     <span className="mx-1" style={{fontSize: '14px'}}>검색 텍스트</span>
                     <span className="mx-1" >x</span>
                   </div>

                   <div className="d-flex w-100 justify-content-between mb-1">
                     <span className="mx-1" style={{fontSize: '14px'}}>검색 텍스트</span>
                     <span className="mx-1">x</span>
                   </div>
                 </div>
               </div>

              </div>
            </div>

            {/* 아코디언 2 */}
            <div className="col-3 accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <i className="bi bi-geo-alt me-3" style={{ color: "#198754" }}></i>
                  지역을 선택해주세요
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >


            <div className="accordion-body p-0 border border-1 border-top-0" style={{
                    width: "300%",
                    position: "relative",
                    borderLeftColor: "#e0e0e0",
                    left: "-100%",
                }}>
              <div className="d-flex justify-content-start align-items-start flex-column">
                   <div className="d-flex justify-content-start w-50">
                        <div className="input-group mx-2 mt-2 border border-1">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="지역명 입력"
                            aria-label="지역명 입력"
                            style={{ outline: 'none', boxShadow: 'none' }}
                          />
                        </div>
                  </div>


                    <div className="d-flex w-100 gap-1 mt-2 overflow-auto" style={{
                         maxHeight: "200px",
                         scrollbarWidth: "none",
                         msOverflowStyle: "none",
                        }}>
                        <div className="w-50">
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
                    className="overflow-auto flex-fill border-start border-1 w-100"
                    style={{
                      maxHeight: '200px',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      borderLeftColor: '#e0e0e0',
                    }}
                  >
                    <div
                      className="d-flex flex-wrap gap-2 mx-3 p-2"
                      style={{
                        alignContent: 'flex-start',
                      }}
                    >
                      {[...Array(50)].map((_, idx) => (
                        <span
                          key={idx}
                          className="d-inline-block fw-bold text-dark text-center"
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
            <div className="col-3 accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
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

            {/* 닫기 버튼 */}
            <div className="col-1 p-1 d-flex align-items-start">
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
            </div>
          </div>
        </div>


  )

}

export default SearchBarAccordion