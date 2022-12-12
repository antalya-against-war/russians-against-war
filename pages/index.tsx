import Head from 'next/head';
import Project from 'components/pages/Home/Project';
import ShelterImage from 'components/pages/Home/images/shelter.png';
import EmergencyImage from 'components/pages/Home/images/emergency.png';
import UkraineImage from 'components/pages/Home/images/ukraine.png';
import CommunicationImage from 'components/pages/Home/images/communication.png';
import {
  Container,
  Page,
  PageTitle,
  Paragraph,
} from 'styles/common';
import { Section, Projects } from 'components/pages/Home';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Russians against war Antalya</title>
        <meta name="description" content="Antalya anti-war community" />
      </Head>

      <Container>
        <Page>
          <Section>
            <PageTitle>О НАС</PageTitle>
            <Paragraph>
              Мы - Антивоенное сообщество россиян. Мы объединяемся и работаем вместе - против войны. 
              Мы помогаем раненым, переселенцам войны. Проводим митинги в Турции. Помогаем переезжающим россиянам. Организуем встречи, сборы, и различные проекты. 
              Нет войне!          
            </Paragraph>
          </Section>
          <Section>
            <PageTitle>НАПРАВЛЕНИЯ РАБОТЫ</PageTitle>
            <Projects>
              <Project
                title="ШЕЛТЕР"
                link="/shelter"
                description="Временное жильё для беженцев с детьми и дружественная аренда"
                image={ShelterImage}
              />
              <Project
                title="СКОРАЯ ПОМОЩЬ"
                link="/emergency"
                description="Материальная помощь беженцам и преследуемым активистам"
                image={EmergencyImage}
              />
              
              <Project
                title="ПОМОЩЬ УКРАИНЕ"
                link="/ukraine"
                description="Сборы на автомобили и генераторы, и доставка их в Украину"
                image={UkraineImage}
              />
              <Project
                title="ОБЩЕНИЕ"
                link="/communication"
                description="Просветительская работа о преступности путинской войны"
                image={CommunicationImage}
              />
            </Projects>
          </Section>
          <Section>
            <PageTitle>ПОСЛЕДНИЕ НОВОСТИ</PageTitle>
            <Paragraph>
              Лента инстаграм
            </Paragraph>
          </Section>
          <Section>
            <PageTitle>ХОТИТЕ ПОМОЧЬ?</PageTitle>
            <Paragraph>
              С идеями, предложениями, you name it можно обращаться по почте bla.bla@gmail.com или написать в телеграм-чат. А также заполнить анкету волонтера   
            </Paragraph>
          </Section>
        </Page>
      </Container>
    </>
  )
}

Home.getNavigation = function getNavigation () {
  return [
    { title: 'О НАС', link: '#about' },
    { title: 'ДЕЯТЕЛЬНОСТЬ', link: '#projects' },
    { title: 'ПОМОЩЬ', link: '#help' },
  ];
}

export default Home
