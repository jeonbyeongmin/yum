# Yum

<br/>

### 🏁 개발 환경에서 시작하기

```
$ yarn run dev
```

<br/>

### 🚧 환경 설정과 규칙

1. 소스코드 위치 `.` 에서 `./src` 로 이동. pages, styles 를 비롯한 모든 코드 src 내에서 작성

2. 절대경로 사용

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

```js
// 소스코드 내에서 아래의 예시처럼 src의 하위 디렉토리부터 입력
import Card from 'components/Card';
```

3. prettier 설정

```jsonc
{
  "printWidth": 80, // 줄 바꿈 폭
  "tabWidth": 2, // 탭 너비
  "useTabs": false, // 스페이스 대신 탭 사용
  "semi": true, // 세미콜론 사용
  "singleQuote": true, // 작은 따옴표 사용
  "trailingComma": "all", // 꼬리 콤마 사용
  "bracketSpacing": false, // 객체 리터럴에서 괄호에 공백
  "arrowParens": "avoid", // 화살표 함수 괄호 사용 방식
  "proseWrap": "preserve", // 마크다운 줄바꿈 방식
  "endOfLine": "auto" // 개행 문자 유지
}
```

<br/>

### 🌲 디렉토리 구조 (변경 예정)

```
├── api
├── common
│   ├── types
│   └── utils
├── components
├── hooks
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
└── styles
    ├── Home.module.css
    └── globals.css
```

<br/>

### 🛠 사용

1. Next.js
2. Emotion
3. recoil
4. react-query

<br/>

### 📱 media-query 사용

`theme.ts` 에 pc, tablet, mobile 세 가지로 나눠서 export 해두었음.

```js
// theme.ts

const useMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  pc: useMediaQuery(1440),
  tablet: useMediaQuery(768),
  mobile: useMediaQuery(576),
};

export const theme = {
  colors: {
    primary: 'orange',
  },
};
```

#### Usage

아래와 같이 사용

```js
const Wrapper = styled.div`
  ...
  ${media.tablet} {
    display: none;
    ...
  }
`;
```
