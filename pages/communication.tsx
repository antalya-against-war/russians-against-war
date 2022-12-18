import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Page,
  PageTitle,
  Title,
  Paragraph,
  Image,
  IFrame,
} from 'styles/common';
import { FeedPageSection } from 'components/shared/FeedPageSection';
import { Feed, FeedItem } from 'components/shared/Feed';

const Communication: NextPage = () => {
  return (
    <>
      <Head>
        <title>Communication | Russians Against War Antalya</title>
        <meta name="description" content="Russians in Antalya protest against war in Ukraine and explain why putin should be imprisoned" />
      </Head>

      <Container>
        <Page>
          <PageTitle>ИНФОРМАЦИОННАЯ РАБОТА</PageTitle>

          <FeedPageSection>
            <Title id="feed">События</Title>
            <Feed>
              <FeedItem date="07.12.2022">
                <Paragraph>
                  RAW Antalya объявили и взялись за организацию новогодней ёлки для детей из семей, уехавших из Украины с началом войны. Праздник пройдёт 29 декабря. Следите за анонсами в наших социальных сетях.
                </Paragraph>
              </FeedItem>

              <FeedItem date="03.12.2022">
                <Paragraph>
                  Участники RAW Antalya присоединились к митингу в поддержку Украины и осуждения террористических действий России.
                  Как это было &#8212; смотрите в нашем <Link href="https://www.instagram.com/p/CluKS7issPV"><a target="_blank">Instagram</a></Link>.
                  А активистка из Беларуси <Link href="https://www.instagram.com/mguseva_ya"><a target="_blank">Мария</a></Link> написала отдельный <Link href="https://www.instagram.com/reel/ClvcC8DsQU0"><a target="_blank">текст</a></Link>, где рассказала, почему мы все даже спустя 10 месяцев войны продолжаем выходить на митинги.
                </Paragraph>
              </FeedItem>

              <FeedItem date="01.12.2022">
                <Paragraph>
                  Украинский журналист <Link href="https://www.facebook.com/ayder.muzhdabaev"><a target="_blank">Айдер Муждабаев</a></Link>, выступая на Третьей Антивоенной Конференции в Вильнюсе поблагодарил наше сообщество за оказываемую Украине помощь. Полный доклад Айдера смотрите на <Link href="https://www.youtube.com/watch?v=k04KM7DQScQ"><a target="_blank">YouTube</a></Link>.
                </Paragraph>
                <IFrame src="https://www.youtube.com/embed/989v7wP2oW0" title="Ider Muzhdabaev about RAW Antalya" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></IFrame>
              </FeedItem>

              <FeedItem date="29.11.2022">
                <Paragraph>
                  RAW Antalya объявили Форум антивоенных активистов Турции, который пройдёт 21-22 января 2023 года в Анталии, чтобы лично познакомиться и обменяться опытом.
                  Чтобы зарегистрироваться, заполните <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeYdicuZvi9QfOgiqnmasr5Diu_ojszyn1fIzHsEm1l3Sk7Iw/viewform"><a target="_blank">анкету участника</a></Link>.
                </Paragraph>
                <Image alt="Forum of antiwar activists" src="/instagram/v/t51.2885-15/317370734_1305520300284706_3738484827974648469_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fkiv2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=IWQZNWKu0L0AX_haC5i&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4MjM4NjU3NzAzNzA5MjEyNQ%3D%3D.2-ccb7-5&oh=00_AfCNqB9j8K2OZStG4U8QABYitO5ZbRNT1d0B3YnQ4Sr6nw&oe=63A3CB19&_nc_sid=6136e7" />
              </FeedItem>

              <FeedItem date="25.11.2022">
                <Paragraph>
                  Активист RAW Antalya <Link href="https://www.instagram.com/tv/ClY3tzivVNM"><a target="_blank">Вадим</a></Link> встретился с депутатом турецкого парламента Юмитом Оздагом, лидером партии «Победа» (Zafer Partisi), и рассказал об истинных причинах вторжения захватнических войск в Украину.
                  Видео встречи с субтитрами в нашем <Link href="https://www.instagram.com/tv/ClY3tzivVNM"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="29.10.2022">
                <Paragraph>
                  RAW Antalya объявили фотопроект «Турция &#8212; место силы», чтобы у каждого появилась возможность сказать «спасибо» приютившей нас Турции. Лучшие работы будут оформлены в виде открыток и будут участвовать в выставках.
                  Отбором занимается <Link href="https://www.instagram.com/vadimbraydov"><a target="_blank">Вадим</a></Link> &#8212; фотограф, сотрудничающий со многими известными независимыми СМИ.
                  Подробнее о правилах в нашем <Link href="https://www.instagram.com/p/CkPsvRJoez8"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="29.10.2022">
                <Paragraph>
                  29 октября, в день памяти жертв политических репрессий, россияне провели вечер писем политзаключенным. Как это было, можно увидеть в нашем <Link href="https://www.instagram.com/p/Ckf2IS3ojFP"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="28.10.2022">
                <Paragraph>
                  Активисты RAW Antalya <Link href="https://www.instagram.com/mguseva_ya"><a target="_blank">Мария</a></Link> и <Link href="https://www.instagram.com/antonio_cherep"><a target="_blank">Антон</a></Link>,
                  и <Link href="https://www.instagram.com/dlptrdr"><a target="_blank">Дима</a></Link>, проживший месяц в оккупации в Мариуполе и сумевший вырваться в Анталью,
                  дали интервью турецкому политику и журналисту <Link href="https://www.instagram.com/sametbarisokan"><a target="_blank">Барышу Окану</a></Link>, представляющему партию «Победа» (Zafer Partisi), о войне и антивоенном активизме.
                  Подробнее в <Link href="https://www.instagram.com/p/CkPsvRJoez8"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="16.10.2022">
                <Paragraph>
                  Россияне из Антальи и Алании вышли убрать мусор с пляжей, таким образом поблагодарив Турцию за оказанное гостеприимство.
                </Paragraph>
              </FeedItem>

              <FeedItem date="13.10.2022">
                <Paragraph>
                  С активистами RAW Antalya пообщались турецкие журналисты и рассказали о наших акциях протеста и почему мы на них выходим. Подробнее в <Link href="https://www.instagram.com/p/CjpOOggjM66"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="11.10.2022">
                <Paragraph>
                  RAW Antalya пришли поддержать акцию протеста против массированных ракетных обстрелов энергетической инфраструктуры Украины. На этом же акции протеста RAW Antalya объявили о сборе средств среди россиян на поддержанный микроавтобус для нужд ВСУ.
                </Paragraph>
              </FeedItem>

              <FeedItem date="08.10.2022">
                <Paragraph>
                  RAW Antalya вышли на митинг в поддержку Украины. Подробнее в <Link href="https://www.instagram.com/p/CjdzESwjnG3"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="24.09.2022">
                <Paragraph>
                  Вторая акция протеста россиян в Анталии против мобилизации. Подробнее в <Link href="https://www.instagram.com/p/Ci5uT7CjKtX"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="22.09.2022">
                <Paragraph>
                  Россияне в Анталии вышли на митинг против мобилизации. Подробнее в <Link href="https://www.instagram.com/p/CiyM1TMjBjB"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="05.08.2022">
                <Paragraph>
                  Russians Against War Antalya присоединились к митингу, организованном украинским комьюнити. Подробнее в <Link href="https://www.instagram.com/p/Cg5dW9eoXWc"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>

              <FeedItem date="12.06.2022">
                <Paragraph>
                  Россияне в Анталии приняли участие во Всемирной акции российских движений сопротивления бессмысленной войне и путинскому режиму. Подробнее в <Link href="https://www.instagram.com/p/CeultLnKIvZ"><a target="_blank">Instagram</a></Link>.
                </Paragraph>
              </FeedItem>
            </Feed>
          </FeedPageSection>
        </Page>
      </Container>
    </>
  )
};

export default Communication;
