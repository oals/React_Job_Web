import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JobTestCard = ({
  title,
  info,
  descriptions = [],
  icon,
  linkUrl,
  color,
}) => {

  return (
    <div className="rounded mx-2" style={{ width: '32%' }}>
      <div className="card h-100 shadow border border-0 px-3">
        <div className="card-body d-flex justify-content-start align-items-start flex-column">
          <div className="d-flex align-items-center mb-3">
            <div className="bg-light bg-opacity-10 p-2 rounded-circle me-2">
              <i className={`${icon} fs-4 text-${color}`}></i>
            </div>
            <h5 className="card-title mb-0 fw-semibold">{title}</h5>
          </div>
          <span className="card-text mb-3 text-secondary text-start" style={{ marginLeft: 0, paddingLeft: 0 }}>
            {info}
          </span>
          {descriptions.length > 0 && (
            <>
              <h6 className="fw-bold">이런 분들께 추천해요!</h6>
              <ul className="list-unstyled mb-4 d-flex flex-column justify-content-start align-items-start">
                {descriptions.map((desc, idx) => (
                  <li key={idx} className="mb-2">
                    <i className={`bi bi-check-circle-fill text-${color} me-2`}></i>
                    <span className="text-secondary" style={{ fontSize: '0.90rem' }}>
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="w-100 mt-auto text-center d-flex flex-column">
            <small className="text-muted d-block mb-2 text-start">예상 소요 시간: 15-25분</small>
            <Link to={linkUrl} className="mt-2">
              <span className={`w-100 btn btn-${color} p-2`}>검사 시작하기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTestCard;
