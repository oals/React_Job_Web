# 💻 JobX
<img src="https://github.com/user-attachments/assets/a9f61f74-10c7-48a8-b69c-a2a8a047bee0" alt="appIcon" width="300"/>




## 📝 소개

**JobX**는 **LLaMA 기반 AI**로 사용자에게 맞춤 직업을 추천하며 <br> **스프링 배치**를 통해 최신 취업 관련 뉴스와 고용24 API의 다양한 직업 정보를 자동으로 수집하는 서비스입니다

---
## 🚀 주요 기능


> 🤖 **LLaMA AI**: **사용자 정보**와 **직업 검사 결과**를 프롬프트로 만들어 사용자에게 적합한 **직업**을 추천합니다.  <br> <br>
> 📥 **Spring Batch**: 최신 **취업 관련 뉴스** 및 고용24 **직업 정보**를 주기적으로 수집합니다.  <br><br>
> 🔐 **Spring Security**: **JWT 토큰**과 **리프레시 토큰**을 활용해 보안을 강화합니다.  <br><br>
> 🛡️ **HttpOnly Cookie**: **JWT 토큰**과 **리프레시 토큰**을 클라이언트에서 안전하게 보관합니다. <br> <br>



---
## 🛠️ 사용 기술 

> **프로그래밍 언어**: Java 17 <br><br>
> **프론트엔드**: React  <br><br>
> **백엔드**: Spring Boot 3.3.13<br><br>
> **AI 모델**: llama3.1:8b-instruct-q8_0 <br><br>
> **데이터베이스**: MariaDb, PostgreSQL <br><br>
> **캐싱**: Redis  <br><br>
> **인증**: Spring Security, Http Only Cookie  <br><br>
> **클라우드 & 배포**: EC2 Instance <br><br>
> **CI/CD**: Jenkins, docker <br><br>
---

## 📂 ERD


<details>
<summary> ERD</summary>

   <img width="910" height="840" alt="dberd" src="https://github.com/user-attachments/assets/10483a08-41e2-48cc-ac82-b7ee35b17fb0" />
   

</details>



## 📂 Jenkins

<details>
<summary>🔧 파이프라인</summary>

    pipeline {
        agent any
        
        stages {
          stage('소스 가져오기') {
            steps {
              dir('React_Job_Web') {
                git url: 'https://github.com/oals/React_Job_Web.git', branch: 'main'
              }
              dir('React_Job_Web_Api') {
                git url: 'https://github.com/oals/React_Job_Web_API.git', branch: 'main'
              }
              dir('React_Job_Web_Batch') {
                git url: 'https://github.com/oals/React_Job_Web_Batch.git', branch: 'main'
              }
            }
          }
        
          stage('폴더 준비') {
            steps {
              sh '''
                mkdir -p React_Job_Web_Api/src/main/resources
                mkdir -p React_Job_Web_Api/src/main/java/com/example/jobx_api/config
                mkdir -p React_Job_Web_Batch/src/main/resources
                mkdir -p React_Job_Web
              '''
            }
          }
        
          stage('설정파일 주입') {
            steps {
              configFileProvider([
        
                configFile(fileId: '0dc57b5e-db65-4a22-8667-2079ceb6e698', targetLocation: 'React_Job_Web_Batch/src/main/resources/application.properties'),
                configFile(fileId: 'dadf38d8-64c9-4f38-b6f5-1c683457dcba', targetLocation: 'React_Job_Web_Api/src/main/resources/application.properties'),
                
                configFile(fileId: '056355d2-8b07-45c5-bd97-211bd37885ca', targetLocation: 'React_Job_Web_Api/src/main/java/com/example/jobx_api/config/RedisConfig.java'),
                configFile(fileId: 'bbcc491b-1d2a-4e96-b92e-c00ab0396d9b', targetLocation: 'React_Job_Web_Api/src/main/java/com/example/jobx_api/config/WebConfig.java'),
                configFile(fileId: 'd80b44d3-dba8-4214-a092-7a3a1e48e212', targetLocation: 'React_Job_Web_Api/src/main/java/com/example/jobx_api/config/JwtAuthFilter.java'),
                configFile(fileId: 'e430ef1d-3751-4095-8811-b86f1bbebdba', targetLocation: 'React_Job_Web_Api/src/main/java/com/example/jobx_api/config/SecurityConfig.java'),
        
                configFile(fileId: '597b6461-9bb5-4df0-b1c9-c92b9311179e', targetLocation: 'React_Job_Web/'),
                configFile(fileId: '7edaa3b4-395e-43e1-8492-3f3deacbc543', targetLocation: 'docker-compose.yml'),
                configFile(fileId: 'de9d20a4-b698-44e0-8a78-a8a2396a3bae', targetLocation: 'React_Job_Web/nginx.conf'),
                
              ]) {
                echo "✅ 설정파일이 성공적으로 주입되었습니다"
              }
            }
          }
        
          stage('Spring Boot 빌드') {
            steps {
              dir('React_Job_Web_Api') {
                sh '''
                  chmod +x ./gradlew
                  ./gradlew build -x test --daemon --scan
                '''
              }
          
              dir('React_Job_Web_Batch') {
                sh '''
                  chmod +x ./gradlew
                  ./gradlew build -x test --daemon --build-cache --scan
                '''
              }
            }
          }
        
        
          stage('이미지 빌드') {
            steps {
              sh '''
                if ! command -v docker-compose > /dev/null; then
                  echo "docker-compose not found in PATH, trying to add /usr/local/bin"
                  export PATH=$PATH:/usr/local/bin
                fi
          
                if command -v docker-compose > /dev/null; then
                  docker-compose build
                else
                  echo "docker-compose command not found!"
                  exit 1
                fi
              '''
            }
          }
        
          stage('컨테이너 실행') {
            steps {
              sh 'docker-compose up -d' 
            }
          }
         }
        } 

  
