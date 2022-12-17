import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Page,
  PageTitle,
  Title,
  Paragraph,
} from 'styles/common';
import { FeedPageSection } from 'components/shared/FeedPageSection';
import { Feed, FeedItem } from 'components/shared/Feed';

const Communication: NextPage = () => {
  return (
    <>
      <Head>
        <title>Communication | Russians Against War Antalya</title>
        <meta name="description" content="" />
      </Head>

      <Container>
        <Page>
          <PageTitle>ИНФОРМАЦИОННАЯ РАБОТА</PageTitle>

          <FeedPageSection>
            <Title id="feed">События</Title>
            <Feed>
              <FeedItem date="08.12.2022">
                <Paragraph>
                  TODO
                </Paragraph>
              </FeedItem>
            </Feed>
          </FeedPageSection>
        </Page>
      </Container>
    </>
  )
};

export default Communication;
