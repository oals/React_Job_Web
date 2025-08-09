import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/search/SearchBar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchJobList } from '../utils/api';
import SearchJobCard from '../components/job/SearchJobCard';
import Pagination from '../components/Pagination';

const SearchPage = () => {

  const findText = new URLSearchParams(useLocation().search).get('text');
  const [jobList, setJobList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [size, setSize] = useState(5);
  const [searchKey, setSearchKey] = useState(0);
  const [searchType, setSearchType] = useState(1);

  useEffect(() => {
    setSearchKey(prev => prev + 1);
    setCurrentPage(1);
  }, [findText]);

  useEffect(() => {
    const searchData = async () => {
      try {

        const memberId = localStorage.getItem('memberId');
        const response = await searchJobList(findText, currentPage, size, memberId != null ? memberId : '', searchType);
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
            {findText
              ? `‘${findText}’ 검색 결과`
              : '검색어를 입력해주세요'}
          </h1>
        </div>
        <div className="d-flex flex-column mb-4">
          <span className="fw-semibold mb-1" style={{ color: '#EAEAEA', fontSize: '0.9rem' }}>
            총 <span className="fw-bold" style={{ color: '#ffffff', fontSize: '1.0rem' }}>{totalCount}</span> 건의 직업 정보가 있습니다.
          </span>
        </div>
        <SearchBar
          prefix={"search"}
        />
      </section>
      <div className="row mt-5 w-75">
        <section className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="text-muted small">
              <span className="fw-semibold">정렬:</span>{' '}
              <a
                href="#"
                className={`fw-semibold me-2 ${searchType === 1 ? 'text-primary' : 'text-secondary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchType(1);
                }}
              >
                관련도순
              </a>
              |
              <a
                href="#"
                className={`fw-semibold ms-2 ${searchType === 2 ? 'text-primary' : 'text-secondary'}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchType(2);
                }}
              >
                인기순
              </a>
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
                <SearchJobCard key={item.jobCd} jobItem={item} />
              ))}
          </div>
        </section>
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
  )
}

export default SearchPage;