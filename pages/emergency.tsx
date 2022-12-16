import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import {
  Container,
  Page,
  PageTitle,
  Paragraph,
} from 'styles/common';

const Emergency: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emergency | Russians against war Antalya</title>
        <meta name="description" content="Fund for emergency situations" />
      </Head>

      <Container>
        <Page>
          <PageTitle>СКОРАЯ ПОМОЩЬ</PageTitle>
          <Paragraph>
            Люди, бегущие от войны или репрессий, далеко не всегда это делают подготовленными и с достаточным запасом денег. К тому же всегда могут настигнуть непредвиденные обстоятельства: проблемы со здоровьем, отсутствие жилья и денег, невозможность добраться до родственников за границей и прочее.
            Для таких целей силами сообществом был сформирован фонд <b>&quot;Скорая помощь&quot;</b>, цель которого дать человеку в беде время на передышку и возможность придумать дальнейший план действий.
          </Paragraph>
          <Paragraph>
            Важный момент: это фонд <b><i>не</i></b> постоянной поддержки, а оказания <b><i>срочной помощи</i></b>. Средства фонда уже применялись на:
          </Paragraph>
          <ul>
            <li>оплату хостелов;</li>
            <li>оплату приёмов врача;</li>
            <li>оплату лекарств;</li>
            <li>оплату минимально необходимой одежды и предметов личной гигиены;</li>
            <li>оплату еды.</li>
          </ul>
          <Paragraph>
            Если вы или ваш знакомый оказались в экстренной ситуации, обращайтесь за помощью в <Link href="https://t.me/againstwar_antalya" passHref><a target="_blank">чат сообщества</a></Link> в Telegram. Мы обязательно придумаем как вам помочь.
          </Paragraph>
          <Paragraph>
            Для оказания поддержки фонду пишите <Link href="https://t.me/antonlyaptsev" passHref><a target="_blank">Антону</a></Link> в Telegram.
            Все финансовые операции учитываются и предоставляются по запросу, но донаты записываются анонимно.
          </Paragraph>
        </Page>
      </Container>
    </>
  )
};

export default Emergency;
