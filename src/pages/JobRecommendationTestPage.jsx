
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const JobRecommendationTestPage = () => {

  const options = ["Daily", "Weekly", "Monthly", "Rarely", "Never"];
  const [selected, setSelected] = useState(options[0]);


    return (
           <div
               className="d-flex flex-column">
               <div className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
                 <div className="card" style={{ width: '1024px' }}>
                   <div className="card-body">

                     <div className="mb-4">
                       <div className="d-flex justify-content-between mb-1">
                         <small>1 of 5</small>
                       </div>
                       <div className="progress">
                         <div
                           className="progress-bar"
                           role="progressbar"
                           style={{ width: '20%' }}
                         />
                       </div>
                     </div>


                     <h3 className="h5 mb-4">How often do you use our product?</h3>

                    <form>
                        {options.map((label, idx) => (
                          <div
                            key={idx}
                            className={`
                              form-check border rounded p-3 mb-3
                              ${selected === label
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-dark'}
                            `}
                            onClick={() => setSelected(label)}
                          >
                            <input
                              type="radio"
                              name="usageFrequency"
                              id={`freq-${idx}`}
                              className="form-check-input visually-hidden"
                              checked={selected === label}
                              onChange={() => setSelected(label)}
                            />
                            <label
                              className="form-check-label ms-2"
                              htmlFor={`freq-${idx}`}
                            >
                              {label}
                            </label>
                          </div>
                        ))}

                       <div className="text-end">
                         <button type="button" className="btn btn-primary">
                           다음
                         </button>
                         <Link to="/JobRecommendationResultPage">
                          <button type="button" className="btn btn-primary mx-2">
                            완료
                          </button>
                          </Link>


                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>

    );
}

export default JobRecommendationTestPage;