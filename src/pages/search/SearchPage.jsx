import React from 'react';
import { useState } from 'react';
import RankList from '../../components/rank/RankList';
import SearchBar from '../../components/search/SearchBar';

const SearchPage = () => {

    return (
        <div className="w-75 d-flex justify-content-end align-items-end flex-column ">
           <div className="w-75 ">
               <SearchBar />
           </div>

            <div className="w-75 mt-5">
              <ul className="nav nav-tabs d-flex p-0 m-0" style={{ width: '100%' }}>
                <li className="nav-item" style={{ width: '33.3333%' }}>
                  <a className="nav-link active text-center" data-bs-toggle="tab" href="#section1">통합검색</a>
                </li>
                <li className="nav-item" style={{ width: '33.3333%' }}>
                  <a className="nav-link text-center" data-bs-toggle="tab" href="#section2">채용정보</a>
                </li>
                <li className="nav-item" style={{ width: '33.3333%' }}>
                  <a className="nav-link text-center" data-bs-toggle="tab" href="#section3">기업정보</a>
                </li>
              </ul>

              <div className="tab-content pt-3">

                <div className="tab-pane fade show active d-flex justify-content-start align-items-start flex-column" id="section1">
                    <div className="w-100 border border-1">

                          <div className="d-flex justify-content-between align-items-center w-100 p-3 pb-2 ">
                              <div className="d-flex justify-content-start align-items-center">
                                  <h5 className="fw-bold"> 채용정보</h5>
                                  <span className="fw-bold text-secondary mx-2 pb-1" style={{fontSize : '13px'}}> 3건</span>
                              </div>
                              <div className="d-flex justify-content-start ">

                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked />
                                  <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked">
                                    채용공고
                                  </label>
                                </div>

                                <div className="form-check mx-2">
                                  <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked />
                                  <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked">
                                    파견/대행
                                  </label>
                                </div>

                                <div className="form-check mx-2">
                                  <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked />
                                  <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked">
                                    헤드헌팅
                                  </label>
                                </div>

                              </div>
                            </div>


                            <div className="d-flex justify-content-between align-items-start w-100 p-3" style={{ borderBottom: '1px solid #dee2e6' }}>

                              <div className="d-flex align-items-start flex-column" >
                                   <div className="mt-2 fw-bold">
                                     향기나는재가복지센터
                                   </div>
                                   <div className="mt-2 fw-bold">
                                     로봇 & 코딩 교재 개발자(콘텐츠 기획 / 제작 / 교재 집필)
                                   </div>

                              </div>


                             <div className="d-flex align-items-start flex-column">
                               <div className="d-flex align-items-center mb-1">
                                 <i className="bi bi-cash me-2"></i>
                                 <span className="fw-bold" style={{fontSize: '13px'}}>면접후결정</span>
                               </div>

                               <div className="d-flex align-items-center mb-1">
                                 <i className="bi bi-person-workspace me-2"></i>
                                 <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>경력3년 | 학력무관</span>
                               </div>

                               <div className="d-flex align-items-center mb-1">
                                 <i className="bi bi-clock-history me-2"></i>
                                 <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>주5일 | 주 40시간 근로 | 08:30 ~ 17:30</span>
                               </div>

                               <div className="d-flex align-items-center">
                                 <i className="bi bi-geo-alt me-2"></i>
                                 <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>인천광역시 부평구 무네미로</span>
                               </div>
                             </div>



                              <div className="d-flex align-items-start flex-column">
                                   <div className="d-flex align-items-start">
                                      <h3 className="fw-bold">D - 12</h3>
                                   </div>
                                   <div>
                                      <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>마감일 : 2025-07-26</span>
                                   </div>
                                   <div>
                                      <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>등록일 : 2025-07-13</span>
                                   </div>
                              </div>

                            </div>


                          <div className="d-flex justify-content-between align-items-start w-100 p-3 mt-1 " style={{ borderBottom: '1px solid #dee2e6' }}>

                             <div className="d-flex align-items-start flex-column" >
                                  <div className="mt-2 fw-bold">
                                    향기나는재가복지센터
                                  </div>
                                  <div className="mt-2 fw-bold">
                                    로봇 & 코딩 교재 개발자(콘텐츠 기획 / 제작 / 교재 집필)
                                  </div>

                             </div>


                            <div className="d-flex align-items-start flex-column">
                              <div className="d-flex align-items-center mb-1">
                                <i className="bi bi-cash me-2"></i>
                                <span className="fw-bold" style={{fontSize: '13px'}}>면접후결정</span>
                              </div>

                              <div className="d-flex align-items-center mb-1">
                                <i className="bi bi-person-workspace me-2"></i>
                                <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>경력3년 | 학력무관</span>
                              </div>

                              <div className="d-flex align-items-center mb-1">
                                <i className="bi bi-clock-history me-2"></i>
                                <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>주5일 | 주 40시간 근로 | 08:30 ~ 17:30</span>
                              </div>

                              <div className="d-flex align-items-center">
                                <i className="bi bi-geo-alt me-2"></i>
                                <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>인천광역시 부평구 무네미로</span>
                              </div>
                            </div>



                             <div className="d-flex align-items-start flex-column">
                                  <div className="d-flex align-items-start">
                                     <h3 className="fw-bold">D - 12</h3>
                                  </div>
                                  <div>
                                     <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>마감일 : 2025-07-26</span>
                                  </div>
                                  <div>
                                     <span className="fw-bold text-secondary" style={{fontSize: '13px'}}>등록일 : 2025-07-13</span>
                                  </div>
                             </div>

                           </div>


                           <div className="d-flex w-100 justify-content-center mt-3">
                               <nav aria-label="Page navigation example">
                               <ul class="pagination">
                                 <li class="page-item">
                                   <a class="page-link" href="#" aria-label="Previous">
                                     <span aria-hidden="true">&laquo;</span>
                                   </a>
                                 </li>
                                 <li class="page-item"><a class="page-link" href="#">1</a></li>
                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
                                 <li class="page-item">
                                   <a class="page-link" href="#" aria-label="Next">
                                     <span aria-hidden="true">&raquo;</span>
                                   </a>
                                 </li>
                               </ul>
                               </nav>
                           </div>
                    </div>


                    <div className="w-100 border border-1 mt-5">

                          <div className="d-flex justify-content-between align-items-center w-100  p-3 pb-2 ">
                              <div className="d-flex justify-content-start align-items-center">
                                  <h5 className="fw-bold"> 기업정보</h5>
                                  <span className="fw-bold text-secondary mx-2 pb-1" style={{fontSize : '13px'}}> 3건</span>
                              </div>
                              <div className="d-flex justify-content-start ">

{/*                                 <div className="form-check"> */}
{/*                                   <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked /> */}
{/*                                   <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked"> */}
{/*                                     채용공고 */}
{/*                                   </label> */}
{/*                                 </div> */}

{/*                                 <div className="form-check mx-2"> */}
{/*                                   <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked /> */}
{/*                                   <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked"> */}
{/*                                     파견/대행 */}
{/*                                   </label> */}
{/*                                 </div> */}

{/*                                 <div className="form-check mx-2"> */}
{/*                                   <input className="form-check-input" type="checkbox" id="checkChecked" defaultChecked /> */}
{/*                                   <label className="form-check-label fw-bold" style={{fontSize: '13px'}} htmlFor="checkChecked"> */}
{/*                                     헤드헌팅 */}
{/*                                   </label> */}
{/*                                 </div> */}

                              </div>
                            </div>


                            <div className="d-flex justify-content-between align-items-start w-100 p-3" style={{ borderBottom: '1px solid #dee2e6' }}>

                               <div className="mt-2 border border-1 rounded p-2 w-100">
                               <div className="d-flex justify-content-between">
                                   <span className="fw-bold">(주)동국제약</span>
                                   <span className="fw-bold">이미지</span>
                               </div>

                               <div className="d-flex justify-content-start align-items-start rounded w-75 mt-2 bg-light">
                                    <table className="table ">
                                      <tbody>
                                        <tr>
                                          <td className="text-secondary d-flex">대표자명</td>
                                          <td>손호준</td>
                                        </tr>
                                        <tr>
                                          <td className="text-secondary d-flex">기업형태</td>
                                          <td>코스닥,중견기업</td>
                                        </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">업종</td>
                                           <td>완제 의약품 제조업</td>
                                         </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">주소</td>
                                           <td>서울 강남구 영동로 751</td>
                                         </tr>
                                      </tbody>
                                    </table>

                                     <table className="table">
                                       <tbody>
                                         <tr>
                                           <td className="text-secondary d-flex">사원수</td>
                                           <td>1,216명</td>
                                         </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">설립일</td>
                                           <td>1068년 10월 15일</td>
                                         </tr>
                                          <tr>
                                            <td className="text-secondary d-flex">홈페이지</td>
                                            <td>www.dkpharm.com</td>
                                          </tr>
                                       </tbody>
                                     </table>
                                 </div>
                               </div>
                            </div>




                            <div className="d-flex justify-content-between align-items-start w-100 p-3" style={{ borderBottom: '1px solid #dee2e6' }}>

                               <div className="mt-2 border border-1 rounded p-2 w-100">
                               <div className="d-flex justify-content-between">
                                   <span className="fw-bold">(주)동국제약</span>
                                   <span className="fw-bold">이미지</span>
                               </div>

                               <div className="d-flex justify-content-start align-items-start rounded w-75 mt-2 bg-light">
                                    <table className="table ">
                                      <tbody>
                                        <tr>
                                          <td className="text-secondary d-flex">대표자명</td>
                                          <td>손호준</td>
                                        </tr>
                                        <tr>
                                          <td className="text-secondary d-flex">기업형태</td>
                                          <td>코스닥,중견기업</td>
                                        </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">업종</td>
                                           <td>완제 의약품 제조업</td>
                                         </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">주소</td>
                                           <td>서울 강남구 영동로 751</td>
                                         </tr>
                                      </tbody>
                                    </table>

                                     <table className="table">
                                       <tbody>
                                         <tr>
                                           <td className="text-secondary d-flex">사원수</td>
                                           <td>1,216명</td>
                                         </tr>
                                         <tr>
                                           <td className="text-secondary d-flex">설립일</td>
                                           <td>1068년 10월 15일</td>
                                         </tr>
                                          <tr>
                                            <td className="text-secondary d-flex">홈페이지</td>
                                            <td>www.dkpharm.com</td>
                                          </tr>
                                       </tbody>
                                     </table>
                                 </div>
                               </div>
                            </div>
                           <div className="d-flex w-100 justify-content-center mt-3">
                               <nav aria-label="Page navigation example">
                               <ul class="pagination">
                                 <li class="page-item">
                                   <a class="page-link" href="#" aria-label="Previous">
                                     <span aria-hidden="true">&laquo;</span>
                                   </a>
                                 </li>
                                 <li class="page-item"><a class="page-link" href="#">1</a></li>
                                 <li class="page-item"><a class="page-link" href="#">2</a></li>
                                 <li class="page-item"><a class="page-link" href="#">3</a></li>
                                 <li class="page-item">
                                   <a class="page-link" href="#" aria-label="Next">
                                     <span aria-hidden="true">&raquo;</span>
                                   </a>
                                 </li>
                               </ul>
                               </nav>
                           </div>
                    </div>
                    <div className="mt-3">
                    </div>
                </div>



                <div className="tab-pane fade" id="section2"></div>
                <div className="tab-pane fade" id="section3">섹션 3 콘텐츠</div>
              </div>
            </div>





        </div>
    )


}

export default SearchPage;
