import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setIsLogin}) => {

    const navigate = useNavigate();
    const [memberEmail, setMemberEmail] = useState('');
    const [memberPassword, setMemberPassword] = useState('');

    const memberLogin = async () => {

       const loginData = {
         memberEmail: memberEmail,
         memberPassword: memberPassword
       };

       try {
         const res = await login(loginData);

         if (res.status === 200) {
             alert('로그인이 완료 되었습니다.')
             localStorage.setItem('isLogin', "true");
             localStorage.setItem('memberEmail', memberEmail);
             setIsLogin(true)
             navigate('/');

         } else {
             alert('잠시 후 다시 시도해주세요.')
         }

       } catch (error) {
         console.error('실패:', error);
       }
     };



    return (

        <div className=" mx-auto flex-column border border-1 rounded shadow-lg p-4 mt-5" style={{width: '30%'}}>
            <span className="fw-bold tracking-light font-bold leading-tight px-4 text-center pb-3 pt-5" style={{fontSize: '2.0rem'}}>Welcome back</span>

            <div className="d-flex flex-column justify-content-start align-items-start w-100 mt-5">
                <span className="fw-semibold" style={{fontSize: '1.1rem'}}>이메일</span>
                <div className="w-100 mt-3">
                  <input
                    type="text"
                    className="form-control border border-1 rounded-lg p-3"
                    placeholder="Email"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value={memberEmail}
                    onChange={(e) => setMemberEmail(e.target.value)}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      borderRadius: "1.0rem",
                    }}
                  />
                </div>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start w-100 mt-4">
                <span className="fw-semibold" style={{fontSize: '1.1rem'}}>비밀번호</span>
                <div className="w-100 mt-3">
                  <input
                    type="text"
                    className="form-control border border-1 rounded-lg p-3"
                    placeholder="비밀번호"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value={memberPassword}
                    onChange={(e) => setMemberPassword(e.target.value)}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      borderRadius: "1.0rem",
                    }}
                  />
                </div>
            </div>

            <div className="d-flex justify-content-end align-items-end mt-3">
                <span className="fw-bold text-primary" style={{fontSize: '0.9rem'}}>비밀번호를 잊어버리셨나요?</span>
            </div>

            <div className="d-flex mt-3">
               <button onClick={memberLogin} className="btn btn-primary w-100 fw-bold rounded-fill p-2" style={{fontSize: '1.0rem'}}> 로그인 </button>
            </div>

            <div className="mt-3">
              <span className="text-secondary">계정이 없으신가요?</span> <a href="#" className="link-primary"> 가입하기</a>
            </div>


        </div>


    );
}

export default LoginPage;
