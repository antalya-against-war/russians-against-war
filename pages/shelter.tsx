import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, PageTitle } from 'styles/commonStyles';
import {} from 'styles/shelter';
import { Section, Text } from 'styles/home';

const Shelter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shelter | Russians against war Antalya</title>
        <meta name="description" content="Shelter for ukrainian refugees and russian activists" />
      </Head>

      <Container>
        <PageTitle>Шелтер</PageTitle>
        <Text>
            Мы принимаем на постоянное жилье украинцев, спасавшихся от войны.
В пригороде Антальи есть 3 комнатная квартира, где размещаются переселенцы.
Сейчас там живут 2 семьи - Денис из Херсона (с женой и ребенком), и мама с 2мя детьми из <город>
Мы закрываем аренду, продукты, одежду, коммуналку для жильцов.
          Полную историю сборов - читайте в <a href="https://t.me/againstwar_antalya_news">канале Антивоенного сообщества</a>      
          </Text>
      </Container>
      
    </>
  )
};

export default Shelter;
