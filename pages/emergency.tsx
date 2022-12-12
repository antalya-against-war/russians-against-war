import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Page,
  PageTitle,
} from 'styles/common';

const Emergency: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emergency | Russians against war Antalya</title>
        <meta name="description" content="" />
      </Head>

      <Container>
        <Page>
          <PageTitle>СКОРАЯ ПОМОЩЬ</PageTitle>
        </Page>
      </Container>
    </>
  )
};

export default Emergency;
