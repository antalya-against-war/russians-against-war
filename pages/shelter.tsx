import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, PageTitle } from 'styles/commonStyles';
import {} from 'styles/shelter';

const Shelter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shelter | Russians against war Antalya</title>
        <meta name="description" content="Shelter for ukrainian refugees and russian activists" />
      </Head>

      <Container>
        <PageTitle>ШЕЛТЕР</PageTitle>
      </Container>
    </>
  )
};

export default Shelter;
