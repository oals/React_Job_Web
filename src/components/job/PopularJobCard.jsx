import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PopularJobCard = ({ item }) => {

  return (
    <div
      className="card h-75 shadow border-0 mx-2"
      style={{ width: '32%' }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center p-3">
        <div
          className="ms-md-3 d-flex flex-column justify-content-between text-center text-md-start w-100"
          style={{ height: '150px' }}
        >
          <div>
            <span className="badge bg-primary mb-2">{item.jobLrclNm}</span>
            <h5 className="card-title">{item.jobMdclNm}</h5>
            <p
              className="card-text text-muted"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                minHeight: '72px',
              }}
            >
              {item.jobSum}
            </p>
          </div>
          <div className="mt-2 d-flex justify-content-between align-items-center">
            <span className="small text-secondary">
              <span className="text-primary">{item.bookmarkCount}</span> 명의 관심 직업
            </span>
            <Link
              to={`/jobInfo?jobCd=${item.jobCd}`}
              className="btn btn-sm btn-primary w-25 rounded p-2"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularJobCard;