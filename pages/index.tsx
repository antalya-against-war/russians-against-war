import Head from 'next/head';
import Link from 'next/link';
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
              Мы - антивоенное сообщество россиян в Анталии. Мы объединяемся и работаем вместе — против войны и её последствий: помогаем вынужденным переселенцам, поддерживаем митинги, организуем сборы на помощь беженцам в Турции и помощь Украине. 
              Нет войне!          
            </Paragraph>
          </Section>
          <Section>
            <PageTitle>НАПРАВЛЕНИЯ РАБОТЫ</PageTitle>
            <Projects>
              <Project
                title="ЖИЛЬЁ"
                link="/housing"
                description="Шелтер для беженцев с детьми и дружественная аренда"
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
              С идеями и предложениями можно писать нам на <Link href="mailto:antalya_against_war@proton.me" passHref><a target="_blank">почту</a></Link> или присоединиться к <Link href="https://t.me/againstwar_antalya" passHref><a target="_blank">телеграм-чату</a></Link>.
            </Paragraph>
            <Paragraph>
              Если вы не знаете, что делать, но очень хотите участвовать в дейстельности сообщества, присоединяйтесь к чату и заполняйте <Link href="https://forms.gle/3jHmfTq97iFP5hrb6" passHref><a target="_blank">анкету волонтёра</a></Link>. Придумаем что-нибудь вместе 🙂
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
};

export default Home
