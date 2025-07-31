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

      }
    }, [jobInfo]);


    if (jobInfo == null)
        return <div>Loading...</div>;

    return (
       <div className="w-75 mx-auto">

        <div className="position-relative mb-5 w-100">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
            alt="소프트웨어 엔지니어"
            className="img-fluid rounded"
            style={{ objectFit: 'cover' }}
          />

          <div
            className="position-absolute bottom-0 start-0 w-100"
            style={{
              height: '60px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
            }}
          ></div>
         <h5
            className="position-absolute bottom-0 start-50 translate-middle-x text-primary fw-bold mb-5 pb-1"
            style={{ zIndex: 2 }}
          >
            {jobInfo.jobLrclNm}
          </h5>
        <h1
          className="position-absolute bottom-0 start-50 translate-middle-x text-white fw-bold fs-2 mb-3"
          style={{ zIndex: 2 }}
        >
          {jobInfo.jobMdclNm}
        </h1>

        </div>
            <div className="w-75 mx-auto">
                   <p className="fs-6 text-secondary mb-5">
                     {jobInfo.way}
                   </p>
            </div>

               <div className="w-50 mx-auto bg-white">
                    <div className="text-center">
                      <h2 className="fw-bold fs-2 text-dark">자격 요건</h2>
                    </div>

                    <div className="row gy-4 mx-auto justify-content-center">


                      <div className="col-md-6">
                        <div className="card border-0 h-100 shadow-sm p-4 rounded-4">
                          <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-mortarboard text-primary fs-2 me-3"></i>
                            <h3 className="fs-4 fw-bold mb-0 text-dark">학과 (우대)</h3>
                          </div>
                       <ul>
                          {uniqueMajorParts.map((part, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                              <i className="bi bi-check-circle-fill text-success me-3"></i>
                              <p className="fw-semibold mb-0">{part}</p>
                            </li>
                          ))}
                        </ul>
                        </div>
                      </div>

                      {/* 자격증 (우대) */}
                      <div className="col-md-6">
                        <div className="card border-0 h-100 shadow-sm p-4 rounded-4">
                          <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-award-fill text-success fs-2 me-3"></i>
                            <h3 className="fs-4 fw-bold mb-0 text-dark">자격증 (우대)</h3>
                          </div>
                         <ul>
                           {uniqueCertParts.map((part, index) => (
                             <li key={index} className="d-flex align-items-start mb-3">
                               <i className="bi bi-check-circle-fill text-success me-3"></i>
                               <p className="fw-semibold mb-0">{part}</p>
                             </li>
                           ))}
                         </ul>

                        </div>
                      </div>

                    </div>
                  </div>



            <div className="container bg-white py-5">
              <div className="text-center mb-5">
                <h2 className="fw-bold fs-2 text-dark">평균 연봉</h2>
                <p className="fs-5 text-muted">경력과 기술 스택에 따라 연봉은 달라질 수 있습니다.</p>
              </div>

              <div className="row justify-content-center gy-4">

                {/* 신입 */}
                <div className="col-md-4 shadow">
                  <div className="card bg-light h-100 text-center p-4 border-0 rounded-4 shadow-sm">
                    <h3 className="fs-4 fw-bold text-dark mb-2">{jobInfo.sal.replaceAll(',', '').split(' ')[2]}</h3>
                    <p className="fs-2 fw-bold text-primary mb-0">₩ {jobInfo.sal.replaceAll(',', '').split(' ')[3]}만</p>
                    <p className="text-muted mt-2">이상</p>
                  </div>
                </div>

                {/* 중급 */}
                <div className="col-md-4 shadow">
                  <div className="card bg-primary h-100 text-center text-white p-4 border-0 rounded-4 shadow">
                    <h3 className="fs-4 fw-bold mb-2">{jobInfo.sal.replaceAll(',', '').split(' ')[4]}</h3>
                    <p className="fs-2 fw-bold mb-0">₩ {jobInfo.sal.replaceAll(',', '').split(' ')[5]}</p>
                    <p className="text-light mt-2">이상</p>
                  </div>
                </div>

                {/* 고급 */}
                <div className="col-md-4 shadow">
                  <div className="card bg-light h-100 text-center p-4 border-0 rounded-4 shadow-sm">
                    <h3 className="fs-4 fw-bold text-dark mb-2">{jobInfo.sal.replaceAll(',', '').split(' ')[6]}</h3>
                    <p className="fs-2 fw-bold text-primary mb-0">₩ {jobInfo.sal.replaceAll(',', '').split(' ')[7]}</p>
                    <p className="text-muted mt-2">이상</p>
                  </div>
                </div>

              </div>
            </div>

           <div className="d-flex mt-5 flex-column w-100 pt-0 p-5">
            <h2 className="fw-bold fs-2 text-dark">일자리 전망</h2>
            <section className="mt-4 w-100">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">

                {uniqueJobActvImprtncsParts.map((part, index) => (
                  <div
                    className={`col-md-3 shadow p-5 h-100 border-0 rounded-4 shadow card ${
                      index === 0 ? 'bg-primary text-light' : 'bg-light text-dark'
                    }`}
                    key={index}
                  >
                    <h3 className="fs-4 fw-bold p-4">{part}</h3>
                  </div>
                ))}

              </div>
            </section>
            </div>




          </div>


    );
}

export default JobInfoPage;