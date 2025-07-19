import React, { useState } from 'react';

const RankList = ({platformTitle,notiTitle,notiCompany}) => {

    return (

    <div className=" w-25 mx-5 px-5">
      <div className="dropdown w-75 rounded"  style={{backgroundColor: '#f3f4f6'}}>
        <button
          className="btn w-100 dropdown-toggle border-0 fw-bold text-start px-3 py-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ fontSize: '1rem', letterSpacing: '-0.5px' }}
        >
          🔥 1위. 유한킴벌리
        </button>

        <ul className="dropdown-menu w-100">
          {[2, 3, 4, 5, 6, 7, 8].map((rank) => (
            <li key={rank}>
              <a
                className="dropdown-item fw-semibold text-dark px-3 py-2"
                href="#"
                style={{
                  fontSize: '0.925rem',
                  borderBottom: '1px solid #ff0000',
                  lineHeight: '1.6',
                }}
              >
                {rank}위. 유한킴벌리
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
    )
}

export default RankList;