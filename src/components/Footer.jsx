import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">JobX</h5>
            <p className="text-white-50">
              당신의 잠재력을 발견하고<br />성공적인 커리어를 만들어가세요.
            </p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">탐색</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">직업 정보</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">커리어 뉴스</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">커뮤니티</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">고객지원</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">자주 묻는 질문</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">문의하기</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">이용약관</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-top border-secondary mt-5" />
        <div className="text-center text-white-50 pt-3">
          <p>© 2025 JobX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;