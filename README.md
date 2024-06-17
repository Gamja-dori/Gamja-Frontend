# Gamja-Frontend
> 다시: 은퇴한 시니어를 위한 긱 워킹 채용 플랫폼의 프론트엔드 레포지토리

<p align="center">
    <a href="https://dasi-expert.com" target="_blank">
        <img src="https://github.com/Gamja-dori/Gamja-Backend/assets/100199530/97ab599d-3892-4a43-9cd8-fd77dfe3e8aa" alt="dasi" width="750"/>
        <br>웹 사이트 바로가기
    </a>
</p>
<br/>

## 📌 목차
- [설치 및 실행](#설치-및-실행)
- [기술 스택](#기술-스택)
  - [Development](#development)
  - [Deploy](#deploy)
- [디렉토리 구조](#디렉토리-구조)
- [App 모듈별 설명](#app-모듈별-설명)
  - [👨‍💼 User App](#-user-app)
  - [📑 Resume App](#-resume-app)
  - [🔍 Recommend App](#-recommend-app)
  - [🤝 Suggest App](#-suggest-app)
<br/>

# 설치 및 실행

1. GitHub에서 프로젝트를 clone한다.
```sh
git clone https://github.com/Gamja-dori/Gamja-Frontend.git
```

2. 프로젝트 디렉토리로 이동한다.
```sh
cd Gamja-Frontend
```

3. 필요한 패키지를 설치한다.
```sh
npm install --force
```

4. 현재 폴더에 `.env` 파일을 생성한다.
```
REACT_APP_API_URL = ___
```

5. 프로젝트를 실행한다.
```sh
npm start
```

# 기술 스택

## Development
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Recoil](https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white)
![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Sass](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Deploy
![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

# 디렉토리 구조

```
📦public
 ┣ 📂logo
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt
📦src
 ┣ 📂@types
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂icons
 ┃ ┣ 📂images
 ┃ ┗ 📂mock
 ┣ 📂components
 ┃ ┣ 📂aboutuspage
 ┃ ┣ 📂findidpage
 ┃ ┣ 📂findpwpage
 ┃ ┣ 📂infoeditpage
 ┃ ┣ 📂mainpage
 ┃ ┣ 📂mypage
 ┃ ┣ 📂noticepage
 ┃ ┣ 📂resumepage
 ┃ ┣ 📂reviewpage
 ┃ ┣ 📂searchpage
 ┃ ┣ 📂signinpage
 ┃ ┣ 📂signuppage
 ┃ ┣ 📂suggestionpage
 ┃ ┣ 📂utils
 ┃ ┗ 📂_common
 ┃ ┃ ┗ 📂layout
 ┣ 📂pages
 ┣ 📂recoil
 ┣ 📂scss
 ┃ ┣ 📂abstracts
 ┃ ┣ 📂base
 ┃ ┣ 📂components
 ┃ ┣ 📂layout
 ┃ ┣ 📂pages
 ┃ ┣ 📂theme
 ┃ ┗ 📜main.scss
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

# app 모듈별 설명
각 기능은 https://api.dasi-expert.com/swagger 에서 테스트해보실 수 있습니다.

## 👨‍💼 User App
### 개요
| Clova OCR | OpenAI | ElasticSearch |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Backend/assets/100199530/c1cf3604-0b24-40b8-bb7a-fc5e8a6ddff5" alt="Clova OCR" width="700"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Backend/assets/100199530/958a27cd-4237-4e2d-9a91-27abe4fd342c" alt="OpenAI" width="200"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Backend/assets/100199530/9d77bee9-2bbf-49bb-a4bb-e8662026de15" alt="ElasticSearch" width="300"/></p> |
| Clova OCR을 이용해서 기존 이력서로부터 경력사항, 학력사항 정보를 추출했습니다. | OpenAI를 이용하여 기존 이력서로부터 추출된 정보를 json 형식으로 포맷팅했습니다. 또한 작성한 이력서를 바탕으로 전문가 소개를 자동 생성했습니다. | ElasticSearch를 검색 엔진으로 이용하여 데이터 역색인 구조를 바탕으로 기업의 인재 검색 속도를 높였습니다. |
> 1. 사용자 정보 생성, 조회, 수정, 삭제
> 2. jwt 토큰 기반 로그인 상태 관리
> 3. 시니어 전문가 리뷰 관리  
### 상세 기능
- `SeniorUserCreateView`, `EnterpriseUserCreateView`

    시니어, 기업 사용자 생성
- `LoginView`, `LogoutView`
    
    사용자 로그인, 로그아웃

- `UserView`
    
    사용자 정보 조회, 수정, 삭제
- `UserSecretView`
    
    채용 성사 후 사용자의 개인정보 조회
- `ProfileImageView`
    
    사용자의 프로필 사진 조회 및 변경
- `TokenObtainPairView`, `TokenRefreshView`

    jwt 토큰 관리
- `CheckDuplicateView`

    중복된 사용자 id인지 확인
- `CreateReviewView`, `GetReviewListView`, `DeleteReviewView`

    시니어 사용자의 리뷰 등록, 목록 조회, 삭제

## 📑 Resume App
### 개요
> 1. 이력서 생성 및 세부 정보 생성, 조회, 수정, 삭제 
> 2. 기존 이력서에서 OCR로 텍스트 추출하여 반환 
> 3. 기본 이력서 설정, 이력서 복제, 이력서 목록 조회 
### 상세 기능
- `CreateResumeAPIView`, `GetResumeAPIView`, `EditResumeAPIView`, `DeleteResumeAPIView`

    이력서 생성, 조회, 수정, 삭제
- `SubmitResumeAPIView`
    
    인재풀에 이력서 등록
- `SetDefaultResumeAPIView`
    
    기본 이력서 설정
- `CreateResumeDetailAPIView`, `DeleteResumeDetailAPIView`
    
    이력서 상세 항목 생성 및 삭제
- `GetResumeListAPIView`

    이력서 목록 조회
- `ChangeResumeTitleAPIView`
    
    이력서 제목 변경
- `ExtractPriorResumeAPIView`

    기존 이력서에서 경력사항 추출
- `CreateSeniorIntroAPIView`

    작성한 이력서 바탕으로 전문가 소개 생성
- `CopyResumeAPIView`

    기존 이력서 복제 

## 🔍 Recommend App
### 개요
> 1. 인재 추천 AI를 거쳐 추천된 이력서 목록 반환
> 2. 인재 목록 필터링
> 3. 이력서 상세 조회
### 상세 기능
- `MainView`

    인재 추천 메인 화면에서 지금 떠오르는 인재 조회 (조회수 높은 순)
- `SearchView`
    
    인재 추천 및 필터링
- `ResumeDetailView`
    
    이력서 상세 조회

## 🤝 Suggest App
### 개요
> 1. 채용 제안 생성 및 관리 
> 2. 카카오페이와 연동하여 매칭 수수료 결제 
> 3. 채용 성사 여부 및 결제 여부 조회
### 상세 기능
- `CreateSuggestView`

    기업 사용자가 채용 제안 전송
- `GetSeniorListView`, `GetInProgressSeniorListView`,  `GetCompletedSeniorListView`
    
    기업 사용자의 조건별 채용 제안 목록 조회 (전체, 진행 중, 완료됨)
- `GetSuggestDetailView`

    채용 제안의 상세 내용 조회
- `GetNotificationCountView`
    
    새로운 알림 개수 조회
- `GetEnterpriseNotificationsView`

    기업 사용자의 알림창에서 채용 제안 목록 조회
- `GetSeniorNotificationsView`
    
    시니어 사용자의 알림창에서 채용 제안 목록 조회
- `PatchNotificationView`

    채용 제안 열람 여부 갱신
- `GetProgressView`, `UpdateProgressView`

    채용 제안의 상태 조회 및 변경 
    
    - 상태 목록: 'is_pending', 'is_declined', 'is_cancelled', 'is_paid', 'is_accepted', 'is_reviewed'
    
- `PaymentRequestView`, `PaymentApproveView`

    결제 요청 및 승인
- `GetIsPaidView`
    
    결제 완료 여부 조회
