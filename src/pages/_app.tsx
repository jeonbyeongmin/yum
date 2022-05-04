import {Global} from '@emotion/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import globalStyles from 'styles/global-styles';

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>boilerplate</title>
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
