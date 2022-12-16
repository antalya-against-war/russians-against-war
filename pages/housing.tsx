import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Page,
  PageTitle,
  Paragraph,
  IFrame,
  Title,
} from 'styles/common';

const Housing: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Housing | Russians against war Antalya</title>
        <meta name="description" content="Shelter for ukrainian refugees and friendly rent" />
      </Head>

      <Container>
        <Page>
          <PageTitle>ЖИЛЬЁ</PageTitle>

          <Title id="shelter">Шелтер</Title>
          <Paragraph>
            В конце сентября 2022 года мы запустили шелтер. Он представляет собой 3-комнатную квартиру в Кумлудже — прибрежном городе примерно в 75 километрах от Антальи. Шелтер полностью оплачен и обставлен силами комьюнити.
          </Paragraph>
          <IFrame src="https://www.youtube.com/embed/BucHT6pSqIU" title="Shelter launch" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <Paragraph>
            Мы принимаем на постоянное жилье украинцев, спасавшихся от войны. Сейчас там живут 2 семьи: семейная пара с ребёнком из Херсона и мама с двумя детьми из Николаева.
          </Paragraph>
          <Paragraph>
            Мы закрываем аренду, продукты, одежду, коммунальные платежи для жильцов.
          </Paragraph>
          <Paragraph>
            Для оказания финансовой помощи в содержании шелтера писать <Link href="https://t.me/antonlyaptsev" passHref><a target="_blank">Антону</a></Link> в Telegram. Все финансовые операции учитываются и предоставляются по запросу, но донаты записываются анонимно.
          </Paragraph>
          
          <Title id="rent">Дружественная аренда</Title>
          <Paragraph>
            Разместить всех нуждающихся в шелтере не получится. Понимая эту проблему, мы запустили проект &quot;Дружественная аренда&quot;, задачей которого является соединить людей, которые:
          </Paragraph>
          <ul>
            <li>готовы временно подселить к себе нуждающихся на возмездной (но ниже рынка) или безвозмездной основе;</li>
            <li>нуждаются во временном жилье.</li>
          </ul>
          <Paragraph>
            В случае возмездного варианта подселения мы готовы компенсировать до 3000 лир расходов из фонда <Link href="/emergency">&quot;Скорая помощь&quot;</Link>.
          </Paragraph>
          <Paragraph>
            Если вы хотите помочь жильём или сами нуждаетесь в помощи — пишите <Link href="https://t.me/rakshakti" passHref><a target="_blank">Анастасии</a></Link> в Telegram.
          </Paragraph>
        </Page>
      </Container>
      
    </>
  )
};

Housing.getNavigation = function getNavigation () {
  return [
    { title: 'ШЕЛТЕР', link: '#shelter' },
    { title: 'АРЕНДА', link: '#rent' },
  ];
};

export default Housing;