</details>


<details>
<summary>🔧 Config Provider</summary>

    🔧 Config File Provider 사용
        - Jenkins의 플러그인을 활용해 설정 파일을 Jenkins에 미리 등록해둡니다.
        - 빌드 시 해당 파일들이 자동으로 워크스페이스에 복사되도록 설정하여, 일관된 개발/빌드 환경을 제공합니다.

   <img src="https://github.com/user-attachments/assets/eb677b1a-8f20-4e07-8489-c51dd96aafed" width="800"/>
   

</details>

---

## 📂 Docker

<details>
<summary>🔧 Docker Container</summary>


   <img src="https://github.com/user-attachments/assets/8062688e-e4a8-4988-a2b9-14d0379be86d" width="1200"/>


</details>


<details>
<summary>🔧 Docker Compose</summary>


    version: "3.8"

    services:
      postgres:
        image: postgres:15
        container_name: jobx-postgres
        restart: always
        ports:
          - "5432:5432"
        environment:
          - POSTGRES_DB=job_x_batch
          - POSTGRES_USER=postgres
          - POSTGRES_PASSWORD=fsociety
        volumes:
          - postgres_data:/var/lib/postgresql/data
        healthcheck:
          test: ["CMD-SHELL", "pg_isready -U postgres"]
          interval: 10s
          timeout: 5s
          retries: 5
          start_period: 30s
          
      mariadb:
        image: mariadb:10.6
        container_name: jobx-mariadb
        restart: always
        ports:
          - "3306:3306"
        volumes:
          - mariadb_data:/var/lib/mysql
        environment:
          - MARIADB_ROOT_PASSWORD=fsociety
        healthcheck:
          test: ["CMD-SHELL", "mysql -uroot -pfsociety -e 'SELECT 1' || exit 1"]
          interval: 10s
          timeout: 5s
          retries: 5
          start_period: 30s
    
      redis:
        image: redis:7
        container_name: jobx-redis
        ports:
          - "6379:6379"
        volumes:
          - redis_data:/data
        healthcheck:
          test: ["CMD", "redis-cli", "ping"]
          interval: 10s
          timeout: 20s
          retries: 5
          start_period: 30s
    
      jobx-batch:
        build:
          context: ./React_Job_Web_Batch
          dockerfile: Dockerfile
        container_name: jobx-batch
        ports:
          - "8084:8080"
        depends_on:
          mariadb:
            condition: service_healthy
    
      jobx-api:
        build:
          context: ./React_Job_Web_Api
          dockerfile: Dockerfile
        container_name: jobx-api
        ports:
          - "8082:8080"
        depends_on:
          mariadb:
            condition: service_healthy
          redis:
            condition: service_healthy
        environment:
          - API_PORT=8080
    
      jobx-web:
        build:
          context: ./React_Job_Web
          dockerfile: Dockerfile
        container_name: jobx-web
        ports:
          - "3000:80"
        depends_on:
          - jobx-api
          - jobx-batch
    
    volumes:
      mariadb_data:
      redis_data:
      postgres_data:



