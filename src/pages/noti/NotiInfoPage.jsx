import React from 'react';
import { useState } from 'react';


const NotiInfoPage = () => {


    return (
    <div className="container-fluid">
      <div className="position-fixed d-flex justify-content-between flex-column top-5 border border-1" style={{ width: '4%', height: '25%', left: '22%'}}>
        <div className="d-flex flex-column align-items-center border border-1">
          <i className="bi bi-person-circle" style={{fontSize: '25px'}}></i>
          <span style={{fontSize: '13px'}}>채용방법</span>
        </div>

        <div className="d-flex flex-column align-items-center border border-1">
          <i className="bi bi-person-circle" style={{fontSize: '25px'}}></i>
          <span style={{fontSize: '13px'}}>접수방법</span>
        </div>

        <div className="d-flex flex-column align-items-center border border-1">
          <i className="bi bi-person-circle" style={{fontSize: '25px'}}></i>
          <span style={{fontSize: '13px'}}>기업정보</span>
        </div>
      </div>

      <div className="position-fixed d-flex align-items-start flex-column top-5 p-3 border border-1" style={{ width: '17%', height: '25%', right: '9%' }}>
        <div className="d-flex align-items-center">
             <i className="bi bi-person-circle me-3 " style={{ fontSize: '3rem', color: '#c5c7cc' }}></i>
            <span>로그인을 해주세요</span>
        </div>

        <button
          className="btn btn-outline-success w-100 mt-2 py-2 fs-6"
        >
          <i className="bi bi-bookmark me-2"></i>
          공고 저장
        </button>

        <button className="btn btn-success w-100 mt-2  py-3">지원하기</button>

      </div>


      <div className="d-flex flex-column p-4 w-50 border border-1 " style={{ marginLeft: '25%', marginRight: '20%' }}>
        <div className="d-flex justify-content-between">
            <h4 className="fw-bold">[위픽코퍼레이션] 광고기획자(AE) 채용 [재택 근무 기반]</h4>
           <button className="btn btn-outline-danger">
             <i className="bi bi-heart"></i>
           </button>
         </div>

          <div className="d-flex justify-content-between align-items-center mt-1">

              <div>
                   <span className="text-secondary me-2" style={{fontSize: '15px'}}>(주)동국제약</span>
                   <span className="text-secondary" style={{fontSize: '15px'}}>서울</span>
              </div>

              <div>
                   <span className="text-secondary me-1" style={{fontSize: '13px'}}>조회수</span>
                   <span className="text-secondary me-2 fw-bold" style={{fontSize: '13px'}}>4,612</span>

              </div>



          </div>

        <div style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}></div>

        <div className="mt-3 d-flex ">
              <span className="fw-bold">요약</span>
        </div>

        <div className="w-100 d-flex justify-content-start rounded border border-1 mt-2 mb-3">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-secondary">경력</td>
                  <td className="text-success">신입/ 경력</td>
                </tr>
                <tr>
                    <td className="text-secondary">직급/직책</td>
                    <td className="text-success">면접 후 결정</td>
                </tr>
                 <tr>
                   <td className="text-secondary">학력</td>
                   <td className="text-success">대졸(4년제이상)</td>
                 </tr>
              </tbody>
            </table>

            <table className="table">
              <tbody>
                <tr>
                  <td className="text-secondary">근무형태</td>
                  <td>정규직</td>
                </tr>
                <tr>
                 <td className="text-secondary">급여</td>
                 <td>면접 후 결정</td>
                </tr>
                 <tr>
                   <td className="text-secondary">근무지역</td>
                   <td>서울 강서구</td>
                 </tr>
              </tbody>
            </table>
        </div>

        <div style={{ borderBottom: '1px solid #ccc', padding: '2px 0' }}></div>


        <div className="d-flex fw-bold mt-4">
            <span>이미지</span>
        </div>

        <div id="carouselExample" className="carousel slide mt-4 " data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* 첫 번째 아이템 (active) */}
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <img
                  src="https://picsum.photos/400/200?random=1"
                  className="d-block mx-2"
                  alt="이미지 1"
                  style={{ width: '30%' }}
                />
                <img
                  src="https://picsum.photos/400/200?random=2"
                  className="d-block mx-2"
                  alt="이미지 2"
                  style={{ width: '30%' }}
                />
                <img
                  src="https://picsum.photos/400/200?random=3"
                  className="d-block mx-2"
                  alt="이미지 3"
                  style={{ width: '30%' }}
                />
              </div>
            </div>

            {/* 두 번째 아이템 */}
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img
                  src="https://picsum.photos/400/200?random=4"
                  className="d-block mx-2"
                  alt="이미지 4"
                  style={{ width: '30%' }}
                />
                <img
                  src="https://picsum.photos/400/200?random=5"
                  className="d-block mx-2"
                  alt="이미지 5"
                  style={{ width: '30%' }}
                />
                <img
                  src="https://picsum.photos/400/200?random=6"
                  className="d-block mx-2"
                  alt="이미지 6"
                  style={{ width: '30%' }}
                />
              </div>
            </div>


          </div>


          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
            style={{ left: 0, width: '2%' }}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
            style={{ right: 0, width: '2%' }}
          >
            <span className="carousel-control-next-icon text-danger" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div
           className="d-flex flex-column justify-content-center align-items-center w-100 mt-4"
           style={{
             whiteSpace: 'pre-wrap',
             wordBreak: 'break-word',
             overflowWrap: 'break-word'
           }}
         >
          <span className="fw-bold mt-5">소개</span>
          <span className="mt-2">
              About wepick].{'\n'}
              위픽(WEPICK)은 마케터들이 성장하고 성공할 수 있도록 지원하는 마케터 라이프사이클 플랫폼입니다.{'\n'}
              마케팅 솔루션, 플랫폼과 미디어, 콘텐츠를 통해 마케터들의 역량 강화와 성과 창출을 돕고 있으며, 마케팅 업계 전반에 긍정적인 변화를 이끌어가고 있습니다..{'\n'}
              [wepick's Mission].{'\n'}
              위픽의 미션은 "마케터들이 세상을 이롭게 바꾸도록 돕는 것"입니다..{'\n'}
              이를 위해 마케터의 마케터로서 초보부터 전문가까지 전 과정에서 필요한 풀스택 솔루션을 제공하며, 마케터들의 성장과 성공을 지속적으로 지원하는 것을 지향합니다..
          </span>

          <span className="fw-bold mt-5">주요 업무</span>
         <span className="mt-2">
           [WEPICK, 마케터의 마케터]{'\n'}
            마케터는 세상을 바꿀 수 있습니다.{'\n'}{'\n'}

            위픽은 마케터의 여정을 함께하는 풀스택 마케팅 플랫폼입니다.{'\n'}
            우리는 마케터가 진정성 있는 스토리와 실질적인 성과를 동시에 만들어낼 수 있도록{'\n'}{'\n'}

            마케팅 솔루션, 플랫폼, 미디어를 통합 제공하며,{'\n'}
            마케팅을 '기술'이 아닌 '변화의 힘'으로 바라봅니다.{'\n'}{'\n'}

            단순한 대행이 아닌, 마케터를 위한 마케터들이 만든 팀.{'\n'}
            마케팅을 배우는 순간부터, 마케터로 기억되는 그날까지 고객의 여정에 함께합니다.
          </span>


         <span className="fw-bold mt-5">자격 요건</span>
         <span className="mt-2">
            이런 광고기획자(AE)를 찾아요.{'\n'}
             · 마케팅에 대한 기본 이해가 있으신 분{'\n'}
             · 매체 및 대행사 구조에 대한 이해가 있으신 분{'\n'}
             · 실행 중심의 사고로 문제를 해결하는 능력이 있는 분{'\n'}
             · 변화와 도전을 즐기며, 더 나은 방법을 찾는 분{'\n'}
             · 동료 및 클라이언트와의 진정성 있는 소통을 중요하게 여기는 분
          </span>

        <span className="fw-bold mt-5">우대사항</span>
         <span className="mt-2">
          · 퍼포먼스 광고 및 광고 영업 경험이 있으신 분{'\n'}
          · 미디어믹스 및 제안서 작성 경험이 있으신 분{'\n'}
          · 바이럴 광고 및 LSM 경험이 있으신 분{'\n'}
          · 운전 가능하신 분
        </span>


        <span className="fw-bold mt-5">채용 절차</span>
        <span className="mt-2">
          · 서류전형 &gt; 면접전형(대면 또는 비대면) &gt; 최종합격
        </span>

       </div>

       <div style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}></div>


        <div className="mt-3 d-flex ">
              <span className="fw-bold">기업 정보</span>
        </div>

        <div className="mt-2 border border-1 rounded p-2">
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

        <div style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}></div>



    <div className="d-flex justify-content-center align-items-start flex-wrap w-100 mt-2">
      <div style={{ width: '32%' }}>
        <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
          <span className="fw-bold">(주)엘티엔터테이먼트</span>
          <span>제주드림타워 복합리조트 카지노*호...</span>
          <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
          <div className="d-flex justify-content-between w-100 mt-1">
            <i className="bi bi-star"></i>
            <div>
              <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
              <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
            </div>
          </div>
        </div>
      </div>

       <div style={{ width: '32%' }}>
          <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
            <span className="fw-bold">(주)엘티엔터테이먼트</span>
            <span>제주드림타워 복합리조트 카지노*호...</span>
            <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
            <div className="d-flex justify-content-between w-100 mt-1">
              <i className="bi bi-star"></i>
              <div>
                <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
                <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '32%' }}>
              <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
                <span className="fw-bold">(주)엘티엔터테이먼트</span>
                <span>제주드림타워 복합리조트 카지노*호...</span>
                <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
                <div className="d-flex justify-content-between w-100 mt-1">
                  <i className="bi bi-star"></i>
                  <div>
                    <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
                    <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '32%' }}>
                  <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
                    <span className="fw-bold">(주)엘티엔터테이먼트</span>
                    <span>제주드림타워 복합리조트 카지노*호...</span>
                    <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
                    <div className="d-flex justify-content-between w-100 mt-1">
                      <i className="bi bi-star"></i>
                      <div>
                        <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
                        <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ width: '32%' }}>
                      <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
                        <span className="fw-bold">(주)엘티엔터테이먼트</span>
                        <span>제주드림타워 복합리조트 카지노*호...</span>
                        <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
                        <div className="d-flex justify-content-between w-100 mt-1">
                          <i className="bi bi-star"></i>
                          <div>
                            <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
                            <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ width: '32%' }}>
                      <div className="card shadow-sm rounded p-3 mb-3 mx-1 mt-2">
                        <span className="fw-bold">(주)엘티엔터테이먼트</span>
                        <span>제주드림타워 복합리조트 카지노*호...</span>
                        <span className="text-secondary" style={{ fontSize: '13px' }}>#정규직 #계약직 #제주 제주시</span>
                        <div className="d-flex justify-content-between w-100 mt-1">
                          <i className="bi bi-star"></i>
                          <div>
                            <span className="me-3" style={{ fontSize: '13px' }}>~08/31(목)</span>
                            <span className="border border-1 p-1 rounded" style={{ fontSize: '13px' }}>입사지원</span>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>






        </div>
    </div>
    )
}

export default NotiInfoPage;