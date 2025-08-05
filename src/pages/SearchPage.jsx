import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchJobList } from '../utils/api';
import SearchJobCardItem from '../components/search/SearchJobCardItem';
import Pagination from '../components/Pagination';

const SearchPage = () => {

   const findText = new URLSearchParams(useLocation().search).get('text');
   const [jobList, setJobList] = useState([]);
   const [totalCount, setTotalCount] = useState(0);
   const [currentPage , setCurrentPage] = useState(1);
   const [size , setSize] = useState(5);


    useEffect(() => {
      const searchData = async () => {
        try {

          const memberId = localStorage.getItem('memberId');
          const response = await searchJobList(findText,currentPage,size,memberId);
          const data = await response.json();
          setJobList(data['jobList']);
          setTotalCount(data['totalCount'])

        } catch (error) {
          console.error('검색 중 오류:', error);
        }
      };

      if (findText) {
        searchData();
      }
    }, [findText,currentPage, size]);


    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center ">

               <div className="mb-4 text-center ">
                 <h1 className="h3 fw-bold mb-2">‘{findText}’ 검색 결과</h1>
                 <p className="text-muted">총 {jobList.length}건의 직업정보가 있습니다.</p>
               </div>

               <SearchBar />

               <div className="row mt-5 w-50">

                 {/* 직업 결과 리스트 */}
                 <section className="col-md-12">
                   <div className="d-flex justify-content-between align-items-center mb-3">
                     <div className="text-muted small">
                       <span className="fw-semibold">정렬:</span>{' '}
                       <a href="#" className="text-primary fw-semibold me-2">관련도순</a>|
                       <a href="#" className="ms-2 text-secondary">인기순</a>
                     </div>
                    <select
                      className="form-select form-select-sm w-auto"
                      value={size}
                      onChange={(e) => {
                        setSize(Number(e.target.value));
                        setCurrentPage(1);
                      }}

                    >
                      <option value={5}>5개씩 보기</option>
                      <option value={15}>15개씩 보기</option>
                      <option value={30}>30개씩 보기</option>
                    </select>
                   </div>

                   <div className="w-100 mb-5">


                    {jobList.length > 0 &&
                      jobList.map((item, i) => (
                        <SearchJobCardItem key={i} jobItem={item} />
                    ))}

                   </div>
                 </section>
               </div>

               {totalCount !== 0 && (
                 <Pagination
                   currentPage={currentPage}
                   totalPages={Math.ceil(totalCount / size)}
                   onPageChange={(page) => {
                       setCurrentPage(page)
                   }}
                 />
               )}

        </div>
    )


}

export default SearchPage;