</details>


---

## 📂 Redis

<details>
<summary>🔧 Redis </summary>


   <img src="https://github.com/user-attachments/assets/7deb68fa-8368-4370-a890-c22df7ac9361" width="800"/>

   <br>
   <br>

   > **리프레쉬 토큰 저장** 


</details>

---
## 📂 Nginx

<details>
<summary>🔧 ngnix.conf</summary>


     server {
        listen 80;
        server_name _;
        
        location / {
         root /usr/share/nginx/html;
         index index.html index.htm;
         try_files $uri /index.html;
        }
        
        location /api/ {
         proxy_pass http://jobx-api:8080;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection 'upgrade';
         proxy_set_header Host $host;
         proxy_cache_bypass $http_upgrade;
        }
        
    }    
  


</details>

---


## 📱 목차

> 🏠 **[홈](#홈)**  <br><br>
> 👥 **[회원가입](#회원가입)**  <br><br>
> 👥 **[로그인](#로그인)**  <br><br>
> 🔐 **[직업 검사](#직업-검사)**  <br><br>
> 💬 **[직업 검색](#직업-검색)**  <br><br>
> 👥 **[직업 상세](#직업-상세)**  <br><br>
> 🗃️ **[직업 뉴스](#직업-뉴스)**  <br><br>
> 🗃️ **[북마크](#북마크)**  <br><br>

---

### 홈
| 홈 |
|---------|
| <img width="800" alt="cxzcvv" src="https://github.com/user-attachments/assets/50946eed-ea9e-4801-a92c-1d1cce701991" /> | 

#### ✅ 홈 설명
- 사람들이 **관심 있게 본 직업들**을 확인할 수 있습니다.
- 최신 **직업 관련 뉴스**를 한눈에 볼 수 있습니다.
- **직업 검사 버튼**으로 직업 검사 화면으로 이동할 수 있습니다.

---


### 회원가입
<br>

| 회원가입 |
|---------|
| <img src="https://github.com/user-attachments/assets/7ea35d76-2d0b-4712-b23e-45861f400486" width="800"/> | 

<br>

#### ✅ 회원가입 설명

- **생년월일**, **MBTI**, **성별**, **관심 분야**, **희망 연봉** 등의 정보를 입력받아  
  직업 추천의 **정확도를 향상**시켰습니다.


---

### 로그인
<br>

| 로그인 |
|---------|
| <img src="https://github.com/user-attachments/assets/2e474488-a73f-445c-84cb-3c1abd822f59" width="800"/> | 

<br>

#### ✅ 로그인 설명

- **Spring Security** 기반 인증 시스템을 사용합니다.  
- **JWT**와 **리프레시 토큰**은 **HttpOnly 쿠키**에 저장되어 클라이언트에서 안전하게 처리됩니다.
  
<br>

#### ✅ Http Only Cookie
<img width="1460" height="177" alt="로그인 토큰저장httponlycookie" src="https://github.com/user-attachments/assets/c1282abc-a236-4c22-8a58-dacd87ff35a7" />


---


### 직업 검사
<br>

| 검사 | 
|---------|
| <img src="https://github.com/user-attachments/assets/d3168020-44d8-4cf1-ac33-a5c4da7655aa" width="800"/> |

<br>
<br>

| 결과 | 
|---------|
| <img src="https://github.com/user-attachments/assets/f7de23c9-603f-4041-902d-0593163d0f4f" width="800"/> |

<br>
<br>

| 직업 가치관 검사 | 직업 흥미 검사| 진로 심리 검사 |
|---------|---------|---------|
| <img src="https://github.com/user-attachments/assets/98f7211d-f22b-44b5-ae6d-1f3b108949b6" width="800"/>  | <img src="https://github.com/user-attachments/assets/77b45758-02c1-4fd2-b8e7-011ca252e3b3" width="800"/> |  <img src="https://github.com/user-attachments/assets/704817e8-40eb-4886-aa38-f0989f47f2a5" width="800"/>  |

#### ✅ 직업 검사 설명

- 사용자가 진행한 **직업 가치관 검사, 직업 흥미 검사 , 진로 심리 검사** 결과를 서버로 전송합니다.  
- 서버에서는 해당 결과를 프롬프트와 합쳐 **LLaMA AI**에 전달합니다.  
- AI가 적합한 직업을 추천하면 사용자에게 결과를 제공합니다.


<br>


<details>
  <summary>LLaMA 프롬프트 </summary>

        "당신은" + testTypeName +" 상담 전문가입니다. " +
                "사용자가 제출한 직업 가치관 설문 결과, 나이, MBTI 성격 유형을 종합적으로 분석하여 " +
                "가장 적합한 직업 하나를 반드시 추천해야 합니다.\n\n" +

                "다음 형식으로만 간결하게 답변해 주세요. 불필요한 설명이나 서론, 마크다운 문법(예: ###, *, -, 숫자 리스트 등)은 절대 포함하지 마세요.\n" +
                "정확히 한국어로 아래 형식을 따르세요\n" +
                "아래의 항목 외에 다른 답변이 포함 되지 않게 하세요\n" +

                "-------------------------------------------\n" +
                "직업명: (직업명)\n" +
                "직업 카테고리: (직업 카테고리)\n" +
                "직업 설명: (최소 250자 최대 300자)\n" +
                "직업 평균 연봉: (예시 : 3,000만원) \n" +
                "직업 필요 역량: (예시 : 분석적 사고, 문제 해결) \n" +
                "직업 연령대: (예시 : 20대 ~ 30대 많음) \n" +
                "직업 직업 전망: (예시 : 안좋음, 보통, 밝음) \n" +
                "직업 아이콘 (부트스트랩) : (예시 : bi bi-clipboard-data) \n" +
                "우대 학과 ( , 로 구분): (에시 : 경영학, 금융학)\n" +
                "우대 자격증 ( , 로 구분): (에시 : CFA, FRM)\n" +
                "필요한 기술 1: (기술 1)\n" +
                "필요한 기술 2: (기술 2)\n" +
                "필요한 기술 3: (기술 3)\n" +
                "-------------------------------------------\n" +

                "위 항목 외에 다른 답변이 포함 되지 않게 하세요\n" +
                "위 형식으로만 간결하게 답변해 주세요. 불필요한 설명이나 서론, 마크다운 문법(예: ###, *, -, 숫자 리스트 등)은 절대 포함하지 마세요.\n" +
                "모든 내용은 무조건 **한국어**로만 작성해야 하며, 영어 또는 외국어가 포함 되어서는 안 됩니다. \n" +
                "또한, 반드시 사용자의 나이(" + memberDto.getMemberBirth() + ")와 MBTI(" + memberDto.getMemberMbti() + ") " +
                "그리고 사용자의 관심분야(" + memberDto.getMemberInterestField() + ")와 희망연봉(" + memberDto.getMemberDesiredSalary() + ") " +
                "그리고 사용자의 성별(" + memberDto.getMemberGender() + ")" +
                "을 고려하여 직업을 추천해야 하며, 해당 정보와 충돌되는 조건이나 예외 사항을 언급하지 마세요.\n" +
                "답변은 확신 있는 어조로 작성하고, 절대 모호하거나 조건부 문장을 포함하지 마세요.";


</details>




<details>
  <summary> 직업 가치관 검사 문항 </summary>


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



    
</details>   


<details>
  <summary> 직업 흥미 검사 문항 </summary>

      { id: 1, question: "나는 기계를 조작하거나 고치는 일에 흥미가 있다.", category: "실제형" },
      { id: 2, question: "나는 야외에서 일하는 것을 선호한다.", category: "실제형" },
      { id: 3, question: "나는 손으로 무언가를 만드는 일이 좋다.", category: "실제형" },
      { id: 4, question: "나는 구조물이나 기계의 작동 원리에 관심이 많다.", category: "실제형" },
      { id: 5, question: "나는 체력이나 신체 활동이 필요한 일을 선호한다.", category: "실제형" },
      { id: 6, question: "나는 문제를 분석하고 원인을 찾는 것을 좋아한다.", category: "탐구형" },
      { id: 7, question: "나는 과학적 원리나 수학에 관심이 많다.", category: "탐구형" },
      { id: 8, question: "나는 새로운 지식이나 사실을 탐구하는 것이 즐겁다.", category: "탐구형" },
      { id: 9, question: "나는 실험이나 조사 활동을 좋아한다.", category: "탐구형" },
      { id: 10, question: "나는 논리적으로 생각하고 추론하는 능력을 중요하게 생각한다.", category: "탐구형" },
      { id: 11, question: "나는 글쓰기, 그림 그리기, 음악 등 창작 활동을 좋아한다.", category: "예술형" },
      { id: 12, question: "나는 자유롭고 개성 있는 표현을 중요하게 생각한다.", category: "예술형" },
      { id: 13, question: "나는 정해진 틀보다는 창의적인 접근을 선호한다.", category: "예술형" },
      { id: 14, question: "나는 시각적 디자인이나 색감에 관심이 많다.", category: "예술형" },
      { id: 15, question: "나는 감정을 표현하거나 상상하는 일이 즐겁다.", category: "예술형" },
      { id: 16, question: "나는 다른 사람을 도와주는 일에 보람을 느낀다.", category: "사회형" },
      { id: 17, question: "나는 상담이나 교육과 같은 대인 서비스에 관심이 있다.", category: "사회형" },
      { id: 18, question: "나는 협력과 소통을 통해 일하는 환경을 선호한다.", category: "사회형" },
      { id: 19, question: "나는 공동체에 긍정적인 영향을 주는 일을 하고 싶다.", category: "사회형" },
      { id: 20, question: "나는 타인의 감정에 공감하고 배려하는 편이다.", category: "사회형" },
      { id: 21, question: "나는 리더십을 발휘할 수 있는 일을 좋아한다.", category: "진취형" },
      { id: 22, question: "나는 사람들을 설득하거나 기획하는 데에 흥미가 있다.", category: "진취형" },
      { id: 23, question: "나는 경쟁적이고 목표 지향적인 성격이다.", category: "진취형" },
      { id: 24, question: "나는 사업, 마케팅, 세일즈 분야에 관심이 많다.", category: "진취형" },
      { id: 25, question: "나는 팀이나 조직을 이끄는 역할을 선호한다.", category: "진취형" },
      { id: 26, question: "나는 체계적이고 규칙적인 업무를 잘 수행한다.", category: "관습형" },
      { id: 27, question: "나는 숫자나 데이터를 다루는 일을 좋아한다.", category: "관습형" },
      { id: 28, question: "나는 문서 정리나 기록 관리에 능숙한 편이다.", category: "관습형" },
      { id: 29, question: "나는 정해진 절차나 규칙을 따르는 걸 선호한다.", category: "관습형" },
      { id: 30, question: "나는 반복적인 업무도 성실하게 수행할 수 있다.", category: "관습형" },
      { id: 31, question: "나는 새로운 도전을 즐기며 다양한 경험을 쌓고 싶다.", category: "진취형" },
      { id: 32, question: "나는 독창적인 아이디어를 내고 실현하는 것을 좋아한다.", category: "예술형" },
      { id: 33, question: "나는 사회 문제를 해결하는 데 관심이 많다.", category: "사회형" },
      { id: 34, question: "나는 실용적이고 손에 잡히는 결과를 선호한다.", category: "실제형" },
      { id: 35, question: "나는 지적 호기심이 많고 스스로 공부하는 걸 즐긴다.", category: "탐구형" },
      { id: 36, question: "나는 계획을 세우고 체계적으로 실행하는 걸 좋아한다.", category: "관습형" },
      { id: 37, question: "나는 사람들을 이끄는 역할에서 에너지를 얻는다.", category: "진취형" },
      { id: 38, question: "나는 감각적인 표현이나 예술을 통한 소통을 선호한다.", category: "예술형" },
      { id: 39, question: "나는 다양한 사람들과 어울리며 소통하는 걸 좋아한다.", category: "사회형" },
      { id: 40, question: "나는 실제로 손에 닿는 결과물을 만드는 게 성취감을 준다.", category: "실제형" }



    
</details>   



<details>
  <summary> 진로 심리 검사 문항 </summary>

      { id: 1, question: "나는 나의 강점과 약점을 잘 알고 있다.", category: "자기이해" },
      { id: 2, question: "나는 어떤 일을 좋아하고 싫어하는지 명확하게 말할 수 있다.", category: "자기이해" },
      { id: 3, question: "나는 내가 무엇을 잘할 수 있는지 알고 있다.", category: "자기이해" },
      { id: 4, question: "나는 나의 성격이 직업 선택에 어떤 영향을 미치는지 알고 있다.", category: "자기이해" },
      { id: 5, question: "나는 나의 가치관이 어떤 직업에 적합한지 이해하고 있다.", category: "자기이해" },
      { id: 6, question: "나는 내 진로에 대해 올바른 결정을 내릴 수 있다고 믿는다.", category: "진로 자신감" },
      { id: 7, question: "나는 원하는 목표를 위해 꾸준히 노력할 수 있다.", category: "진로 자신감" },
      { id: 8, question: "나는 어려움이 있어도 포기하지 않고 극복하려 한다.", category: "진로 자신감" },
      { id: 9, question: "나는 새로운 환경에서도 나를 잘 적응시킬 수 있다.", category: "진로 자신감" },
      { id: 10, question: "나는 나의 미래에 대해 긍정적인 기대를 가지고 있다.", category: "진로 자신감" },
      { id: 11, question: "나는 다양한 직업에 대해 알아보려는 노력을 한다.", category: "진로 탐색" },
      { id: 12, question: "나는 진로에 대한 정보를 인터넷이나 책을 통해 찾는다.", category: "진로 탐색" },
      { id: 13, question: "나는 실제 직업인과의 대화를 통해 진로 정보를 얻으려 한다.", category: "진로 탐색" },
      { id: 14, question: "나는 관심 있는 분야의 활동이나 체험에 참여해 본 적이 있다.", category: "진로 탐색" },
      { id: 15, question: "나는 내 적성에 맞는 직업을 찾기 위해 고민하고 있다.", category: "진로 탐색" },
      { id: 16, question: "나는 어떤 직업이 나에게 맞는지 어느 정도 결정했다.", category: "진로 결정" },
      { id: 17, question: "나는 나에게 맞는 진로 방향을 구체적으로 설정하고 있다.", category: "진로 결정" },
      { id: 18, question: "나는 장래희망에 대해 명확하게 설명할 수 있다.", category: "진로 결정" },
      { id: 19, question: "나는 진로를 선택할 때 부모나 교사의 의견을 참고한다.", category: "진로 결정" },
      { id: 20, question: "나는 진로를 정할 때 나의 흥미와 적성을 우선시한다.", category: "진로 결정" },
      { id: 21, question: "나는 미래에 어떤 직업을 가질지 몰라서 불안하다.", category: "진로 불안" },
      { id: 22, question: "나는 내 진로가 실패할까 봐 걱정된다.", category: "진로 불안" },
      { id: 23, question: "나는 경쟁이 심한 직업 환경이 두렵다.", category: "진로 불안" },
      { id: 24, question: "나는 내가 원하는 직업을 얻을 수 있을지 걱정된다.", category: "진로 불안" },
      { id: 25, question: "나는 미래에 대한 막연한 불안감을 느낀다.", category: "진로 불안" },
      { id: 26, question: "나는 안정적인 직장을 갖는 것을 중요하게 생각한다.", category: "직업 가치관" },
      { id: 27, question: "나는 일하면서 개인의 삶도 중요하게 여긴다.", category: "직업 가치관" },
      { id: 28, question: "나는 다른 사람에게 긍정적인 영향을 주는 일을 하고 싶다.", category: "직업 가치관" },
      { id: 29, question: "나는 나의 능력을 발전시킬 수 있는 일을 하고 싶다.", category: "직업 가치관" },
      { id: 30, question: "나는 사회적으로 의미 있는 일을 하고 싶다.", category: "직업 가치관" },
      { id: 31, question: "나는 진로 목표를 이루기 위해 학업에 노력하고 있다.", category: "학업 동기" },
      { id: 32, question: "나는 공부하는 이유가 분명하다.", category: "학업 동기" },
      { id: 33, question: "나는 배운 것이 미래 진로에 도움이 된다고 생각한다.", category: "학업 동기" },
      { id: 34, question: "나는 성적이 나의 진로에 영향을 준다고 느낀다.", category: "학업 동기" },
      { id: 35, question: "나는 자신이 원하는 진로를 위해 구체적인 학습 계획이 있다.", category: "학업 동기" },
      { id: 36, question: "부모님의 기대는 내 진로 결정에 큰 영향을 준다.", category: "환경 요인" },
      { id: 37, question: "친구나 선생님의 조언이 진로 선택에 도움이 된다.", category: "환경 요인" },
      { id: 38, question: "나는 주변 사람들의 직업을 보며 진로에 대해 생각한다.", category: "환경 요인" },
      { id: 39, question: "미디어나 사회적 분위기가 내 진로 결정에 영향을 준다.", category: "환경 요인" },
      { id: 40, question: "나는 진로를 선택할 때 경제적 여건도 고려한다.", category: "환경 요인" }



    
</details>   




<br>



본 검사는 **Holland의 RIASEC 직업흥미모형**, **진로결정 자기효능감(Career Decision Self-Efficacy)**, **직업가치관 척도** 등 <br>
기존 진로 및 직업심리 평가 도구를 참고하여 ChatGPT를 활용해 개발한 맞춤형 문항입니다.



<br>





---


### 직업 검색
<br>

| 검색 |
|---------|
| <img src="https://github.com/user-attachments/assets/287359e9-61c7-4536-a057-deccae556c6f" width="800"/> | 


<br>

#### ✅ 직업 검색 설명

- **Spring Batch**를 사용해 **고용24 직업 정보 API**로부터  
  2주마다 새로운 직업 데이터를 주기적으로 수집합니다.

- **검색 정렬 방식**  
  - **관련도순**: 직업 설명, 대분류/중분류 카테고리, 제목에 검색어가 포함된 **빈도수**를 기준으로 정렬합니다.  
  - **인기순**: 사용자가 **북마크한 수**를 기준으로 정렬합니다.



---

### 직업 상세
<br>

| 상세 |
|---------|
| <img src="https://github.com/user-attachments/assets/6302a239-9cc5-45e1-a2f2-be3a4374df1a" width="800"/> | 


<br>

#### ✅ 직업 상세 설명

- 해당 직업에 대한 **설명**, **관련 자격증**, **관련 전공(학과)**, **평균 연봉**, **일자리 전망** 등을 확인할 수 있습니다.  
- 직업에 대한 **필요 능력**, **필요 지식**, **가치관**, **흥미**, **성격**, **업무 환경** 정보를 제공합니다.


---


### 직업 뉴스
<br>

| 검색 |
|---------|
| <img src="https://github.com/user-attachments/assets/0d76c2c2-2f3e-4f31-8e41-ceca624990d6" width="800"/> | 


<br>

#### ✅ 직업 뉴스 설명

- **Spring Batch**를 활용해 매일 **0시 5분**,  
  `"취업"`, `"직업"`, `"채용"`, `"국비학원"`, `"국비교육"`, `"부트캠프"` 등의 키워드를 기반으로  
  **NewsAPI**에서 전날 직업 관련 뉴스를 자동으로 수집합니다.


---

### 북마크
<br>

| 북마크 |
|---------|
| <img src="https://github.com/user-attachments/assets/01bbdde5-3d8e-4db4-ae0e-90781f3e5d36" width="800"/> | 

---


<br>

| 목록 |
|---------|
| <img src="https://github.com/user-attachments/assets/3576dd47-af31-438c-a2ce-332f1a7696e7" width="800"/> | 

<br>

#### ✅ 북마크 설명
- 관심 있는 직업 정보를 **북마크**할 수 있으며,  
  나중에 다시 확인할 수 있도록 **내 북마크 페이지**를 제공합니다.



  
---



<br>
