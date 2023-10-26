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
