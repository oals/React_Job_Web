import React, { useState } from 'react';

const NotiCard = ({platformTitle,notiTitle,notiCompany}) => {

    return (
     <div className="col-md-4">
       <div className="card h-100">
            <span className="badge w-25 text-bg-secondary  d-flex justify-content-center">{platformTitle}</span>
         <div className="card-body">
           <h5 className="card-title fw-semibold fs-6 text-dark">{notiCompany}</h5>
           <p className="card-text fw-semibold fs-6 text-dark">{notiTitle}</p>
           <p className="card-text fw-semibold fs-6 text-secondary">{notiCompany}</p>
         </div>
       </div>
     </div>
    )
}

export default NotiCard;