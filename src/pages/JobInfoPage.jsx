import React from 'react';
import { useState } from 'react';

const JobInfoPage = () => {

    return (
       <div className="w-75 mx-auto">
            {/* 제목 */}
            <h1 className="fw-bold fs-2 mb-4">소프트웨어 엔지니어</h1>

            {/* 대표 이미지 */}
            <div className="mb-5">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVPe_r8Kt6jPJ7Sm9YoYqL3GBBlbBoDFJuj5ecni_29E3jDCGIvezQHs6sjCWfPV8EJTaeiLA0pNxr7pYz_GSrl3ZAQjYk5AflQBZuRYP0dflKITc3sOus9cbzGxoR0Fkn97Wbv2rTRldZS4ZMeGSUQt6wrSo237MMaVjm9EWcjYbSqvWQTdbJkszABlI5CPetNFkokBRkRQyXhaq0MVoWbSg1h86D1fdtUOkEAVe3icCL7szJ3aO1MpDp2wXhoT7HxLzBtXeK8-Y"
                alt="소프트웨어 엔지니어"
                className="img-fluid rounded"
                style={{ objectFit: 'cover'}}
              />
            </div>

            {/* 직무 소개 */}
            <p className="fs-6 text-secondary mb-5">
              소프트웨어 엔지니어는 다양한 산업 분야에서 사용되는
              소프트웨어 애플리케이션을 설계·개발·테스트·유지보수합니다. 프로그래밍
              언어와 자료구조, 알고리즘을 활용해 문제를 해결하며, 다른 엔지니어,
              제품 기획자, 디자이너 등과 협업해 고품질의 소프트웨어를 만듭니다.
            </p>

            {/* 주요 업무 */}
            <h2 className="fw-bold fs-4 mb-3">주요 업무</h2>
            <div className="mb-5">
              <h3 className="fw-semibold fs-5">1. 코딩</h3>
              <ul className="list-unstyled ms-3 mb-4">
                <li>• 깨끗하고 효율적인 코드 작성</li>
                <li>• 소프트웨어 애플리케이션 개발 및 유지보수</li>
              </ul>

              <h3 className="fw-semibold fs-5">2. 협업</h3>
              <ul className="list-unstyled ms-3 mb-4">
                <li>• 요구사항 수집 및 기술 명세서 작성</li>
                <li>• 제품 기획자·디자이너와의 긴밀한 협업</li>
              </ul>

              <h3 className="fw-semibold fs-5">3. 테스트</h3>
              <ul className="list-unstyled ms-3">
                <li>• 품질 기준과 사용자 요구사항 충족 여부 검증</li>
                <li>• 소프트웨어 디버깅 및 성능 테스트 수행</li>
              </ul>
            </div>

            {/* 필요 기술 */}
            <h2 className="fw-bold fs-4 mb-3">필요 기술</h2>
            <ul className="list-group mb-5">
              {[
                '프로그래밍 언어(예: JavaScript, Python, Java)',
                '자료구조 및 알고리즘',
                '소프트웨어 설계 패턴',
                '버전 관리 시스템(e.g., Git)',
                '테스트 및 디버깅 기법',
              ].map((skill) => (
                <li key={skill} className="list-group-item">
                  {skill}
                </li>
              ))}
            </ul>

            {/* 학력 및 자격 조건 */}
            <h2 className="fw-bold fs-4 mb-3">학력 및 자격 조건</h2>
            <p className="fs-6 text-secondary mb-5">
              컴퓨터 공학 또는 관련 전공 학사 이상이 일반적이며,
              석사 학위나 관련 자격증(예: AWS Certified, Oracle Certified)이
              우대됩니다.
            </p>

            {/* 연봉 */}
            <h2 className="fw-bold fs-4 mb-3">연봉 수준</h2>
            <p className="fs-6 text-secondary mb-5">
              평균 연봉은 약 1억 2천만 원 수준으로, 경력과 지역에 따라 차이가 있습니다.
              신입은 7천만 원대부터 시작하며, 시니어는 1억 5천만 원 이상도 가능합니다.
            </p>

            {/* 커리어 패스 */}
            <h2 className="fw-bold fs-4 mb-3">커리어 패스</h2>
            <p className="fs-6 text-secondary">
              시니어 엔지니어, 테크 리드, 엔지니어링 매니저 등으로 승진할 수 있으며,
              프론트엔드·백엔드·풀스택·아키텍트 등 전문 분야로도 진로를 넓힐 수 있습니다.
            </p>
          </div>


    );
}

export default JobInfoPage;