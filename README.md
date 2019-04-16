## 프로젝트 셋팅

### 모듈 설치 및 커맨드
- npm install
- npm run serve
- npm run build
- npm run test
- npm run lint

### 구성 내용
- vue-cli를 기반으로 MPA형식의 작업 구성

### 협의 사항
- 작업 진행전 프로젝트 폴더 구조 정의하여 사용하여야 배포용 소스 빌드시 자동화 가능

### 폴더 구조
    |   public
    |       index.html
    |
    |   src
    |       components
    |
    |   css
    |       common.css
    |
    |   pages
    |       main
    |           App.vue
    |           main.js
    |
    |   sub
    |       App.vue
    |       main.js
    |
    |   EventBus.js
    |
    |   vue.config.js
