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
            <Section id="enter_turkey">
              <Heading1>Въезд в Турцию</Heading1>
              <Text>
                Между Россией и Турцией установлен безвизовый режим.
                Граждане РФ могут въезжать на территорию Турецкой Республики без визы на срок пребывания до 60 дней непрерывно.
                При этом пребывание российских граждан в Турции не должно превышать 90 дней за период 180 дней.
              </Text>
              <Text>
                Для въезда потребуется заграничный паспорт с минимальным сроком действия 120 дней со дня въезда на территорию Турецкой Республики.
                Требования сведений о вакцинации от COVID-19, перенесённом заболевании или отрицательного ПЦР-теста отменено с <a href="http://moscow.emb.mfa.gov.tr/Mission/ShowAnnouncement/387264" target="__blank" >1 июня 2022 года</a>.
              </Text>
              <Text>
                Для более длительного пребывания есть возможность оформления туристического ВНЖ на основании договора аренды недвижимости.
              </Text>
              <SubSection id="enter_turkey--pets">
                <Heading2>Домашние животные</Heading2>
                <Text>
                  Для того, чтобы привезти с собой своих четвероногих друзей требуется:
                  <ul>
                    <li>Ветеринарный паспорт международного образца</li>
                    <li>Чип. Важно: чип должен быть поставлен до вакцинации.</li>
                    <li>Общие прививки</li>
                    <li>Прививка от бешенства сроком не позднее 1 года. Тут стоит обратить внимание, что с момента последней прививки должно пройти не менее 21 дня.</li>
                    <li>Ветеринарное свидетельство. Оно действует короткий срок (около 5 дней) и получается незадолго до вылета. Получить его можно в городской ветеринарной станции.</li>
                    <li>Ветеринарный контроль в аэропорту. Это может занять некоторое время, поэтому приезжайте в аэропорт заранее. Либо можно пройти его за день-два до вылета.</li>
                  </ul>
                  Ветеринары про все необходимые прививки знают. Просто скажите, что летите за границу.
                </Text>
              </SubSection>
            </Section>
            <Section id="documents">
              <Heading1>Документы</Heading1>
              <Text>
                Рекомендуется подготовить и взять с собой следующие документы:
                <ul>
                  <li>Заграничный паспорт, действительный ещё 120 дней на момент въезда. Заменить паспорт, у которого заканчивается срок действия, можно уже непосредственно в Турции в российском консульстве.</li>
                  <li>Свидетельство о рождении с апостилем. Может понадобиться в случае смены личных данных или регистрации брака вне РФ.</li>
                  <li>Свидетельство о заключении брака с апостилем. Может понадобиться для получения страховок, получения налоговых преференций, рождении детей вне РФ.</li>
                  <li>Диплом с апостилем. Может понадобиться, если Турция является перевалочным пунктом в Европу, для подтверждения образования.</li>
                  <li>Справка об отсутствиии судимости с апостилем. Тоже нужен только для переезда дальше. Обратите внимание, что эта справка действует только 3 месяца</li>
                </ul>
                <b>Апостиль</b> - это штамп установленного образца на официальном документе, удостоверяющий его подлинность. Апостиль ставится ТОЛЬКО в стране выдачи. Поставить апостиль на документ, выданный в другой стране - нельзя.
              </Text>
              <Text>
                Если вы переехали в другую страну, но в спешке забыли поставить апостили на какие-либо важные для вас документы, или вообще их забыли, то можно сделать запрос в консульство за ними. Документы, выданные консульством, не нуждаются в апостилировании (полезно для справок о несудимости, которые имеют малый срок жизни).
              </Text>
              <SubSection id="documents--proxy">
                <Heading2>Доверенность</Heading2>
                <Text>
                  Не менее важным перед отъездом может оказаться оформление нотариальной доверенности с широкими полномочиями на родстенника или любое другое доверенное лицо. Это позволит человеку представлять ваши интересы в России без необходимости туда возвращаться. Делается у нотариуса.
                </Text>
                <Text>
                  Если же вы уже уехали из страны, то варианта 2:
                  <ol>
                    <li>Оформить доверенность в российском консульстве или посольстве за границей. Доверенность будет оформлена сразу на русском языке и будет иметь юридическую силу в России.</li>
                    <li>
                      Воспользоваться услугами местых нотариусов. Вам потребуется оформить доверенность на местном языке, заверить её у нотариуса и легализовать (поставить апостиль). 
                      После этого готовую доверенность можно пересылать в Россию. В России нужно сделать нотариальный перевод иностранной доверенности. Только после этого доверенность готова к использованию. <br/>
                      Итого: доверенность на местном языке {'=>'} заверение у местного нотариуса {'=>'} местный апостиль {'=>'} отправка домой {'=>'} перевод на русский язык.
                    </li>
                  </ol>
                  Проблема первого варианты в том, что сейчас посольства и консульства перегружены, и получение необходимых документов может занять несколько месяцев. Проблема второго в цене: переводы недешёвые.
                </Text>
              </SubSection>
            </Section>
            <Section id="communication">
              <Heading1>SIM-карты</Heading1>
              <Text></Text>
            </Section>
          </HandbookContent>

          <TableOfContent className={isTOCActive ? 'active' : ''} onClick={onTOCItemClick}>
            <TableOfContentTitle>Содержание</TableOfContentTitle>
            <TableOfContentClose onClick={onCloseTOCClick}>
              <Image src={closeImage} alt="Close table of contents" />
            </TableOfContentClose>
            <TableOfContentList>
              <li>
                <a href="#enter_turkey">Въезд в Турцию</a>
                <ul>
                  <li><a href="#enter_turkey--pets">Ввоз домашних животных</a></li>
                </ul>
              </li>
              <li>
                <a href="#documents">Документы</a>
                <ul>
                  <li><a href="#documents--proxy">Доверенность</a></li>
                </ul>
              </li>
              <li><a href="#communication">SIM-карты</a></li>
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
