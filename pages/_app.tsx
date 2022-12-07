import Head from 'next/head';
import Layout from 'components/shared/Layout';
import { GlobalStyles } from 'styles/global';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const navigation = Component.getNavigation?.call(null);

  return (
    <>
      <GlobalStyles />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans"></link>
      <Layout navigation={navigation}>
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
