import { useEffect, useState, useCallback, MouseEventHandler } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image';
import { PageTitle } from 'styles/commonStyles';
import scrollTopImage from 'images/top-arrow.png';
import menuImage from 'images/menu-burger.png';
import closeImage from 'images/close.png';
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
  TableOfContentTitle,
  TableOfContentClose,
  TableOfContentList,
  TableOfContentsButton,
  ScrollTopButton,
} from 'styles/howToTurkey';

const HowToTurkey: NextPage = () => {
  const [isTOCActive, setTOCActive] = useState(false);

  const onOpenTOCClick = useCallback(() => {
    setTOCActive(true);
  }, []);

  const onCloseTOCClick = useCallback(() => {
    setTOCActive(false);
  }, []);

  const onTOCItemClick = useCallback<MouseEventHandler>((e) => {
    if (window.innerWidth > 768) return;

    if ((e.target as Element).tagName === 'A') {
      setTOCActive(false);
    }
  }, []);

  useEffect(() => {
    const scrollButton = document.querySelector('#scroll-to-top');

    const navigationObserver = new IntersectionObserver(entries => {
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

    const scrollObserver = new IntersectionObserver(entries => {
      if (entries[0].boundingClientRect.height + entries[0].boundingClientRect.y < 0) {
        scrollButton!.classList.add('active');
      } else {
        scrollButton!.classList.remove('active');
      }
    });
    
    document.querySelectorAll('section[id]').forEach((section) => {
      navigationObserver.observe(section);
    });
    scrollObserver.observe(document.querySelector('section[id]')!);

    return () => {
      navigationObserver.disconnect();
      scrollObserver.disconnect();
    }
  }, []);

  return (
    <>
      <Head>
        <title>How to Turkey | Russians against war Antalya</title>
        <meta name="description" content="Handbook to settle in Turkey" />
      </Head>

      <Container>
        <PageTitle id="page-title">ТУРЕЦКИЙ ХЭНДБУК</PageTitle>

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

          <TableOfContent className={isTOCActive ? 'active' : ''} onClick={onTOCItemClick}>
            <TableOfContentTitle>Содержание</TableOfContentTitle>
            <TableOfContentClose onClick={onCloseTOCClick}>
              <Image src={closeImage} alt="Close table of contents" />
            </TableOfContentClose>
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

        <TableOfContentsButton onClick={onOpenTOCClick}>
          <Image src={menuImage} alt="Open table of contents" />
        </TableOfContentsButton>
        <ScrollTopButton id="scroll-to-top" href="#page-title">
          <Image src={scrollTopImage} alt="Scroll top" />
        </ScrollTopButton>
      </Container>
    </>
  )
};

export default HowToTurkey;
