# Funny CRAB

## 프로젝트 소개

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
git checkout -b [만들 피처브랜치 명] develop

### 폴더,파일 작성 전략

- 디자인패턴 : Atomic Design Pattern
- 폴더구조
    
    ```markup
    ├─ public
     └─ src
        ├─ assets
        │   └─ images
        ├─ pages
        │   └─ [PageName].tsx
        ├─ components
        │   ├─ common
        │   │   ├─ index.ts
        │   │   └─ [componentName]
        │   │        ├─ styled.tsx
        │   │        ├─ index.ts
        │   │        └─ [componentName].tsx
        │   │
        │   └─ [PageName]
        │        ├─ index.ts
        │        └─ [componentName]
        │            ├─ styled.tsx
        │            ├─ index.ts
        │            └─ [componentName].tsx
        ├─ hooks
        │  ├─ index.ts
        │  └─ [hookName]
        │      ├─ [hookName].tsx
        │      └─ index.ts
        └─ redux
            ├─ index.ts
            ├─ store.ts
            ├─ reducer.ts
            └─ slices
                 ├─ index.ts
                 └─ [sliceName]
                     ├─ [sliceName].ts
                     └─ index.ts
    ```
    
- dependencies
    
    ```json
    "next": "13.4.19",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "styled-components": "^6.0.7",
    "typescript": "5.1.6",
    "axios": "^1.4.0",
    "recoil": "^0.7.7",
    ```
    
- 폴더 : `post-board`
    
    `기능-요소` 순으로 작성
    
- 파일
    
    `.tsx` : UpperCamelCase
    
    `.ts` : CamleCase
