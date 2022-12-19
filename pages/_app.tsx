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
          
          {process.env.NODE_ENV !== 'development' && (
            <script defer data-domain="raw-antalya.info" src="https://plausible.io/js/script.js"></script>
          )}
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
