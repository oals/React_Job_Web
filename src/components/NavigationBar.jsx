import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const NavigationBar = () => {

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ccc',
      }}
    >
     <div className="w-75 mx-auto d-flex justify-content-between align-items-center">
         <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-list m-4" style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => alert('햄버거 클릭')} />
              <div>
                  <Link to="/" className="me-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0">
                     채용정보
                   </Link>
                   <Link to="/" className="me-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0">
                     취업축하금
                   </Link>
                   <Link to="/" className="me-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0">
                     합격전략
                   </Link>
                   <Link to="/" className="me-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0">
                     기업*연봉
                   </Link>
              </div>
         </div>
         <div>
             <span className="ms-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0"> 로그인 </span>
             <span className="ms-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0"> 히원가입 </span>
         </div>
      </div>
    </nav>
  );
};

export default NavigationBar;