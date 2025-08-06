import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchJobInfo } from '../utils/api';



const JobInfoPage = () => {

    const jobCd = new URLSearchParams(useLocation().search).get('jobCd');
    const [jobInfo, setJobInfo] = useState(null)
    const [uniqueCertParts, setUniqueCertParts] = useState([]);
    const [uniqueMajorParts, setUniqueMajorParts] = useState([]);
    const [uniqueJobActvImprtncsParts, setUniqueJobActvImprtncsParts] = useState([]);
    const [uniqueJobSalParts, setUniqueJobSalParts] = useState([]);
    const [uniqueJobAbilParts, setUniqueJobAbilParts] = useState([]);
    const [uniqueJobKnowldgParts, setUniqueJobKnowldgParts] = useState([]);
    const [uniqueJobEnvParts, setUniqueJobEnvParts] = useState([]);
    const [uniqueJobChrParts, setUniqueJobChrParts] = useState([]);
    const [uniqueJobIntrstParts, setUniqueJobIntrstParts] = useState([]);
    const [uniqueJobValsParts, setUniqueJobValsParts] = useState([]);

    useEffect(() => {
        const searchData = async () => {
          try {
            const response = await searchJobInfo(jobCd);
            const data = await response.json();
            console.log(data['jobInfo'])
            setJobInfo(data['jobInfo'])

          } catch (error) {
            console.error('검색 중 오류:', error);
          }
        };

        if (jobCd) {
          searchData();
        }
    }, [jobCd]);


    useEffect(() => {
      if (jobInfo?.certNm) {
        const parts = jobInfo.certNm.split(/[\/,]/).map(s => s.trim());
        const unique = [...new Set(parts)];
        setUniqueCertParts(unique);

        const parts2 = jobInfo.majorNm.split(/[\/,]/).map(s => s.trim());
        const unique2 = [...new Set(parts2)];
        setUniqueMajorParts(unique2);

        const parts3 = jobInfo.jobProspect.split(/[ ]/).map(s => s.trim());
        const unique3 = [...new Set(parts3)];
        setUniqueJobActvImprtncsParts(unique3);

        const unique4 = [...jobInfo.sal.matchAll(/(\d+)(?=만원)/g)].map(match => Number(match[1]));
        setUniqueJobSalParts(unique4)

        const parts5 = jobInfo.jobAbil.split(/[/]/).map(s => s.trim());
        const unique5 = [...new Set(parts5)];
        setUniqueJobAbilParts(unique5)

        const parts6 = jobInfo.knowldg.split(/[/]/).map(s => s.trim());
        const unique6 = [...new Set(parts6)];
        setUniqueJobKnowldgParts(unique6)

        const parts7 = jobInfo.jobEnv.split(/[/]/).map(s => s.trim());
        const unique7 = [...new Set(parts7)];
        setUniqueJobEnvParts(unique7)

        const parts8 = jobInfo.jobChr.split(/[/]/).map(s => s.trim());
        const unique8 = [...new Set(parts8)];
        setUniqueJobChrParts(unique8)

        const parts9 = jobInfo.jobIntrst.split(/[/]/).map(s => s.trim());
        const unique9 = [...new Set(parts9)];
        setUniqueJobIntrstParts(unique9)

        const parts10 = jobInfo.jobVals.split(/[/]/).map(s => s.trim());
        const unique10 = [...new Set(parts10)];
        setUniqueJobValsParts(unique10)



      }
    }, [jobInfo]);


    if (jobInfo == null)
        return <div>Loading...</div>;

    return (
       <div className=" w-100 ">

      <div className=" rounded-4 shadow-lg overflow-hidden">

            <div className="bg-light position-relative" style={{ height: '15rem' }}>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.05), transparent)',
                  zIndex: 1,
                }}
              ></div>
              <div
                className="position-absolute  start-50 translate-middle-x"
                style={{ bottom: '1px' }}
              >
                <div className="d-flex flex-column pb-4 px-4 text-center mt-5 w-100">
                    <p className="text-primary fw-semibold">{jobInfo.jobLrclNm}</p>
                    <h1 className="display-5 fw-bold text-dark">{jobInfo.jobMdclNm}</h1>
                    <p className="text-muted mt-3 fw-bold">
                    {jobInfo.jobSum}
                    </p>
                  </div>
              </div>
            </div>



            <div className="border-top border-secondary-subtle px-4 py-5">
              <div className="w-75 d-flex align-items-end flex-column text-start">

                <div className="mb-5 w-75 ">
                  <h2 className="h4 fw-bold text-dark mb-3">
                    <i className="bi bi-mortarboard-fill text-primary me-2"></i>되는 길
                  </h2>
                  <p className="text-muted text-secondary">
                     {jobInfo.way}
                  </p>

                </div>


                <div className="row mb-5 text-start" style={{width: '76%'}}>
                  <div className="col-md-6 mb-4">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-mortarboard-fill  text-success me-2"></i>관련 학과
                    </h3>
                    <ul className="list-unstyled text-muted fw-bold">
                        {uniqueMajorParts.map((part, index) => (
                            <li key={index}><i className="bi bi-check2-circle me-2 text-success"></i>{part}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3 className="h5 fw-bold text-dark mb-3">
                      <i className="bi bi-file-earmark-check-fill text-success me-2"></i>관련 자격증
                    </h3>
                    <ul className="list-unstyled text-muted fw-bold">
                    {uniqueMajorParts.map((part, index) => (
                         <li key={index}><i className="bi bi-check2-circle me-2 text-success"></i>{part}</li>
                     ))}
                    </ul>
                  </div>
                </div>


                <div className="text-center w-75 mb-5 ">
                  <h2 className="h4 fw-bold text-dark mb-3">평균 연봉</h2>
                  <p className="text-muted">경력과 기술 스택에 따라 연봉은 달라질 수 있습니다.</p>
                  <div className="row justify-content-center">
                     {uniqueJobSalParts.map((part, index) => (
                       <div className="col-sm-4 mb-3" key={index}>
                         <div
                           className={
                             index === 1
                               ? "border border-1 p-4 rounded-3 bg-primary"
                               : "bg-light border border-1 p-4 rounded-3"
                           }
                         >
                           <span
                             className={
                               index === 1
                                 ? "small text-light"
                                 : "small text-muted"
                             }
                           >
                             {index === 0
                               ? "하위(25%)"
                               : index === 1
                               ? "평균(50%)"
                               : index === 2
                               ? "상위(25%)"
                               : ""}
                           </span>

                           <h3 className={index === 1 ? "fw-bold text-light" : "fw-bold"}>
                             ₩ {part}만원
                           </h3>
                         </div>
                       </div>
                     ))}



                  </div>
                </div>


                <div className="text-center w-75 mb-5">
                  <h2 className="h4 fw-bold text-dark mb-4">일자리 전망</h2>
                  <div className="row">


                    {uniqueJobActvImprtncsParts.map((part, index) => (
                     <div className="col-sm-4 mb-3" key={index}>
                         <div className={`border p-4 rounded-3 ${
                                  index === 0
                                    ? 'text-primary'
                                    : index === 1
                                    ? 'text-secondary'
                                    : index === 2
                                    ? 'text-danger'
                                    : ''
                                }`}
                         style={{
                             backgroundColor:
                               index === 0
                                 ? '#e0f2ff'
                                 : index === 1
                                 ? '#f0f0f0'
                                 : index === 2
                                 ? '#ffe4e1'
                                 : '#ffffff'
                           }}>
                           <p className="fw-semibold">{part.split('(')[0]}</p>
                           <h3 className="fw-bold">{part.split('(')[1].replace(')','')}</h3>
                         </div>
                      </div>
                    ))}

                  </div>
                   <div className="container my-5 mt-5">

                        <div className="row g-4">

                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">필요 능력</h4>
                              <ul className="list-unstyled small text-muted">

                                 {uniqueJobAbilParts.map((part, index) => (
                                   <li className="d-flex justify-content-between mb-2" key={index}>
                                     <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                     <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                   </li>
                                 ))}

                              </ul>
                            </div>
                          </div>


                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">필요 지식</h4>
                              <ul className="list-unstyled small text-muted">
                                   {uniqueJobKnowldgParts.map((part, index) => (
                                     <li className="d-flex justify-content-between mb-2" key={index}>
                                       <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                       <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                     </li>
                                   ))}
                              </ul>
                            </div>
                          </div>


                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">업무 환경</h4>
                              <ul className="list-unstyled small text-muted">
                               {uniqueJobEnvParts.map((part, index) => (
                                  <li className="d-flex justify-content-between mb-2" key={index}>
                                    <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                    <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">성격</h4>
                              <ul className="list-unstyled small text-muted">
                              {uniqueJobChrParts.map((part, index) => (
                                 <li className="d-flex justify-content-between mb-2" key={index}>
                                   <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                   <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                 </li>
                               ))}
                              </ul>
                            </div>
                          </div>




                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">흥미</h4>
                              <ul className="list-unstyled small text-muted">
                               {uniqueJobIntrstParts.map((part, index) => (
                                 <li className="d-flex justify-content-between mb-2" key={index}>
                                   <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                   <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                 </li>
                               ))}
                              </ul>
                            </div>
                          </div>



                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="bg-light p-4 rounded">
                              <h4 className="fw-bold text-dark mb-4">가치관</h4>
                              <ul className="list-unstyled small text-muted">
                               {uniqueJobValsParts.map((part, index) => (
                                 <li className="d-flex justify-content-between mb-2" key={index}>
                                   <span>{part.match(/^(.+?)\(/)?.[1] || part}</span>
                                   <span className="fw-bold">{part.match(/\((\d+)\)/)?.[1] || ''}</span>
                                 </li>
                               ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  </div>
                  </div>
                  </div>



          </div>


    );
}

export default JobInfoPage;