
import React from 'react';
import { useState } from 'react';

const JobRecommendationResultPage = () => {

    return (
        <div className="d-flex justify-content-start align-items-center w-100 flex-column w-75">
            <h2>검사 결과</h2>

            <p style={{fontSize: '1.2rem'}}>
              검사 결과를 토대로 당신에게 딱 맞는 커리어 경로를 추천해드립니다.
            </p>

            <div className="d-flex align-items-start mt-4" style={{width: '65%'}}>
                <div className="w-50 d-flex justify-content-end">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                    alt="Software Engineer"
                    className="rounded mb-3 mb-md-0"
                    style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                  />
                </div>
                 <div className="w-50 mx-5 d-flex align-items-start flex-column">
                     <span className="fw-bold" style={{fontSize: '1.2rem'}}>Software Engineer</span>
                     <span className="text-secondary" >asfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasfasf</span>
                 </div>
            </div>

            <div className="d-flex align-items-start mt-5 flex-column" style={{width: '49%'}}>
                <span className="fw-bold" style={{fontSize: '1.4rem'}}>필요 기술 </span>

                <div className="d-flex justify-content-between w-100 mt-3">
                    <div className="border border-1 rounded w-50 p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                          ></path>
                        </svg>
                        <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                    </div>

                      <div className="border border-1 rounded w-50 p-3 mx-3 me-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                              d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                            ></path>
                          </svg>
                          <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                      </div>

                     <div className="border border-1 rounded w-50 p-3">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                           <path
                             d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                           ></path>
                         </svg>
                         <span className="mx-3 text-base font-bold leading-tight">Programming</span>
                     </div>
                </div>



            </div>


        </div>

    );

}

export default JobRecommendationResultPage;