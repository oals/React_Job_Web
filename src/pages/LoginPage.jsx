import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    return (

        <div className=" mx-auto flex-column" style={{width: '40%'}}>
            <span class="fw-bold tracking-light font-bold leading-tight px-4 text-center pb-3 pt-5" style={{fontSize: '2.0rem'}}>Welcome back</span>

            <div className="d-flex flex-column justify-content-start align-items-start w-50 mt-5">
                <span className="fw-semibold" style={{fontSize: '1.1rem'}}>이메일</span>
                <div className="w-100 mt-3">
                  <input
                    type="text"
                    className="form-control border border-1 rounded-lg p-3"
                    placeholder="Email"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      borderRadius: "1.0rem",
                    }}
                  />
                </div>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-50 mt-4">
                <span className="fw-semibold" style={{fontSize: '1.1rem'}}>비밀번호</span>
                <div className="w-100 mt-3">
                  <input
                    type="text"
                    className="form-control border border-1 rounded-lg p-3"
                    placeholder="비밀번호"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      borderRadius: "1.0rem",
                    }}
                  />
                </div>
            </div>

            <div className="d-flex mt-3">
                <span className="fw-bold text-primary" style={{fontSize: '0.9rem'}}>비밀번호를 잊어버리셨나요?</span>
            </div>

            <div className="d-flex mt-3">
               <button className="btn btn-primary w-100 fw-bold rounded-fill p-3" style={{fontSize: '1.2rem'}}> 로그인 </button>
            </div>

            <div className="mt-3">
               <a href="#" className="link-primary p-3"> 계정이 없으신가요? 가입하기</a>
            </div>


        </div>


    );
}

export default LoginPage;
