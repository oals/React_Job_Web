import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CareerIntroSection = ({ title, linkUrl }) => {

  return (
    <section className="w-100 bg-primary rounded-4 p-5 text-white mt-3 mb-3  d-flex align-items-center justify-content-between">
      <div className="text-start">
        <h2 className="h3 fw-bold mb-3">내게 맞는 커리어, 아직 확신이 없다면?</h2>
        <p className="opacity-75" style={{ maxWidth: '600px' }}>
          간단한 진단을 통해 당신의 성향과 역량에 맞는 커리어 방향성을 탐색해 보세요.
        </p>
      </div>
      <Link to={linkUrl}>
        <button className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill flex-shrink-0">
          {title}
        </button>
      </Link>
    </section>
  );
};

export default CareerIntroSection;
