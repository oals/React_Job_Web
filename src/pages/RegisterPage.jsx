import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const [birthDate, setBirthDate] = useState('');
  const [mbti, setMbti] = useState('');
  const mbtiOptions = [
    'INTJ','INTP','ENTJ','ENTP',
    'INFJ','INFP','ENFJ','ENFP',
    'ISTJ','ISFJ','ESTJ','ESFJ',
    'ISTP','ISFP','ESTP','ESFP'
  ];


  return (
    <div className="mx-auto d-flex flex-column w-50">
      <div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-start py-5 px-3">
          <div className="card w-100 border border-0">
            <div className="card-body">
              <h2 className="text-center mb-5">회원 가입</h2>

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-start border border-1 w-50 p-4 rounded shadow-sm">
                     <h4 className="fw-bold mb-4">기본 정보</h4>
                     <div className="mb-3">
                         <input
                           type="email"
                           className="form-control rounded-pill bg-light p-3 w-100"
                           placeholder="이메일"
                         />
                    </div>
                      <div className="w-100 d-flex justify-content-between">
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control rounded-pill bg-light p-3 w-100"
                              placeholder="이름"
                            />
                          </div>
                          <div className="mx-3 mb-3">
                            <input
                              type="text"
                              className="form-control rounded-pill bg-light p-3 w-100"
                              placeholder="성"
                            />
                          </div>
                      </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control rounded-pill bg-light p-3 w-100"
                        placeholder="비밀번호"
                      />
                    </div>


                   <div className="mb-3 mt-1">
                     <div className="d-flex gap-2">
                       <input
                         type="text"
                         className="form-control rounded-pill bg-light text-center"
                         placeholder="YYYY"
                         maxLength={4}
                         style={{ width: '30%' }}
                       />
                       <input
                         type="text"
                         className="form-control rounded-pill bg-light text-center"
                         placeholder="MM"
                         maxLength={2}
                         style={{ width: '20%' }}
                       />
                       <input
                         type="text"
                         className="form-control rounded-pill bg-light text-center"
                         placeholder="DD"
                         maxLength={2}
                         style={{ width: '20%' }}
                       />
                     </div>
                   </div>


                </div>

                  <div className="mx-5 d-flex flex-column align-items-start border border-1 w-50 p-4 rounded shadow-sm">
                      <h4 className="fw-bold mb-4">추가 정보</h4>
                      <label htmlFor="mbtiSelect" className="fw-bold text-secondary mb-2">
                        MBTI
                      </label>
                      <select
                        id="mbtiSelect"
                        className="form-select w-100 mb-3"
                        value={mbti}
                        onChange={e => setMbti(e.target.value)}
                      >
                        <option value="">MBTI를 선택하세요</option>
                        {mbtiOptions.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>

                      {/* 선택된 MBTI 표시(선택사항) */}
                      {mbti && (
                        <small className="text-muted">
                          선택된 MBTI: <strong>{mbti}</strong>
                        </small>
                      )}



                      <div className="w-100 d-flex flex-column align-items-start mb-3">
                        <span className="fw-bold text-secondary mb-2 d-block">성별</span>

                        <div
                          className="btn-group w-100"
                          role="group"
                          aria-label="성별 선택"
                        >
                          <input
                            type="radio"
                            className="btn-check"
                            name="gender"
                            id="genderMale"
                            autoComplete="off"
                            defaultChecked
                          />
                          <label
                            className="btn btn-outline-primary flex-grow-1"
                            htmlFor="genderMale"
                          >
                            남성
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="gender"
                            id="genderFemale"
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-primary flex-grow-1"
                            htmlFor="genderFemale"
                          >
                            여성
                          </label>

                          <input
                            type="radio"
                            className="btn-check"
                            name="gender"
                            id="genderOther"
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-primary flex-grow-1"
                            htmlFor="genderOther"
                          >
                            기타
                          </label>
                        </div>
                      </div>


                    </div>
                </div>

                <div className="mt-4 w-100">
                    <button class="w-100 btn btn-primary text-white p-4 fw-bold font-bold rounded-lg hover:bg-indigo-700">
                        <span style={{fontSize: '1.2rem'}}>가입 완료하고 시작하기</span>
                    </button>
                </div>

            </div>




        </div>

      </div>
      </div>
    </div>
  );
};

export default RegisterPage;