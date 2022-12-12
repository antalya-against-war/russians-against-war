import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Page,
  PageTitle,
  Paragraph,
} from 'styles/common';

const Shelter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shelter | Russians against war Antalya</title>
        <meta name="description" content="Shelter for ukrainian refugees and russian activists" />
      </Head>

      <Container>
        <Page>
          <PageTitle>ШЕЛТЕР</PageTitle>
          <Paragraph>
              Мы принимаем на постоянное жилье украинцев, спасавшихся от войны.
  В пригороде Антальи есть 3 комнатная квартира, где размещаются переселенцы.
  Сейчас там живут 2 семьи - Денис из Херсона (с женой и ребенком), и мама с 2мя детьми из Николаева
  Мы закрываем аренду, продукты, одежду, коммуналку для жильцов.
            Полную историю сборов - читайте в <a href="https://t.me/againstwar_antalya_news">канале Антивоенного сообщества</a>      
            </Paragraph>
        </Page>
      </Container>
      
    </>
  )
};

export default Shelter;
