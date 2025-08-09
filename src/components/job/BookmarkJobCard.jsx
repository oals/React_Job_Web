import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { saveBookmarks } from '../../utils/api';

const SearchJobCard = ({ jobItem }) => {

  const parts = jobItem.certNm.split(/[\/,]/);
  const uniqueParts = [...new Set(parts)];
  const [isBookmarked, setIsBookmarked] = useState(jobItem.bookmark);

  useEffect(() => {
    setIsBookmarked(jobItem.bookmark);
  }, [jobItem]);

  return (
    <div className="card shadow-sm p-2 pt-2 mt-2 mx-2  text-start "style={{width:'23.9%'}} >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <small className=" text-start p-2 rounded text-primary fw-bold mb-2" style={{backgroundColor: '#d7ddfa',fontSize: '0.80rem' }}>{jobItem.jobLrclNm}</small>
            <Link to={`/jobInfo?jobCd=${jobItem.jobCd}`} className="me-4 link-offset-2 link-underline text-secondary link-underline-opacity-0">
              <span className="h5 d-block text-decoration-none text-start text-dark">{jobItem.jobSmclNm}</span>
            </Link>
          </div>
          <i
            className={`bi ${isBookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'} fs-4 text-primary`}
            onClick={() => {
              const memberId = localStorage.getItem('memberId');
              setIsBookmarked(prev => !prev);
              saveBookmarks(memberId, jobItem.jobCd, isBookmarked);
            }}
          />
        </div>
        <p className="mt-3 text-muted text-start">
          {jobItem.jobSum}
        </p>
        <div className="d-flex justify-content-between w-100 mt-1 mb-1">
          <div>
              <span className="fw-bold">평균 연봉</span>
          </div>
          <div>
              <span className="fw-bold text-primary">{jobItem.sal.replaceAll(',', '').split(' ')[5]}</span>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-3 text-muted small mt-3">
         {!uniqueParts.includes('없음') &&
           uniqueParts.slice(0, 5).map((part, idx) => (
             <span
               key={idx}
               className="rounded text-primary fw-bold"
               style={{ backgroundColor: '#d7ddfa', fontSize: '0.80rem', padding: '1px 4px' }}
             >
               {part}
             </span>
           ))
         }
        </div>
      </div>
    </div>
  );
}

export default SearchJobCard