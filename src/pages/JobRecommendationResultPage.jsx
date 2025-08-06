
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { insertJobQuestion } from '../utils/api'
import { Link } from 'react-router-dom';
const JobRecommendationResultPage = () => {

  const [loading, setLoading] = useState(false);
  const [jobData, setJobData] = useState(null)
  const location = useLocation();
  const result = location.state?.result;
  const testType = location.state?.testType;

  useEffect(() => {

    const insertData = async () => {
      try {
        setLoading(true);
        const memberEmail = localStorage.getItem('memberEmail');
        const response = await insertJobQuestion(result, memberEmail, testType);
        const data = await response.text();

        const onlyValues = data
          .trim()
          .split('\n')
          .map(line => line.split(':')[1]?.trim())
          .filter(Boolean);

        setJobData(onlyValues)

      } catch (error) {
        console.error('검색 중 오류:', error);
      } finally {
          setLoading(false);
      }
    };

    if (result) {
      insertData();
    }
  }, []);


  return (
    <div className="d-flex justify-content-start align-items-center w-100 flex-column">

      {!jobData ? (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1050 }}
        >
          <div className="spinner-border text-secondary" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="mt-4 text-white fw-bold fs-5">
            직업을 추천받는 중입니다...
          </div>
        </div>
      ) : (
        <>
          <h2 className="fw-bold">검사 결과</h2>

          <p className="text-secondary" style={{ fontSize: '1.2rem' }}>
            검사 결과를 토대로 당신에게 딱 맞는 커리어 경로를 추천해드립니다.
          </p>

          <div className="d-flex align-items-start" style={{ width: '90%' }}>

             <div className="w-50 d-flex justify-content-end align-items-start me-3">
                 <i className={`${jobData[7]} p-0 m-0 me-5 mb-5`} style={{ fontSize: '13rem' }}></i>
             </div>

            <div className="w-100 mx-5 d-flex text-start align-items-start flex-column mt-5">
              <span className="text-secondary fw-bold" style={{ fontSize: '1.0rem' }}>{jobData[1]}</span>
              <span className="fw-bold" style={{ fontSize: '1.5rem' }}>{jobData[0]}</span>
              <p className="text-secondary leading-relaxed mt-3 text-wrap text-break w-75" style={{ fontSize: '1.2rem' }}>
                {jobData[2]}
              </p>

                <div className="d-flex justify-content-between align-items-end w-100 mt-5">
                  <div className="d-flex flex-column w-25 mt-5">
                         <span className="text-dark fw-bold">
                              평균 연봉
                          </span>
                          <span className="text-dark fw-bold leading-relaxed"  style={{fontSize: '1.3rem'}}>
                            {jobData[3]}
                         </span>
                   </div>

                   <div className="d-flex flex-column w-25  mx-5">
                         <span className="text-dark fw-bold">
                              필요 역량
                          </span>
                          <span className="text-secondary fw-bold leading-relaxed">
                            {jobData[4]}
                         </span>
                   </div>

                   <div className="d-flex flex-column w-25 ">
                         <span className="text-dark fw-bold">
                              연령대
                          </span>
                          <span className="text-secondary fw-bold leading-relaxed">
                            {jobData[5]}
                         </span>
                   </div>

                   <div className="d-flex w-25 flex-column mx-5">
                         <span className="text-dark fw-bold">
                              직업 전망
                          </span>
                         <span
                           className={`leading-relaxed fw-bold ${
                             jobData[6] === '밝음'
                               ? 'text-success'
                               : jobData[6] === '보통'
                               ? 'text-secondary'
                               : 'text-danger'
                           }`}
                         >
                           {jobData[6]}
                         </span>

                   </div>
                </div>

            </div>
          </div>

          <div className="row g-4 w-75 mt-2">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm hover-shadow-lg transition-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-mortarboard-fill text-primary fs-4 me-3"></i>
                  <h3 className="h5 fw-bold text-dark mb-0">학과 (우대)</h3>
                </div>
                <div className="d-grid gap-2">
                     {jobData[8].split(',').map((part, index) => (
                          <div key={index} className="bg-light border border-1 shadow-sm p-3 rounded text-dark fw-semibold">{part}</div>
                     ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm hover-shadow-lg transition-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-card-checklist text-primary fs-4 me-3"></i>
                  <h3 className="h5 fw-bold text-dark mb-0">자격증 (우대)</h3>
                </div>
                <div className="d-grid gap-2">
                {jobData[9].split(',').map((part, index) => (
                      <div key={index} className="bg-light border border-1 shadow-sm p-3 rounded text-dark fw-semibold">{part}</div>
                 ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm hover-shadow-lg transition-shadow h-100">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-tools text-primary fs-4 me-3"></i>
                  <h3 className="h5 fw-bold text-dark mb-0">필요 기술</h3>
                </div>
                <div className="d-grid gap-2">
                  <div className="bg-light border border-1 shadow-sm p-3 rounded text-dark fw-semibold">{jobData[10]}</div>
                  <div className="bg-light border border-1 shadow-sm p-3 rounded text-dark fw-semibold">{jobData[11]}</div>
                  <div className="bg-light border border-1 shadow-sm p-3 rounded text-dark fw-semibold">{jobData[12]}</div>
                </div>
              </div>
            </div>

            <div>
                  <section className="w-100 bg-primary rounded-4 p-5 text-white mt-3 mb-3  d-flex align-items-center justify-content-between">
                    <div className="text-start">
                      <h2 className="h3 fw-bold mb-3">내게 맞는 커리어, 아직 확신이 없다면?</h2>
                      <p className="opacity-75" style={{ maxWidth: '600px' }}>
                        간단한 진단을 통해 당신의 성향과 역량에 맞는 커리어 방향성을 탐색해 보세요.
                      </p>
                    </div>

                       <Link to='/jobtestselect'>
                            <button className="btn btn-light text-primary fw-bold px-4 py-2 rounded-pill flex-shrink-0">
                              커리어 진단 다시하기
                            </button>
                          </Link>

                  </section>
             </div>

          </div>


        </>
      )}
    </div>
  );
};


export default JobRecommendationResultPage;