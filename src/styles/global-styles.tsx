import emotionReset from 'emotion-reset';
import {css} from '@emotion/react';
import {media} from './theme';

const globalStyles = css`
  ${emotionReset}
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }
  @font-face {
    font-family: 'Binggrae';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/Binggrae-Bold.woff2')
      format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Binggrae';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Binggrae.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 11px;
    -webkit-text-size-adjust: none;
    font-family: -apple-system, Noto Sans KR, BlinkMacSystemFont, helvetica,
      Apple SD Gothic Neo, sans-serif;
    font-display: fallback;
    ${media.tablet} {
      font-size: 10px;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    &:disabled {
      cursor: default;
      fill: #f2f3f4;
    }
  }

  .pc-tablet-only {
    display: block;
    ${media.mobile} {
      display: none;
    }
  }
  .tablet-mobile-only {
    display: none;
    ${media.tablet} {
      display: block;
    }
  }
  .mobile-only {
    display: none;
    ${media.mobile} {
      display: block;
    }
  }
`;

export default globalStyles;
