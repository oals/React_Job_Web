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
  const [memberInterestField, setMemberInterestField] = useState('');
  const [memberDesiredSalary, setMemberDesiredSalary] = useState('');

  const mbtiOptions = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const memberRegister = async () => {
    if (
      !memberFirstName?.trim() ||
      !memberSecondName?.trim() ||
      !memberEmail?.trim() ||
      !memberPassword?.trim() ||
      !memberGender?.trim() ||
      !birthYear?.trim() ||
      !birthMonth?.trim() ||
      !birthDay?.trim() ||
      !memberMbti?.trim() ||
      !memberInterestField?.trim() ||
      !memberDesiredSalary?.trim()
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const registerData = {
      memberName: memberFirstName + memberSecondName,
      memberEmail: memberEmail,
      memberPassword: memberPassword,
      memberGender: memberGender,
      memberBirth: birthYear + "-" + birthMonth + "-" + birthDay,
      memberMbti: memberMbti,
      memberInterestField: memberInterestField,
      memberDesiredSalary: memberDesiredSalary,
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
    <div className="w-100 d-flex align-items-center justify-content-center flex-column">
      <div>
        <div className="d-flex flex-grow-1 justify-content-center align-items-start">
          <div className="card w-100 border border-0">
            <div className="card-body">
              <h2 className="text-center mb-5 fw-bold bg-primary p-3 text-light rounded" style={{ fontSize: '1.2rem' }}>회원 가입</h2>

              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-start border border-0 shadow w-100 p-4 rounded">
                  {/*                      <h4 className="fw-bold mb-4">기본 정보</h4> */}
                  <div className="mb-3 w-100">
                    <span className="fw-bold text-secondary mb-2 d-block text-start">이메일</span>
                    <input
                      type="email"
                      className="form-control rounded bg-light p-3 w-100"
                      placeholder="이메일"
                      value={memberEmail}
                      onChange={(e) => setMemberEmail(e.target.value)}
                    />
                  </div>
                  <span className="fw-bold text-secondary mb-2 d-block text-start">이름</span>
                  <div className="w-100 d-flex justify-content-between">
                    <div className="mb-3" style={{ width: '49%' }}>
                      <input
                        type="text"
                        className="form-control rounded bg-light p-3 w-100"
                        placeholder="이름"
                        value={memberSecondName}
                        onChange={(e) => setMemberSecondName(e.target.value)}
                      />
                    </div>
                    <div className=" mb-3 w-50 ">
                      <input
                        type="text"
                        className="form-control rounded bg-light p-3 w-100"
                        placeholder="성"
                        value={memberFirstName}
                        onChange={(e) => setMemberFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 w-100">
                    <span className="fw-bold text-secondary mb-2 d-block text-start">비밀번호</span>
                    <input
                      type="password"
                      className="form-control rounded bg-light p-3 w-100"
                      placeholder="비밀번호"
                      value={memberPassword}
                      onChange={(e) => setMemberPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 mt-1">
                    <span className="fw-bold text-secondary mb-2 d-block text-start">생년월일</span>
                    <div className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control rounded bg-light text-center p-3"
                        placeholder="YYYY"
                        maxLength={4}
                        style={{ width: '33%' }}
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control rounded bg-light text-center p-3"
                        placeholder="MM"
                        maxLength={2}
                        style={{ width: '33%' }}
                        value={birthMonth}
                        onChange={(e) => setBirthMonth(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control rounded bg-light text-center p-3"
                        placeholder="DD"
                        maxLength={2}
                        style={{ width: '33%' }}
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value)}
                      />
                    </div>
                  </div>
                  {/*                    <h4 className="fw-bold mb-4 mt-4">추가 정보</h4> */}
                  <label htmlFor="mbtiSelect" className="fw-bold text-secondary mb-2">
                    MBTI
                  </label>
                  <select
                    id="mbtiSelect"
                    className="form-select w-100 mb-3 p-3"
                    style={{ backgroundColor: '#f8f9fa' }}
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
                  <div className="mt-3 w-100 text-start">
                    <span className="fw-bold text-secondary mb-2 d-block">관심분야</span>
                    <input
                      type="email"
                      className="form-control rounded bg-light p-3 w-100"
                      placeholder="예: 프론트엔드,디자인,기획"
                      value={memberInterestField}
                      onChange={(e) => setMemberInterestField(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 w-100 text-start">
                    <span className="fw-bold text-secondary mb-2 d-block">희망연봉</span>
                    <input
                      type="email"
                      className="form-control rounded bg-light p-3 w-100"
                      placeholder="예: 3000만원"
                      value={memberDesiredSalary}
                      onChange={(e) => setMemberDesiredSalary(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 w-100">
                <button className="w-100 btn btn-primary text-white p-4 fw-bold font-bold rounded-lg hover:bg-indigo-700"
                  onClick={memberRegister}
                >
                  <span style={{ fontSize: '1.2rem' }}>가입 완료하고 시작하기</span>
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