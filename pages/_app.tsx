import Head from 'next/head';
import Layout from 'components/shared/Layout';
import { GlobalStyles } from 'styles/global';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const navigation = Component.getNavigation?.call(null);

  return (
    <>
      <GlobalStyles />
      <Layout navigation={navigation}>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
