import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Page,
  PageTitle,
  Paragraph,
  Title,
  IFrame,
} from 'styles/common';
import { FeedPageSection } from 'components/shared/FeedPageSection';
import { Feed, FeedItem } from 'components/shared/Feed';
import { Accordion, AccordionItem } from 'components/shared/Accordion';

const Ukraine: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Help for Ukraine | Russians against war Antalya</title>
        <meta name="description" content="" />
      </Head>

      <Container>
        <Page>
          <PageTitle>ПОМОЩЬ УКРАИНЕ</PageTitle>
          
          <FeedPageSection>
            <Title id="feed">События</Title>
            <Feed>
              <FeedItem date="08.12.2022">
                <Paragraph>
                  Закончили сбор и доставили генератор в Дом инвалида в городе Брацлав. С покупкой помогал <Link href="https://www.facebook.com/val.bee.5458"><a target="_blank">Валдас Барткевичюс</a></Link>.
                  Принимал и распределял фонд <Link href="https://uafriendsfoundation.org/"><a target="_blank">&quot;Фонд Друзей Украины&quot;</a></Link>. Один из его лидеров — <Link href="https://www.facebook.com/anton.gulidin.10"><a target="_blank">Антон Гулидин</a></Link> — поблагодарил за помощь:
                </Paragraph>
                <IFrame src="https://www.youtube.com/embed/afDHzN4W2Qo" title="First generator" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IFrame>
                <Paragraph>
                  Стоимость генератора состовила 1500 евро. Средства были собраны сообществом россиян и беларусов в Анталье.
                </Paragraph>
              </FeedItem>

              <FeedItem date="30.11.2022">
                <Paragraph>
                  Закончили сбор и купили следующий микроавтобус IVECO. С покупкой нам, как и ранее, помогал <Link href="https://www.facebook.com/val.bee.5458"><a target="_blank">Валдас Барткевичюс</a></Link>.
                  При посредничестве <Link href="https://www.facebook.com/ayder.muzhdabaev"><a target="_blank">Айдера Муждабаева</a></Link> микроавтобус будет передан в батальон имени Номана Челебиджихана.
                </Paragraph>
                <IFrame src="https://www.youtube.com/embed/zuqdcJtrbDw" title="Second bus" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IFrame>
                <Paragraph>
                  Как и ранее, микроавтобус будет использован для гуманитарных целей и не будет принимать участие в непосредственных боевых действиях, но будет помогать согреваться защитникам Украины и вовремя доставлять раненых в госпитали.
                </Paragraph>
                <Paragraph>Стоимость автомобиля составила 2500 евро. Средства были собраны сообществом россиян и беларусов в Анталье.</Paragraph>
              </FeedItem>
              
              <FeedItem date="25.10.2022">
                <Paragraph>Закончили сбор и доставили в Украину микроавтобус Ford Transit. Машина уже передана в подразделение ВСУ. Видеодневник доставки:</Paragraph>
                <IFrame src="https://www.youtube.com/embed/o8dqj0l8RPI" title="First bus" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IFrame>
                <Paragraph>
                  С доставкой нам помогает <Link href="https://www.facebook.com/val.bee.5458"><a target="_blank">Валдас Барткевичюс</a></Link> — помощник депутата литовского сейма.
                </Paragraph>
                <Paragraph>
                  Микроавтобус будет использован для гуманитарных целей: эвакуация раненых, место для обогрева, «центр отдыха», доставка еды, одежды, дров и т.д.
                </Paragraph>
                <Paragraph>
                  Стоимость автомобиля с доставкой составила 3500 евро. Средства были собраны сообществом россиян и беларусов в Анталье.
                </Paragraph>
              </FeedItem>
            </Feed>
          </FeedPageSection>
          
          <FeedPageSection>
            <Title id="faq">Частые вопросы</Title>
            <Accordion>
              <AccordionItem question="Вопрос 1">
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
              </AccordionItem>
              <AccordionItem question="Вопрос 2">
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
              </AccordionItem>
              <AccordionItem question="Вопрос 3">
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
              </AccordionItem>
              <AccordionItem question="Вопрос 4">
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
                <Paragraph>Мы сообщество граждан РФ, несогласных с бла-бла-бла и уехавших из-за несогласия с политикой бла-бла-бла, чтобы безопасно вести активистскую деятельность. Мы выходим на митинги и помогаем переехавшим. За правильным текстом о позиционировании к Ане</Paragraph>
              </AccordionItem>
            </Accordion>
          </FeedPageSection>
        </Page>
      </Container>
    </>
  )
};

Ukraine.getNavigation = function getNavigation () {
  return [
    { title: 'СОБЫТИЯ', link: '#feed' },
    { title: 'ЧАСТЫЕ ВОПРОСЫ', link: '#faq' },
  ];
}

export default Ukraine;
