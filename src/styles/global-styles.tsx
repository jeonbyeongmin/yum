import emotionReset from 'emotion-reset';
import {css} from '@emotion/react';
import {media} from './theme';

const globalStyles = css`
  ${emotionReset}

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

  html {
    font-size: 11px;
    -webkit-text-size-adjust: none;
    font-family: -apple-system, BlinkMacSystemFont, helvetica,
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
