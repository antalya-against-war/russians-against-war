import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { GlobalStyles } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
