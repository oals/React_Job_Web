
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import { useLocation } from 'react-router-dom';
import { searchJobList } from '../utils/api';
import Pagination from '../components/Pagination';
import BookmarkJobCard from '../components/job/BookmarkJobCard';

const BookmarkPage = () => {

  const findText = new URLSearchParams(useLocation().search).get('text');
  const [jobList, setJobList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(8);
  const [searchKey, setSearchKey] = useState(0);
  const [searchType, setSearchType] = useState(3);

  useEffect(() => {
    setSearchKey(prev => prev + 1);
    setCurrentPage(1);
  }, [findText]);

  useEffect(() => {
    const searchData = async () => {
      try {

        const memberId = localStorage.getItem('memberId');
        const response = await searchJobList(findText, currentPage, size, memberId, searchType);
        const data = await response.json();
        setJobList(data['jobList']);
        setTotalCount(data['totalCount'])

      } catch (error) {
        console.error('검색 중 오류:', error);
      }
    };

    if (findText != null && currentPage != null) {
      searchData();
    }
  }, [searchKey, currentPage, size, searchType]);


  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
          <section className="mb-12 text-center w-75 mx-auto bg-primary p-5 mb-2 rounded">
            <div className="mb-2 text-center ">
              <h1 className="h3 fw-bold mb-1 text-light">
                북마크한 직업
              </h1>
            </div>
            <div className="d-flex flex-column mb-4">
              <span className="fw-semibold mb-1" style={{ color: '#EAEAEA', fontSize: '0.9rem' }}>
                총 <span className="fw-bold" style={{ color: '#ffffff', fontSize: '1.0rem' }}>{totalCount}</span> 건의 직업 정보가 있습니다.
              </span>
            </div>
             <SearchBar
                prefix={"bookmark"}
              />
          </section>
         <div className="w-100 d-flex justify-content-center">
           <div className="row mt-3 d-flex justify-content-start w-75" >
             {jobList.length > 0 &&
               jobList.map((item, i) => (
                 <BookmarkJobCard key={i} jobItem={item} />
               ))}
           </div>
         </div>
          <div className="d-flex justify-content-center mt-4 w-25">
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
        </div>
  );
}

export default BookmarkPage;