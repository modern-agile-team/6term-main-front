# Crab

### Crab이란?

<img width="317" alt="Logo" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/5852b718-7704-4265-aab7-7301c40b42fa">

> ***“모두가 자유롭게 이용할 수 있는 커뮤니티”
”커뮤니티 내에서의 1대1 실시간 채팅”***
> 

---

Crab은 주 타겟층인 20대 대학생들을 위한 자유로운 커뮤니티로, 1대1 실시간 채팅을 바탕으로 
신나”게” 사용자들과 소통할 수 있는 사이트입니다 😀

## Preview

### 로그인

<img width="252" alt="LoginModal" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/3276aa97-0c25-4144-b83d-340e7c418dab">
Login

📣저희 Crab에서는 자체적인 로그인 없이, 간편한 소셜로그인을 제공해드리고 있습니다 📣
이제 회원분들과 함께 “신나게” 커뮤니티를 즐겨봐요🎵

### 메인페이지

<img width="905" alt="RootPage" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/732104af-f4d3-4fb4-9d55-9f56cd4b0fae">

rootPage

전체 게시판은 모든 게시판의 게시물이 게재되는 곳으로, 이곳에서 한눈에 모든 게시물을 열람할 수 있습니다 😄
여러 카테고리의 게시물들을 함께 살펴보세요!!

- 카드 디자인
- 무한 스크롤 방식

### 검색

<img width="986" alt="Search" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/712745f4-febb-47c7-8a49-a763243f0663">

Search

모든 게시물들을 하나하나 찾는 사용자분들의 고초를 덜어드리는 검색기능 🔎
제목과 본문, 유저들을 검색하며 원하는 내용을 찾아보세요😊

### 게시글

<img width="692" alt="Board" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/daa1b78c-c5af-4abd-9166-2d84a0cd43b9">

Board

원하는 이미지와 텍스트로 자기만의 게시글을 꾸며볼까요 💟
마음에 드는 게시물에는 좋아요도 빼놓을 수 없겠죠? ❤️

### 댓글 & 대댓글

<img width="668" alt="Comment   reComment" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/0bbe9c1d-2db3-4205-905f-6396a66e5752">

comment & reComment

게시글에서 회원분의 의견을 담고싶다면 댓글과 대댓글을 남겨주세요!!
다른 회원분들과의 또다른 소통창구가 될 수 있습니다 😆

### 채팅

<img width="995" alt="채팅" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/2f2c9094-2cac-46ca-8a59-c2ec08596c0e">

chattingPage(미완성 → 주말 안으로 완성)

메인 페이지 우측 하단의 말풍선 아이콘을 클릭했을때의 채팅페이지입니다 💬

이곳에서 사이트의 회원분들과 자유로운 1대1 채팅 서비스를 이용할 수 있어요!!

### 마이페이지

<img width="932" alt="Mypage" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/7b4a7db9-a094-40e3-8460-478a0d1d7f72">

mypage

회원분들의 mypage입니다 🪪
이곳에서 회원의 간단한 정보와 작성한 게시글들을 열람해보세요 🧐

### 한눈에 보기

<img width="731" alt="한눈에 보기" src="https://github.com/modern-agile-team/6term-main-front/assets/117448747/2dc212e3-0816-4948-9842-c9df44fb9bec">

페이지 한눈에 보기

$\large\color{#d6d6d6}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━$

# Development Team

## Technology Stack
<img src="https://img.shields.io/badge/react-#61DAFB?style=for-the-badge&logo=react&logoColor=black" />
## Convention

modern Agile 6기

---

# Funny CRAB

## 프로젝트 소개

- 1 : 1 채팅을 기반으로 한 게시판 만들기 프로젝트 입니다.
- 모던애자일6기 메인프로젝트 입니다.

## 개발기간

- 23.08.21 ~ 24.03.01

### 멤버구성

- 백엔드
  - 이승우
  - 정비호
  - 박준혁
- 프론트엔드
  - 이재진
  - 원동건

---

### 커밋 메시지 컨벤션

`feat` : 새로운 기능 추가

`modify` : 기능 수정

`fix` : 버그 수정

`docs` : 문서 수정

`style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

`refactor` : 코드 리펙토링

`test` : 테스트 코드, 리펙토링 테스트 코드 추가

`chore` : 빌드 업무 수정, 패키지 매니저 수정

`conflict`: 충돌 해결

`publisher` : 페이지 퍼블리싱

예제: `feat(#이슈번호): 커밋내용`

### 브랜치 전략

- `feature/기능이름/(#이슈번호)`

```
  git checkout -b [만들 피처브랜치 명] develop
```

### 폴더,파일 작성 전략

- 디자인패턴 : Atomic Design Pattern
- 구분

```
  [name] : 폴더
  [name].ts/tsx : 동적경로
  name.ts/tsx : 파일
```

- 폴더구조
  ```markup
  ├─ public
  │   └─ images
  └─ src
      ├─ components
      │   ├─ common : 자주사용되는 기능
      │   │   ├─ index.ts
      │   │   └─ [componentName]
      │   │        ├─ styled.tsx
      │   │        ├─ index.ts
      │   │        └─ [componentName].tsx
      │   ├─ molecules : 하나의 기능
      │   ├─ organisms : 여러기능 집합
      │   ├─ templates : 집합이 모여 하나의 페이지구성
      │   └─ veiws : 페이지에 실제 들어갈 데이터보여줌
      ├─ hooks
      │  ├─ index.ts
      │  └─ [hookName]
      │      ├─ [hookName].tsx
      │      └─ index.ts
      ├─ pages
      │   ├─ index.tsx
      │   ├─ _app.tsx
      │   ├─ _document.tsx
      │   └─ [each_page]
      │         └─ index.tsx
      ├─ recoil
      │    ├─ atoms
      │    │   └─ userAtom.ts
      │    └─ selectors
      │        └─ userSelector.ts
      └─ styles
            └─ globals.css
  ```
- dependencies
  ```json
    "@loadable/component": "^5.15.3",
    "@types/loadable__component": "^5.13.5",
    "@types/node": "20.5.4",
    "@types/react": "18.2.21",
    "@types/react-dom": "18.2.7",
    "axios": "^1.5.0",
    "bootstrap": "^5.3.1",
    "dompurify": "^3.0.6",
    "dotenv": "^16.3.1",
    "file-loader": "^6.2.0",
    "loadable": "^1.0.0",
    "next": "13.4.19",
    "next-navigation": "^1.0.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.10.1",
    "react-loadable": "^5.5.0",
    "react-quill": "^2.0.0",
    "react-router-dom": "^6.16.0",
    "react-toastify": "^9.1.3",
    "recoil": "^0.7.7",
    "recoil-persist": "^5.1.0",
    "socket.io-client": "^4.7.2",
    "styled-components": "^6.0.7",
    "typescript": "5.1.6"
  ```
- 폴더 :
  - `post-board`
  - `기능-요소` 순으로 작성
- 파일
  - `.tsx` : UpperCamelCase으로 작성
  - `.ts` : CamleCase작성
