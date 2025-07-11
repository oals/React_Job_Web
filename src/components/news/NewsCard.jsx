import React, { useState } from 'react';

const NewsCard = ({index}) => {

  return (
      <div className="col-md-4 mb-4" key={index}>
        <div className="card h-100 shadow-sm">
          <img src={`https://picsum.photos/400/200?random=${index}`} className="card-img-top" alt="테스트 이미지" />
          <div className="card-body">
            <h5 className="card-title fw-bold">뉴스 제목 {index + 1}</h5>
            <p className="card-text text-secondary">
              이곳에 뉴스 요약이 들어갑니다. 최신 이슈에 대한 간단한 설명을 보여줍니다.
            </p>
            <a href="#" className="btn btn-outline-primary btn-sm">기사 보기</a>
          </div>
          <div className="card-footer text-muted small">
            출처: 테스트 매체
          </div>
        </div>
      </div>
     )

}

export default NewsCard;