# Yum

<br/>

### π κ°λ° νκ²½μμ μμνκΈ°

```
$ yarn run dev
```

<br/>

### π§ νκ²½ μ€μ κ³Ό κ·μΉ

1. μμ€μ½λ μμΉ `.` μμ `./src` λ‘ μ΄λ. pages, styles λ₯Ό λΉλ‘―ν λͺ¨λ  μ½λ src λ΄μμ μμ±

2. μ λκ²½λ‘ μ¬μ©

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

```js
// μμ€μ½λ λ΄μμ μλμ μμμ²λΌ srcμ νμ λλ ν λ¦¬λΆν° μλ ₯
import Card from 'components/Card';
```

3. prettier μ€μ 

```jsonc
{
  "printWidth": 80, // μ€ λ°κΏ ν­
  "tabWidth": 2, // ν­ λλΉ
  "useTabs": false, // μ€νμ΄μ€ λμ  ν­ μ¬μ©
  "semi": true, // μΈλ―Έμ½λ‘  μ¬μ©
  "singleQuote": true, // μμ λ°μ΄ν μ¬μ©
  "trailingComma": "all", // κΌ¬λ¦¬ μ½€λ§ μ¬μ©
  "bracketSpacing": false, // κ°μ²΄ λ¦¬ν°λ΄μμ κ΄νΈμ κ³΅λ°±
  "arrowParens": "avoid", // νμ΄ν ν¨μ κ΄νΈ μ¬μ© λ°©μ
  "proseWrap": "preserve", // λ§ν¬λ€μ΄ μ€λ°κΏ λ°©μ
  "endOfLine": "auto" // κ°ν λ¬Έμ μ μ§
}
```

<br/>

### π² λλ ν λ¦¬ κ΅¬μ‘° (λ³κ²½ μμ )

```
βββ api
βββ common
βΒ Β  βββ types
βΒ Β  βββ utils
βββ components
βββ hooks
βββ pages
βΒ Β  βββ _app.tsx
βΒ Β  βββ _document.tsx
βΒ Β  βββ index.tsx
βββ styles
    βββ Home.module.css
    βββ globals.css
```

<br/>

### π  μ¬μ©

1. Next.js
2. Emotion
3. recoil
4. react-query

<br/>

### π± media-query μ¬μ©

`theme.ts` μ pc, tablet, mobile μΈ κ°μ§λ‘ λλ μ export ν΄λμμ.

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

μλμ κ°μ΄ μ¬μ©

```js
const Wrapper = styled.div`
  ...
  ${media.tablet} {
    display: none;
    ...
  }
`;
```
