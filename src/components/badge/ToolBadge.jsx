import React, { useState } from 'react';

const ToolBadge = ({badgeText, iconClass}) => {

    return (
          <span className="border rounded-pill bg-light p-2 mx-2 fw-bold d-flex flex-column align-items-center" style={{ fontSize: '0.725rem', width: '100px' }}>
             <i className={`${iconClass} mb-1 text-success`} style={{ fontSize: '1.2rem' }}></i>
             <span>{badgeText}</span>
           </span>
    )

}


export default ToolBadge;