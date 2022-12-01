import type { NextPage } from 'next';
import Head from 'next/head';
import Project from 'components/Project';
import { Container, PageTitle } from 'styles/commonStyles';
import { Section, Text, Projects } from 'styles/home';

import HowToTurkeyImage from 'images/how-to-turkey.png';
import ShelterImage from 'images/shelter.png';

const Home: NextPage = () => {
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
        <Section>
          <PageTitle>НАШИ ПРОЕКТЫ</PageTitle>
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
              title="Скорая помощь"
              link="/skoraya"
              description="Помогаем в острых ситуациях"
              image={ShelterImage}
            />
            <Project
              title="Помощь Украине"
              link="/help-for-ukraine"
              description="Гуманитарная помощь пострадавшим от войны"
              image={ShelterImage}
            />
          </Projects>
        </Section>
        <Section>
          <PageTitle>ДРУГАЯ ИНФОРМАЦИЯ</PageTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Section>
      </Container>
    </>
  )
}

export default Home
