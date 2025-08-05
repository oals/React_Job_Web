import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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

  const handleSelect = (score) => {
    const updated = [...responses];
    updated[currentIndex] = score;
    setResponses(updated);
  };

  const goToNext = () => {
//       if (responses[currentIndex] != null) {
          if (currentIndex < questions.length - 1) {
              setCurrentIndex(currentIndex + 1);
          }
//       } else {
//           alert('선택된 응답이 없습니다.')
//       }


  };


    const goToResult = () => {
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
    };


  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center py-5 flex-column">
          <div>
              <h3>
                  {testId === "1" && '직업 가치관 검사'}
                  {testId === "2" && '직업 흥미 검사'}
                  {testId === "3" && '진로 심리 검사'}
                </h3>
          </div>

        <div className="card mt-5" style={{ width: '768px' }}>
          <div className="card-body">
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <small>{currentIndex + 1} of {questions.length}</small>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="h5 mb-4">{questions[currentIndex].question}</h3>

            <form>
              {[1, 2, 3, 4, 5].map((score) => (
                <div
                  key={score}
                  className={`form-check border rounded p-3 mb-3 ${
                    responses[currentIndex] === score
                      ? 'bg-outline-primary text-primary border-primary border-2'
                      : 'bg-white text-dark'
                  }`}
                  onClick={() => handleSelect(score)}
                >
                  <input
                    type="radio"
                    name={`question-${currentIndex}`}
                    id={`score-${score}`}
                    className="form-check-input visually-hidden"
                    checked={responses[currentIndex] === score}
                    onChange={() => handleSelect(score)}
                  />
                  <label className="form-check-label ms-2" htmlFor={`score-${score}`}>
                    {score}점
                  </label>
                </div>
              ))}

              <div className="text-end">
                {currentIndex < questions.length - 1 ? (
                  <button type="button" className="btn btn-primary" onClick={goToNext}>
                    다음
                  </button>
                ) : (
                  <>
                   <button type="button" onClick={goToResult} className="btn btn-outline-secondary mx-2">
                     결과 보기
                   </button>

                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRecommendationTestPage;