import Head from 'next/head';
import Project from 'components/pages/Main/Project';
import { Container, PageTitle } from 'styles/common';
import {
  Section,
  Text,
  Projects,
  FAQQuestion,
  Question,
  Answer,
} from 'styles/home';
import ShelterImage from 'images/shelter.png';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Russians against war Antalya</title>
        <meta name="description" content="Antalya anti-war community" />
      </Head>

      <Container>
        <Section>
          <PageTitle>О НАС</PageTitle>
          <Text>
            Мы - Антивоенное сообщество россиян. Мы объединяемся и работаем вместе - против войны. 
            Мы помогаем раненым, переселенцам войны. Проводим митинги в Турции. Помогаем переезжающим россиянам. Организуем встречи, сборы, и различные проекты. 
            Нет войне!          
          </Text>
        </Section>
        {/* <Section>
          <PageTitle>ПРОЕКТЫ</PageTitle>
          <Projects>
            <Project
              title={`Гайд "How to Turkey"`}
              link="/how-to-turkey"
              description="Хендбук по переезду"
              image={HowToTurkeyImage}
            />
            <Project
              title="Шелтер"
              link="/shelter"
              description="Временное жильё для переселенцев из Украины в сложной ситуации"
              image={ShelterImage}
            />
            
            <Project
              title="Помощь Украине"
              link="/help-for-ukraine"
              description="Гуманитарная помощь пострадавшим от войны"
              image={ShelterImage}
            />
            <Project
              title="Другие проекты"
              link="/other-projects"
              description="Другие проекты"
              image={ShelterImage}
            />
          </Projects>
        </Section>
        <Section>
          <PageTitle>СОБЫТИЯ</PageTitle>
          <Projects>
            <Project
              title="Шелтер"
              link="/shelter"
              description="Временное жильё для беженцев из Украины в сложной ситуации"
              image={ShelterImage}
            />
          </Projects>
        </Section> */}
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
