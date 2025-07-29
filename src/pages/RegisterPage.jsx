import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const navigate = useNavigate();

  const [memberFirstName, setMemberFirstName] = useState('');
  const [memberSecondName, setMemberSecondName] = useState('');
  const [memberEmail, setMemberEmail] = useState('');
  const [memberPassword, setMemberPassword] = useState('');
  const [memberGender, setMemberGender] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [memberMbti, setMemberMbti] = useState('');

  const mbtiOptions = [
    'INTJ','INTP','ENTJ','ENTP',
    'INFJ','INFP','ENFJ','ENFP',
    'ISTJ','ISFJ','ESTJ','ESFJ',
    'ISTP','ISFP','ESTP','ESFP'
  ];

  const memberRegister = async () => {

    const registerData = {
      memberName: memberFirstName + memberSecondName,
      memberEmail: memberEmail,
      memberPassword: memberPassword,
      memberGender: memberGender,
      memberBirth: birthYear + "-" + birthMonth + "-" + birthDay,
      memberMbti: memberMbti,
    };

      try {
        const res = await register(registerData);

        if (res.status === 200) {
            alert('회원가입이 완료 되었습니다.')
            navigate('/login');
        } else {
            alert('잠시 후 다시 시도해주세요.')
        }

      } catch (error) {
        console.error('실패:', error);
      }
    };


  return (
    <div className="mx-auto d-flex flex-column w-50">
      <div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-start py-5 px-3">
          <div className="card w-100 border border-0">
            <div className="card-body">
              <h2 className="text-center mb-5 fw-bold">회원 가입</h2>

                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-start border border-0 shadow w-50 p-4 rounded">
                     <h4 className="fw-bold mb-4">기본 정보</h4>
                     <div className="mb-3">
                        <input
                          type="email"
                          className="form-control rounded-pill bg-light p-3 w-100"
                          placeholder="이메일"
                          value={memberEmail}
                          onChange={(e) => setMemberEmail(e.target.value)}
                        />
                    </div>
                      <div className="w-100 d-flex justify-content-between">
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control rounded-pill bg-light p-3 w-100"
                              placeholder="이름"
                              value={memberSecondName}
                              onChange={(e) => setMemberSecondName(e.target.value)}
                            />
                          </div>
                          <div className="mx-3 mb-3">
                            <input
                              type="text"
                              className="form-control rounded-pill bg-light p-3 w-100"
                              placeholder="성"
                              value={memberFirstName}
                              onChange={(e) => setMemberFirstName(e.target.value)}
                            />
                          </div>
                      </div>

                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control rounded-pill bg-light p-3 w-100"
                        placeholder="비밀번호"
                        value={memberPassword}
                        onChange={(e) => setMemberPassword(e.target.value)}
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
                         value={birthYear}
                         onChange={(e) => setBirthYear(e.target.value)}
                       />
                       <input
                         type="text"
                         className="form-control rounded-pill bg-light text-center"
                         placeholder="MM"
                         maxLength={2}
                         style={{ width: '20%' }}
                         value={birthMonth}
                         onChange={(e) => setBirthMonth(e.target.value)}
                       />
                       <input
                         type="text"
                         className="form-control rounded-pill bg-light text-center"
                         placeholder="DD"
                         maxLength={2}
                         style={{ width: '20%' }}
                         value={birthDay}
                         onChange={(e) => setBirthDay(e.target.value)}
                       />
                     </div>
                   </div>


                </div>

                  <div className="mx-5 d-flex flex-column align-items-start border border-0 w-50 p-4 rounded shadow">
                      <h4 className="fw-bold mb-4">추가 정보</h4>
                      <label htmlFor="mbtiSelect" className="fw-bold text-secondary mb-2">
                        MBTI
                      </label>
                      <select
                        id="mbtiSelect"
                        className="form-select w-100 mb-3"
                        value={memberMbti}
                        onChange={e => setMemberMbti(e.target.value)}
                      >
                        <option value="">MBTI를 선택하세요</option>
                        {mbtiOptions.map(type => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>

                      {/* 선택된 MBTI 표시(선택사항) */}
                      {memberMbti && (
                        <small className="text-muted">
                          선택된 MBTI: <strong>{memberMbti}</strong>
                        </small>
                      )}



                      <div className="w-100 d-flex flex-column align-items-start mb-3 mt-3">
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
                            value={"M"}
                            onChange={(e) => setMemberGender(e.target.value)}
                          />
                          <label
                            className="btn btn-outline-primary gender-label flex-grow-1 p-3 me-2 border border-0"
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
                            value={"F"}
                            onChange={(e) => setMemberGender(e.target.value)}
                          />
                          <label
                            className="btn btn-outline-primary gender-label flex-grow-1 p-3 border border-0"
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
                            value={"None"}
                            onChange={(e) => setMemberGender(e.target.value)}
                          />
                          <label
                            className="btn btn-outline-primary gender-label flex-grow-1 p-3 mx-2 border border-0"
                            htmlFor="genderOther"
                          >
                            기타
                          </label>
                        </div>
                      </div>


                    </div>
                </div>

                <div className="mt-4 w-100">
                    <button className="w-100 btn btn-primary text-white p-4 fw-bold font-bold rounded-lg hover:bg-indigo-700"
                        onClick={memberRegister}
                    >
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