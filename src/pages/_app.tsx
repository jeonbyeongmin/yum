import {Global} from '@emotion/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import globalStyles from 'styles/global-styles';
import {ChakraProvider} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import initAuth from '../initAuth';

initAuth();

function App({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>boilerplate</title>
        </Head>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
