import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CareerNewsCard = ({ item }) => {

  return (
    <div className="col-md-6 col-lg-3">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-dark"
      >
        <div className="card shadow-sm border-0">
          <img
            src={item.urlToImage}
            className="card-img-top"
            alt="People collaborating in a modern office."
            style={{ height: '180px', objectFit: 'cover' }}
          />
          <div className="card-body d-flex flex-column justify-content-start align-items-start">
            <small className="text-muted">{item.author}</small>
            <span
              className="card-title mt-2 text-start mb-2 fw-bold"
              style={{ fontSize: '1.05rem' }}
            >
              {item.title}
            </span>
            <p className="card-text text-start text-secondary">
              {item.description.length > 60
                ? item.description.slice(0, 60) + '...'
                : item.description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CareerNewsCard;
