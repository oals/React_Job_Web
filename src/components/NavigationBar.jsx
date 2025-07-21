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
                     홈
                  </Link>
                  <Link to="/" className="me-4 fw-bold link-offset-2 link-underline text-dark link-underline-opacity-0">
                     커뮤니티
                  </Link>
              </div>
         </div>
         <div>
             <Link to="/login" className="me-4 link-offset-2 link-underline link-underline-opacity-0">
                <span className="ms-4 fw-semibold link-offset-2 link-underline text-dark link-underline-opacity-0"> 로그인 </span>
             </Link>
              <Link to="/register" className="me-4 link-offset-2 link-underline link-underline-opacity-0">
                <span className="ms-4 fw-semibold link-offset-2 link-underline text-dark link-underline-opacity-0"> 회원가입 </span>
             </Link>
         </div>
      </div>
    </nav>
  );
};

export default NavigationBar;