
import React from 'react';
import { useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import NewsCard from '../components/news/NewsCard';
import ToolBadge from '../components/badge/ToolBadge';
import NotiCard from '../components/noti/NotiCard';
import RankList from '../components/rank/RankList';

const HomePage = () => {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)
  const [selectPlatformId, setSelectPlatformId] = useState(0)
  const [selectNotiListBadge, setSelectNotiListBadge] = useState(0)

  const platforms = [
     { id: 1, name: '사람인' },
     { id: 2, name: '잡코리아' },
     { id: 3, name: '인크루트' },
     { id: 4, name: '원티드' },
     { id: 5, name: '로켓펀치' },
     { id: 6, name: '리멤버' },
   ];

  function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }


  const platformChunks = chunkArray(platforms, 2); // 2개씩 나누기

  return (
    <div className="w-75 mx-auto flex-column">

        <div className="d-flex justify-content-start">
            <SearchBar />
            <RankList />
        </div>


{/*         <div className="d-flex justify-content-end align-items-start"> */}
{/*           <div className="w-25 mt-5 me-4 d-flex flex-column "> */}
{/*              */}{/* 전체 버튼 */}
{/*             <ul className="list-group list-group-horizontal w-100 mb-2"> */}
{/*               <li */}
{/*                 className={`list-group-item flex-fill fw-semibold fs-6 text-dark ${selectPlatformId === 0 ? 'active' : ''}`} */}
{/*                 onClick={() => setSelectPlatformId(0)} */}
{/*                 role="button" */}
{/*               > */}
{/*                 전체 */}
{/*               </li> */}
{/*             </ul> */}

{/*              */}{/* 플랫폼 리스트 묶음 */}
{/*             {platformChunks.map((chunk, idx) => ( */}
{/*               <ul */}
{/*                 key={idx} */}
{/*                 className="d-flex justify-content-between list-group list-group-horizontal-sm mb-1" */}
{/*               > */}
{/*                 {chunk.map(platform => ( */}
{/*                   <li */}
{/*                     key={platform.id} */}
{/*                     className={`list-group-item flex-fill text-center w-50 fw-semibold fs-6 text-dark ${ */}
{/*                       selectPlatformId === platform.id ? 'active fw-bold' : '' */}
{/*                     }`} */}
{/*                     onClick={() => setSelectPlatformId(platform.id)} */}
{/*                     role="button" */}
{/*                   > */}
{/*                     {platform.name} */}
{/*                   </li> */}
{/*                 ))} */}
{/*               </ul> */}
{/*             ))} */}
{/*             <div> */}
{/*                  <div className="border border-1 mt-2" style={{backgroundColor: "#e0ffed"}}> */}
{/*                    <div className="d-flex justify-content-center align-items-center"> */}
{/*                     <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                       <i className="bi bi-journal-text mb-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                       <span>Ai 자소서 코칭</span> */}
{/*                     </span> */}
{/*                     <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                       <i className="bi bi-spellcheck me-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                       <span>맞춤법 검사</span> */}
{/*                     </span> */}

{/*                    <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                      <i className="bi bi-spellcheck me-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                      <span>글자수 세기</span> */}
{/*                    </span> */}
{/*                    </div> */}

{/*                  </div> */}

{/*                   <div className="border border-1 " style={{backgroundColor: "#e0ffed"}}> */}
{/*                     <div className="d-flex justify-content-center align-items-center"> */}
{/*                      <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                        <i className="bi bi-journal-text mb-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                        <span className="fw-semibold" >실업급여 계산</span> */}
{/*                      </span> */}
{/*                      <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                        <i className="bi bi-spellcheck me-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                        <span>퇴직금 계산</span> */}
{/*                      </span> */}

{/*                     <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}> */}
{/*                       <i className="bi bi-spellcheck me-1 text-success" style={{ fontSize: '1.2rem' }}></i> */}
{/*                       <span>연봉 계산</span> */}
{/*                     </span> */}
{/*                     </div> */}

{/*                   </div> */}
{/*             </div> */}
{/*           </div> */}




{/*         </div> */}



            <div className="w-100 mt-5 p-4" style={{ backgroundColor: '#f3f4f8' }}>
              {/* 버튼 영역 */}
              <div className="mx-5 mb-4">
                <button type="button" className="btn btn-success btn-sm mx-2 rounded-pill fw-semibold">
                  <i className="bi bi-stars me-1"></i>회원님을 위한 추천공고
                </button>
                <button type="button" className="btn btn-light btn-sm mx-2 rounded-pill fw-semibold">
                  <i className="bi bi-fire me-1"></i>지금 핫한 대기업 공고
                </button>
                <button type="button" className="btn btn-light btn-sm mx-2 rounded-pill fw-semibold">
                  <i className="bi bi-bank me-1"></i>공기업 공고
                </button>
              </div>

              {/* 캐러셀 시작 */}
              <div id="jobCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    {/* 상단 3개 카드 */}
                    <div className="row mb-2">
                      {[...Array(3)].map((_, idx) => (
                        <NotiCard
                            platformTitle={"사람인"}
                            notiTitle={"2025년 신입/계약직 하반기 채용"}
                            notiCompany={"유한킴벌리"}
                            key={idx}
                        />
                      ))}
                    </div>
                    {/* 하단 3개 카드 */}
                    <div className="row">
                      {[...Array(3)].map((_, idx) => (
                         <NotiCard
                             platformTitle={"잡플래닛"}
                             notiTitle={"2025년 신입/계약직 하반기 채용"}
                             notiCompany={"유한킴벌리"}
                             key={idx}
                         />
                      ))}
                    </div>
                  </div>

                  {/* 추가 슬라이드 */}
                  <div className="carousel-item active">
                    {/* 상단 3개 카드 */}
                    <div className="row mb-2">
                      {[...Array(3)].map((_, idx) => (
                           <NotiCard
                               platformTitle={"잡플래닛"}
                               notiTitle={"2025년 신입/계약직 하반기 채용"}
                               notiCompany={"유한킴벌리"}
                               key={idx}
                           />
                      ))}
                    </div>
                    {/* 하단 3개 카드 */}
                    <div className="row">
                      {[...Array(3)].map((_, idx) => (
                           <NotiCard
                               platformTitle={"잡플래닛"}
                               notiTitle={"2025년 신입/계약직 하반기 채용"}
                               notiCompany={"유한킴벌리"}
                               key={idx}
                           />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 캐러셀 좌우 버튼 */}
                <button className="carousel-control-prev" type="button" data-bs-target="#jobCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">이전</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#jobCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">다음</span>
                </button>
              </div>
            </div>



            <div className="border border-1 " style={{backgroundColor: "#e0ffed"}}>
              <div className="d-flex justify-content-center align-items-center">
                 <ToolBadge
                   badgeText={'실업급여 계산'}
                   iconClass={'bi bi-journal-text'}
                 />
                 <ToolBadge
                   badgeText={'퇴직금 계산'}
                   iconClass={'bi bi-coin'}
                 />
                 <ToolBadge
                   badgeText={'연봉 계산'}
                   iconClass={'bi bi-cash-stack'}
                 />
                 <ToolBadge
                   badgeText={'글자수 세기'}
                   iconClass={'bi bi-body-text'}
                 />
                 <ToolBadge
                   badgeText={'맞춤법 검사'}
                   iconClass={'bi bi-spellcheck'}
                 />
              </div>
           </div>


            <div className="mt-3 p-0 m-0">
              <div className="row">
                {[...Array(6)].map((_, idx) => (
                  <NewsCard
                    index={idx}
                    key={idx}
                  />
                ))}
              </div>
            </div>

    </div>
  );
}


export default HomePage;
