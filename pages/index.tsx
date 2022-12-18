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
        <title>Russians Against War Antalya</title>
        <meta name="description" content="Antalya anti-war community" />
      </Head>

      <Container>
        <Page>
          <Section>
            <PageTitle>О НАС</PageTitle>
            <Paragraph>
              Мы &#8212; анталийское сообщество неравнодушных граждан РФ, выступающих против войны, которую ведёт наша страна на территории Украины.    
            </Paragraph>
            <Paragraph>
              Мы осуждаем преступления российских властей, развязавших эту войну. Мы осуждаем преступления российских военнослужащих на территории Украины. Мы осуждаем оккупацию и аннексию территорий суверенного государства.
            </Paragraph>
            <Paragraph>
            Наше осуждение переросло в действия. Мы ходим поддерживать украинские митинги и организовываем свои, организовываем сборы средств гуманитарной и военной направленности, поддерживаем россиян, решивших сбежать из страны, объясняем гражданам Турции, что российские власти преступны.
            </Paragraph>
          </Section>
          <Section>
            <PageTitle>НАПРАВЛЕНИЯ РАБОТЫ</PageTitle>
            <Projects>
              <Project
                title="ЖИЛЬЁ"
                link="/housing"
                description="Шелтер для беженцев с детьми и гуманитарная аренда"
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
