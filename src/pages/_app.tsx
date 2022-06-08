import {Global} from '@emotion/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import globalStyles from 'styles/global-styles';
import {ChakraProvider} from '@chakra-ui/react';
import {RecoilRoot} from 'recoil';
import {firestore} from '../firebase';
import {useEffect} from 'react';
function App({Component, pageProps}: AppProps) {
  useEffect(() => {
    console.log(firestore);
  });
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
