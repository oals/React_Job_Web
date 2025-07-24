import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobRecommendationTestPage = () => {

  const questions = [
    { id: 1, question: "나는 오랫동안 안정적으로 근무할 수 있는 직장을 선호한다.", category: "안정성" },
    { id: 2, question: "경제적인 위험을 줄일 수 있는 직업을 갖고 싶다.", category: "안정성" },
    { id: 3, question: "직업을 선택할 때 정년 보장이 중요한 요소다.", category: "안정성" },
    { id: 4, question: "고용주에 의해 지속적으로 고용될 수 있는 직장이 좋다고 생각한다.", category: "안정성" },
    { id: 5, question: "불황에도 영향을 적게 받는 업종에서 일하고 싶다.", category: "안정성" },
    { id: 6, question: "나는 내가 일한 만큼 보상을 받는 구조를 중요하게 생각한다.", category: "경제적 보상" },
    { id: 7, question: "높은 소득이 직업 선택에 큰 영향을 준다.", category: "경제적 보상" },
    { id: 8, question: "성과에 따라 인센티브가 제공되는 직장을 선호한다.", category: "경제적 보상" },
    { id: 9, question: "급여 수준이 내 만족도에 중요한 역할을 한다.", category: "경제적 보상" },
    { id: 10, question: "금전적인 여유를 누릴 수 있는 직업을 갖고 싶다.", category: "경제적 보상" },
    { id: 11, question: "나는 새로운 것을 배우는 기회가 많은 직업이 좋다.", category: "성장" },
    { id: 12, question: "내가 가진 역량을 지속적으로 향상시킬 수 있는 환경이 중요하다.", category: "성장" },
    { id: 13, question: "스스로 발전할 수 있는 과제가 주어지는 일을 선호한다.", category: "성장" },
    { id: 14, question: "직업을 통해 전문성을 높일 수 있기를 원한다.", category: "성장" },
    { id: 15, question: "변화에 적응하며 성장할 수 있는 직장을 원한다.", category: "성장" },
    { id: 16, question: "나는 일을 하면서도 개인의 삶을 충분히 누릴 수 있어야 한다고 생각한다.", category: "일·생활 균형" },
    { id: 17, question: "근무 시간이 규칙적이고 예측 가능한 것이 중요하다.", category: "일·생활 균형" },
    { id: 18, question: "가족과 여가를 위한 시간이 직업 선택에서 중요한 요소다.", category: "일·생활 균형" },
    { id: 19, question: "과도한 야근이나 업무 스트레스가 적은 직장을 선호한다.", category: "일·생활 균형" },
    { id: 20, question: "일을 통해 명확한 목표를 설정하고 달성하는 것이 중요하다.", category: "성취" },
    { id: 21, question: "나의 성과가 주변 사람들에게 인정받는 것이 중요하다.", category: "성취" },
    { id: 22, question: "내가 하는 일이 사회적으로 의미 있다고 느끼고 싶다.", category: "성취" },
    { id: 23, question: "내가 맡은 일을 성공적으로 해내는 데서 보람을 느낀다.", category: "성취" },
    { id: 24, question: "나의 기여가 조직에 긍정적 영향을 준다는 점이 중요하다.", category: "성취" },
    { id: 25, question: "나는 동료들과 긍정적인 관계를 유지하는 것을 중요하게 생각한다.", category: "관계성" },
    { id: 26, question: "팀워크를 중시하는 조직에서 일하고 싶다.", category: "관계성" },
    { id: 27, question: "사람들과 협력하면서 함께 일하는 환경이 좋다.", category: "관계성" },
    { id: 28, question: "직장에서 나의 인간관계가 업무 만족도에 큰 영향을 준다.", category: "관계성" },
    { id: 29, question: "나는 스스로 계획을 세워 일하는 방식을 선호한다.", category: "자율성" },
    { id: 30, question: "일을 수행하는 방식에 대해 자유롭게 결정할 수 있어야 한다.", category: "자율성" },
    { id: 31, question: "타인의 지시 없이 자율적으로 일하는 것이 편하다.", category: "자율성" },
    { id: 32, question: "조직 내에서 주도적인 역할을 맡고 싶다.", category: "자율성" },
    { id: 33, question: "내가 하는 일이 사회에 긍정적인 영향을 주기를 원한다.", category: "사회적 기여" },
    { id: 34, question: "다른 사람에게 도움이 되는 일을 중요하게 생각한다.", category: "사회적 기여" },
    { id: 35, question: "공공의 이익을 위해 일하는 데에 보람을 느낀다.", category: "사회적 기여" },
    { id: 36, question: "직업을 통해 세상을 더 나은 방향으로 이끌고 싶다.", category: "사회적 기여" },
    { id: 37, question: "내가 좋아하고 흥미를 느끼는 분야에서 일하고 싶다.", category: "흥미" },
    { id: 38, question: "직업 자체가 재미있어야 오래 일할 수 있다고 생각한다.", category: "흥미" },
    { id: 39, question: "일하는 과정에서 창의적인 아이디어를 떠올리는 것이 좋다.", category: "흥미" },
    { id: 40, question: "직업을 선택할 때 나의 관심과 열정이 가장 중요하다.", category: "흥미" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(null));

  const handleSelect = (score) => {
    const updated = [...responses];
    updated[currentIndex] = score;
    setResponses(updated);
  };

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    const result = questions.map((q, i) => ({
      question: q.question,
      category: q.category,
      score: responses[i]
    }));
    console.log("응답 결과:", result);
    alert("검사가 완료되었습니다! 결과는 콘솔을 확인하세요.");
  };

  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
        <div className="card" style={{ width: '768px' }}>
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
                    <button type="button" className="btn btn-success" onClick={handleSubmit}>
                      검사 완료
                    </button>
                    <Link to="/jobrecommendationresult">
                      <button type="button" className="btn btn-outline-secondary mx-2">
                        결과 보기
                      </button>
                    </Link>
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