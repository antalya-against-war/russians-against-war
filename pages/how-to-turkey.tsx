import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head'
import { PageTitle } from 'styles/commonStyles';
import {
  Container,
  HandBook,
  HandbookContent,
  Section,
  SubSection,
  Heading1,
  Heading2,
  Text,
  TableOfContent,
  TableOfContentList,
} from 'styles/howToTurkey';

const HowToTurkey: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <>
      <Head>
        <title>How to Turkey | Russians against war Antalya</title>
        <meta name="description" content="Handbook to settle in Turkey" />
      </Head>

      <Container>
        <PageTitle>ТУРЕЦКИЙ ХЭНДБУК</PageTitle>

        <HandBook>
          <HandbookContent>
            <Section id="buy_sim">
              <Heading1>Покупка SIM карты</Heading1>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Section>
            <Section id="residence">
              <Heading1>Получение ВНЖ</Heading1>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <SubSection id="residence--rent">
                <Heading2>Аренда жилья</Heading2>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </SubSection>
            </Section>
          </HandbookContent>

          <TableOfContent>
            <TableOfContentList>
              <li><a href="#buy_sim">Покупка SIM карты</a></li>
              <li>
                <a href="#residence">Получение ВНЖ</a>
                <ul>
                  <li><a href="#residence--rent">Аренда жилья</a></li>
                </ul>
              </li>
            </TableOfContentList>
          </TableOfContent>
        </HandBook>
      </Container>
    </>
  )
};

export default HowToTurkey;
