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
  - [🤝 채용 제안 ](#-채용-제안)
  - [👥 회원 정보](#-회원-정보)
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

### 테스트용 이력서 pdf 파일 다운로드
- [이력서 1](https://drive.google.com/file/d/1h0VmAbYwv0TxJZAf2YToHj4HC-jy85pr/view)
- [이력서 2](https://drive.google.com/file/d/16Vgu5TiCNtf04bNLRF3X-U-DX37jK_mG/view)

## 🔍 AI 인재 추천
| AI 인재 추천 | 필터링 | 전문가 상세 |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/360655ac-827a-424a-b3d6-1ac6078df1d7" /></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/1b72c43b-9557-4635-9567-fb477cafb170"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/651fc3ed-9f90-4e80-9be0-cad6417def71"/></p> |

### 개요
> 1. 업무 한 줄 소개로 인재 검색 - 인재 추천 AI를 거쳐 추천된 이력서 목록 반환 (추천 코멘트, 전문가 평점 포함) 
> 2. 희망 근무 조건 및 인재 정보로 인재 목록 필터링
> 3. 추천된 이력서 정렬 (업데이트순, 추천순, 조회수 높은순, 리뷰 높은순)
> 4. 전문가 상세 조회 (이력서, 전문가 소개, 리뷰)

### 상세 기능
- `api/recommends.ts`, `recoil/Recommendation.ts`
  
  AI 인재 추천 관련 api 함수 정의, recoil로 추천 결과 및 전문가 상세 데이터 local storage에 저장 

- `Search.tsx`, `Filter.tsx`, `ResumeLongCard.tsx`
  
  AI 인재 추천 및 필터링 페이지 렌더링
  
- `ResumeDetail.ts`, `ResumeDetailCard.tsx`, `SeniorDetail.tsx`, `SeniorIntro.tsx`, `ShowRecord.tsx`
  
  전문가 상세 페이지(이력서, 전문가 소개, 리뷰 탭) 렌더링

## 🤝 채용 제안
| 채용 제안 | 채용 제안 알림 | 채용 제안 상세 |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/77a1932a-1b30-4a95-8500-daa13ecad8b9" /></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/61854a5e-2a71-4da1-85dc-454d31c0dad2"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/89a993bb-ea21-4dde-8485-a65a75c6f9fb1"/></p> |

| 매칭 수수료 결제 | 전문가 정보 조회 | 리뷰 작성 |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/0bb9944c-0923-4319-8cdb-01889b945c69" /></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/e94cafdb-996d-40fd-9158-b5c69824fdbd"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/008ecd19-3f9e-4c6f-82aa-294257c3eb3c"/></p> |

### 개요
> 1. 채용 제안 생성 및 관리
> 2. 채용 제안 알림 조회 및 수락
> 3. 카카오페이와 연동하여 매칭 수수료 결제 
> 4. 채용 성사 여부 및 결제 여부 조회
> 5. 전문가 연락처 열람 및 리뷰 작성

### 상세 기능
- `api/suggestion.ts`, `recoil/Suggest.ts`
  
  채용 제안 관련 api 함수 정의, recoil로 채용 제안 데이터 local storage에 저장 

- `CancelForm.tsx`, `Detail.tsx`, `SuggestionForm.tsx`, `ManagementItem.tsx`, 
  `ManagementList.tsx`, `ManagementSearch.tsx`, `ManageSelection.tsx`
  
  채용 제안 작성 및 관리 페이지 렌더링 
  
- `NoticeItem.ts`, `NoticeList.tsx`, `NoticeTab.tsx`
  
  채용 제안 알림 페이지 렌더링

- `Payment.ts`, `PaymentComplete.tsx`, `PaidResume.tsx`
  
  결제 및 전문가 상세(연락처 공개) 페이지 렌더링

- `ReviewForm.tsx`, `ReviewItem.tsx`, `ReviewList.tsx`, `ReviewStar.tsx`, `StarRate.tsx`, `TagData.ts`
   리뷰 작성 페이지 렌더링

## 👥 회원 정보
| 회원가입 | 로그인 | 내 정보 |
|---|---|---|
| <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/2a0a69b4-3c35-4dd9-a03d-8b6a8af8a2ee" /></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/12363683-331f-436a-97ac-f360fc5218c6"/></p> | <p align="center"><img src="https://github.com/Gamja-dori/Gamja-Frontend/assets/76518934/46647328-e0f4-4128-bb96-b62ebf331c95"/></p> |

### 개요
> 1. 사용자 정보 생성, 조회, 수정, 삭제
> 2. 사용자 정보로 로그인 - jwt 토큰 기반 로그인 상태 관리
> 3. 내 정보 조회 및 수정 

### 상세 기능
- `api/user.ts`, `api/senior_user.ts`, `api/company_user.ts`, `recoil/Signin.ts`, `recoil/UserProfile.ts`

  회원 정보 관련 api 함수 정의, recoil로 로그인 상태 및 사용자 프로필 데이터 local storage에 저장 

- `SeniorForm.tsx`, `CompanyForm.tsx`, `Terms.tsx`, `TypeContent.tsx`, `UserType.tsx`, `Verification.tsx`, `Complete.tsx`

  회원가입 페이지 렌더링

- `SignInTab.tsx`, `SignInForm.tsx`

  로그인 페이지 렌더링
  
- `Info.ts`, `InfoForm.tsx`, `UserCheckModal.tsx`, `WithdrawalModal.tsx`, `DefaultResume.tsx`

  내 정보 페이지 및 관련 모달 렌더링
