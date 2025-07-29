import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchJobCardItem = ({jobItem}) => {

    const parts = jobItem.certNm.split(/[\/,]/);
    const uniqueParts = [...new Set(parts)];

    return (
         <div className="card shadow-sm p-3 pt-2 pb-2">
           <div className="card-body">
             <div className="d-flex justify-content-between">
               <div className="d-flex flex-column">
                   <Link to={`/jobInfo?jobCd=${jobItem.jobCd}`} className="me-4 link-offset-2 link-underline text-secondary link-underline-opacity-0">
                       <span className="h5 d-block text-decoration-none text-start text-dark">{jobItem.jobSmclNm}</span>
                   </Link>
                 <small className="text-muted text-start">{jobItem.jobLrclNm}</small>
               </div>
                <i className="bi bi-bookmark fs-4 text-secondary"></i>
             </div>
             <p className="mt-3 text-muted text-start">
               {jobItem.jobSum}
             </p>
             <div className="d-flex flex-wrap gap-3 text-muted small mt-1">
               <span>평균 연봉: {jobItem.sal.replaceAll(',', '').split(' ')[5]}</span>
             </div>
              <div className="d-flex flex-wrap gap-3 text-muted small mt-1">
                  <span>자격증: {uniqueParts.slice(0, 5)} ...</span>
              </div>
           </div>
         </div>

    );

}

export default SearchJobCardItem