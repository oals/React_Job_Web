import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import jobValueQuestions from '../data/jobValueTestQuestions';
import jobInterestTestQuestions from '../data/jobInterestTestQuestions';
import careerPsychologyQuestions from '../data/careerPsychologyQuestions';

const JobRecommendationTestPage = () => {
  const navigate = useNavigate();
  const testId = new URLSearchParams(useLocation().search).get('testId');
  let questions = [];

  if (testId == 1) {
    questions = jobValueQuestions;
  } else if (testId == 2) {
    questions = jobInterestTestQuestions;
  } else {
    questions = careerPsychologyQuestions;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const questionsPerPage = 5;
  const currentQuestions = questions.slice(currentIndex, currentIndex + questionsPerPage);

  const labels = {
    1: '전혀 아님',
    2: '아님',
    3: '보통',
    4: '그런 편',
    5: '매우 그럼',
  };

  const getColor = (testId) => {
    switch (testId) {
      case "1":
        return 'primary';
      case "2":
        return 'success';
      case "3":
        return 'dark';
      default:
        return 'dark';
    }
  };

  const handleSelect = (questionIndex, score) => {
    const updated = [...responses];
    updated[questionIndex] = score;
    setResponses(updated);
  };

  const selectCheck = () => {
    const unanswered = responses.slice(currentIndex, currentIndex + questionsPerPage).some((r) => r === null);

    if (unanswered) {
      alert('모든 문항에 응답해주세요.');
      return false;
    }
    return true;
  };

  const goToNext = () => {

    if (selectCheck()) {
      if (currentIndex + questionsPerPage < questions.length) {
        setCurrentIndex(currentIndex + questionsPerPage);
      }
    }
  };

  const goToResult = () => {


    if (selectCheck()) {
      const result = questions.map((q, i) => ({
        question: q.question,
        category: q.category,
        score: responses[i]
      }));

      navigate('/jobrecommendationresult', {
        state: {
          result,
          testType: testId
        }
      });
    }

  };

  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center py-5 flex-column">
        <div className={`w-50 mx-auto p-5 text-light rounded bg-${getColor(testId)}`}>
          <h3>
            {testId === "1" && '직업 가치관 검사'}
            {testId === "2" && '직업 흥미 검사'}
            {testId === "3" && '진로 심리 검사'}
          </h3>
        </div>
        <div className="card mt-5" style={{ width: '768px' }}>
          <div className="card-body">
            <div className="mb-4">
              <div className={` mb-1 fw-bold text-${getColor(testId)}`}>
                <div className="w-100 d-flex justify-content-between">
                  <small>항목 {currentIndex + 1} ~ {Math.min(currentIndex + questionsPerPage, questions.length)} / {questions.length}</small>
                  <small> 진행률: {Math.round((currentIndex / questions.length) * 100)}%</small>
                </div>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar bg-${getColor(testId)}`}
                  role="progressbar"
                  style={{ width: `${((currentIndex + questionsPerPage) / questions.length) * 100}%` }}
                />
              </div>
            </div>
            {currentQuestions.map((q, idx) => {
              const realIndex = currentIndex + idx;
              return (
                <div key={realIndex} className="mb-5">
                  <h5>{q.question}</h5>
                  <div className="d-flex justify-content-between">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div
                        key={score}
                        className={`form-check text-center flex-fill mx-1 border rounded p-3 ${responses[realIndex] === score
                            ? `bg-outline-${getColor(testId)} text-${getColor(testId)} border-${getColor(testId)} border-2`
                            : 'bg-white text-dark'
                          }`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSelect(realIndex, score)}
                      >
                        <input
                          type="radio"
                          name={`question-${realIndex}`}
                          className="form-check-input visually-hidden"
                          checked={responses[realIndex] === score}
                          onChange={() => handleSelect(realIndex, score)}
                        />
                        <label className="form-check-label">
                          <div className="d-flex flex-column">
                            <span className="fw-bold" style={{ fontSize: '1.3rem' }}> {score}</span>
                            <span> {labels[score]} </span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="text-end">
              {currentIndex + questionsPerPage < questions.length ? (
                <button
                  type="button"
                  className={`btn btn-${getColor(testId)}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    goToNext()
                  }
                  }
                >
                  다음
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goToResult}
                  className={`btn btn-${getColor(testId)}`}
                >
                  결과 보기
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRecommendationTestPage;