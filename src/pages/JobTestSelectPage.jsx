import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import JobTestCard from '../components/test/JobTestCard';

const JobTestSelectPage = () => {

  return (
    <div className="w-100 d-flex mx-auto flex-column mt-2">
      <div className="w-75 bg-primary p-5 rounded mx-auto">
        <h1 className="md:text-6xl font-extrabold leading-tight text-light">나를 찾아 떠나는 여행</h1>
        <p className="text-xl max-w-3xl mx-auto mt-3 text-light">자신을 더 깊이 이해하고, 진로를 탐색하는 여정을 JobX와 함께 시작해보세요.</p>
      </div>
      <div className="row g-4 mt-3 w-75 mx-auto mt-5">
        <JobTestCard
          title={"직업 가치관 검사"}
          info={"직업과 관련된 다양한 가치 중 어떤 것을 중요하게 여기는지 알아보세요."}
          descriptions={["맞는 직업을 찾고 싶은 분", "이직을 고민하고 있는 분", "진로 선택이 어려우신 분"]}
          icon={"bi bi-briefcase"}
          linkUrl={"/jobrecommendationtest?testId=1"}
          color={"primary"}
        />
        <JobTestCard
          title={"직업 흥미 검사"}
          info={"어떤 일에 흥미를 느끼는지 파악해 나에게 맞는 직업을 탐색해보세요."}
          descriptions={["나의 흥미 유형과 특징 ", "흥미에 맞는 추천 직업", "관련 학과 및 자격 정보"]}
          icon={"bi bi-compass"}
          linkUrl={"/jobrecommendationtest?testId=2"}
          color={"success"}
        />
        <JobTestCard
          title={"진로 심리 검사"}
          info={"자신의 성격, 가치관을 종합적으로 분석해 진로 결정에 도움을 받으세요."}
          descriptions={["종합적인 자기 이해", "진로 장벽 및 갈등 해결", "체계적인 진로 계획 수립"]}
          icon={"bi bi-person-bounding-box"}
          linkUrl={"/jobrecommendationtest?testId=3"}
          color={"dark"}
        />
      </div>
    </div>
  );
}

export default JobTestSelectPage;