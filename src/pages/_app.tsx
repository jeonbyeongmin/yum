import {Global} from '@emotion/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import reset from 'styles/reset';

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
