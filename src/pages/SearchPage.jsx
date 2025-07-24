import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';


const SearchPage = () => {

    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center ">

               <div className="mb-4 text-center">
                 <h1 className="h3 fw-bold mb-2">‘프론트엔드 개발자’ 검색 결과</h1>
                 <p className="text-muted">총 125건의 직업정보가 있습니다.</p>
               </div>

               <div className="row">
                 {/* 필터 사이드바 */}
                 <aside className="col-md-3 mb-4 text-start">
                   <div className="bg-white p-4 shadow-sm rounded">
                     <h2 className="h6 fw-semibold mb-3 text-center">상세 검색</h2>
                     <div className="input-group mb-3 mt-4 rounded">
                       <input
                         type="text"
                         className="form-control rounded-fill"
                         placeholder="검색어를 입력하세요"
                         aria-label="Search"
                       />

                     </div>


                     <div className="mb-3">
                       <label htmlFor="jobField" className="form-label">직업 분야</label>
                       <select id="jobField" className="form-select">
                         <option>전체</option>
                         <option>IT/인터넷</option>
                         <option>경영/사무</option>
                         <option>디자인</option>
                         <option>마케팅/광고</option>
                       </select>
                     </div>
                     <div className="mb-3">
                       <label htmlFor="salaryRange" className="form-label">평균 연봉</label>
                       <select id="salaryRange" className="form-select">
                         <option>전체</option>
                         <option>4,000만원 이상</option>
                         <option>5,000만원 이상</option>
                         <option>6,000만원 이상</option>
                         <option>7,000만원 이상</option>
                       </select>
                     </div>
                     <div className="mb-3">
                       <label htmlFor="prospects" className="form-label">전망</label>
                       <select id="prospects" className="form-select">
                         <option>전체</option>
                         <option>매우 좋음</option>
                         <option>좋음</option>
                         <option>보통</option>
                       </select>
                     </div>


                     <button className="btn btn-primary w-100">검색하기</button>
                   </div>

                 </aside>



                 {/* 직업 결과 리스트 */}
                 <section className="col-md-9">
                   <div className="d-flex justify-content-between align-items-center mb-3">
                     <div className="text-muted small">
                       <span className="fw-semibold">정렬:</span>{' '}
                       <a href="#" className="text-primary fw-semibold me-2">관련도순</a>|
                       <a href="#" className="ms-2 text-secondary">인기순</a>
                     </div>
                     <select className="form-select form-select-sm w-auto">
                       <option>10개씩 보기</option>
                       <option>20개씩 보기</option>
                       <option>30개씩 보기</option>
                     </select>
                   </div>

                   <div className="d-grid gap-3">
                     {/* 첫 번째 직업 카드 */}
                       <div className="card shadow-sm">
                         <div className="card-body">
                           <div className="d-flex justify-content-between">
                             <div className="d-flex flex-column">
                               <a href="#" className="h5 d-block text-decoration-none text-start text-dark">UI/UX 디자이너</a>
                               <small className="text-muted text-start">디자인</small>
                             </div>
                              <i class="bi bi-bookmark fs-4 text-secondary"></i>
                           </div>
                           <p className="mt-3 text-muted text-start">
                             사용자 중심의 디자인 원칙에 따라 웹 및 모바일 애플리케이션의 인터페이스와 경험을 설계합니다. 사용자의 편의성과 만족도를 높이는 역할을 합니다.
                           </p>
                           <div className="d-flex flex-wrap gap-3 text-muted small mt-3">
                             <span>평균 연봉: 5,500만원</span>
                             <span>전망: 좋음</span>
                             <span>핵심 역량: 프로토타이핑, 사용자 리서치</span>
                           </div>
                         </div>
                       </div>
                         <div className="card shadow-sm">
                           <div className="card-body">
                             <div className="d-flex justify-content-between">
                               <div className="d-flex flex-column">
                                 <a href="#" className="h5 d-block text-decoration-none text-start text-dark">UI/UX 디자이너</a>
                                 <small className="text-muted text-start">디자인</small>
                               </div>

                                <i class="bi bi-bookmark-fill fs-4 text-danger"></i>
                             </div>
                             <p className="mt-3 text-muted text-start">
                               사용자 중심의 디자인 원칙에 따라 웹 및 모바일 애플리케이션의 인터페이스와 경험을 설계합니다. 사용자의 편의성과 만족도를 높이는 역할을 합니다.
                             </p>
                             <div className="d-flex flex-wrap gap-3 text-muted small mt-3">
                               <span>평균 연봉: 5,500만원</span>
                               <span>전망: 좋음</span>
                               <span>핵심 역량: 프로토타이핑, 사용자 리서치</span>
                             </div>
                           </div>
                         </div>
                   </div>
                 </section>


                 <div className="w-100 d-flex justify-content-center mt-5">
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
