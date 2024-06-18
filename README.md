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
- [페이지별 설명](#페이지별-설명)
  - [🔄 메인 페이지 ](#-메인-페이지)
  - [📑 인재풀 등록 ](#-인재풀-등록)
  - [🔍 AI 인재 추천 ](#-AI-인재-추천)
      - [ AI 인재 추천 페이지](#-AI-인재-추천-페이지)
      - [ 전문가 상세 페이지](#-전문가-상세-페이지)
  - [🤝 채용 제안 ](#-채용-제안)
      - [ 채용 제안 페이지](#-채용-제안-페이지)
      - [ 채용 제안 알림 페이지](#-채용-제안-알림-페이지)
      - [ 수수료 결제 페이지](#-수수료-결제-페이지)
      - [ 채용 제안 관리 페이지](#-채용-제안-관리-페이지)
      - [ 리뷰 작성 페이지](#-리뷰-작성-페이지)
  - [👥 회원 정보](#-회원-정보)
      - [ 회원가입 페이지](#-회원가입-페이지)
      - [ 로그인 페이지](#-로그인-페이지)
      - [ 아이디/비밀번호 찾기 페이지](#-아이디/비밀번호-찾기-페이지)
      - [ 마이 페이지](#-마이-페이지)
      - [ 기본정보 수정 페이지](#-기본정보-수정-페이지)
  - [💁🏻‍♀️ About Us 페이지](#-About-Us-페이지)
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

# 페이지별 설명
[https://www.dasi-expert.com/](https://www.dasi-expert.com/) 에서 직접 테스트해보실 수 있습니다.

## 🔄 메인 페이지
### 개요
> 1. 슬라이드 배너 및 기능별 버튼 노출
> 2. 상단 네비게이션 바로 알림, 로그인 접근
> 3. 로그인 상태에 따라 '로그인/회원가입', '내 정보' 버튼 전환 
### 상세 기능
- `Content.tsx,`, `Contents.tsx`, `MainBanner.tsx`, `MainPage.tsx`
  
  슬라이드 배너 및 메인 페이지 전체 렌더링
- `Header.tsx`, `Footer.tsx`,
  
  상단 네비게이션 바 및 푸터 렌더링 

## 📑 인재풀 등록 
| 이력서 관리 | 인재풀 등록-이력서 | 인재풀 등록-전문가 소개 |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/101141e4-4145-41aa-b92f-1328de9c9364" /></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/6384206d-38c5-4488-8cfe-9b1343866317"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/a0351408-9ee1-497e-93c5-931d5bd981ae"/></p> |

### 개요
> 1. 이력서 목록 조회 및 새 이력서 생성 및 삭제, 이력서 이름 변경, 이력서 복제, 기본 이력서로 설정 
> 2. 이력서 세부 정보 생성, 조회, 수정, 삭제 
> 3. 기존 이력서에서 OCR로 텍스트 추출하여 반환
> 4. 직군 및 직무, 총 경력, 희망 근무 조건 등 인재 정보 입력  
> 5. 작성한 이력서 바탕으로 전문가 소개 생성

### 상세 기능
- `api/resume.ts`, `recoil/Resume.ts`
  
  이력서 관련 api 함수 정의, recoil로 이력서 데이터 local storage에 저장 

- `ResumeCard.tsx`, `ResumeList.tsx`
  
  이력서 관리 페이지 렌더링
  
- `ResumeData.ts`, `ResumeEdit.tsx`, `ResumeInput.tsx`, `ResumeIntro.tsx`
  
  인재풀 등록 페이지(이력서, 전문가 소개 탭) 렌더링 
