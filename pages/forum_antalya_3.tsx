import type {NextPage} from 'next';
import Link from 'next/link';
import Head from 'next/head';
import {
    Container,
    Page,
    PageTitle,
    Paragraph, Title,
} from 'styles/common';
import {SectionLink} from "components/shared/Layout/components/Footer/styled";

const Forum: NextPage = () => {
    return (
        <>
            <Head>
                <title>Антивоенный форум | Russians Against War Antalya</title>
                <meta name="description"
                      content="RAWS - Russians against war Antalya making 3r anti-war forum"/>
            </Head>

            <Container>
                <Page>
                    <PageTitle>3й АНТИВОЕННЫЙ ФОРУМ</PageTitle>
                    <Paragraph>
                        <b>3-4 июня 2023 года</b> в Анталии пройдёт 3-й Антивоенный форум, организованный Антивоенным
                        сообществом Анталии — RAWA.
                    </Paragraph>
                    <Paragraph>
                        <h3>
                            <a color="blue"
                               href="https://docs.google.com/forms/d/e/1FAIpQLSdZqPctIXXhG51EdP62fpqYnR-ZxR6rrCB5_wL6ksKPZYRlSA/viewform">Зарегистрироваться</a>
                        </h3>

                    </Paragraph>
                    <Paragraph>
                        На прошедших двух форумах приняли участие свыше 130 человек. <br/>
                        Это гражданские активисты, общественно-политические деятели и журналисты из различных стран
                        мира: Турции, Украины, Сербии, Армении, Литвы, России, Германии, Португалии, Грузии. Они
                        представили свои уникальные кейсы — как объединяться, как противостоять войне, как помогать
                        нуждающимся и бороться за мир.


                    </Paragraph>
                    <Paragraph>

                        Наша деятельность приоритетно направлена на создание устойчивого моста между Антивоенным форумом
                        в Анталии и активистами, проживающими по всему миру — в том числе и в России.

                    </Paragraph>
                    <Paragraph>
                        Всех нас объединяет одно — мы <b>ПРОТИВ ВОЙНЫ</b>.
                    </Paragraph>
                    <Paragraph>
                        И мы хотим скорейшего прекращения боевых действий на территории Украины. На это мы тратим силы,
                        время, знания и ваши донаты.
                    </Paragraph>
                    <Paragraph>
                        Мы предоставляем на форуме площадку, на которой люди могут объединиться: рассказать о своем
                        проекте, познакомиться, обменяться опытом и главное — найти единомышленников и поддержку для
                        своей деятельности.
                    </Paragraph>
                    <Paragraph>
                        Мы хотим, чтобы в России сформировалось активное гражданское общество, способное изменить
                        отношение большинства к ценности человеческой жизни и мирному сосуществованию страны с
                        сопредельными государствами. Мы предлагаем путь развития, а не бесконечное топтание в прошлом.
                    </Paragraph>
                    <Paragraph>
                        Очень хорошо понимаем, что этих целей мы сможем достичь только вместе, объединив наши усилия в
                        одном направлении.
                    </Paragraph>
                    <Paragraph>
                        Ждем вас! ВИЗА в Турцию не требуется!
                    </Paragraph>
                    <Paragraph>
                        Если необходимо, организаторы готовы разместить участников форума у наших активистов в Анталии
                        бесплатно. Но проезд и питание осуществляется участниками за свой счёт.
                    </Paragraph>
                    <Paragraph>
                        Мы заботимся о вашей безопасности, поэтому если вы не хотите попадать на фото или против того,
                        чтобы ваше выступление публиковалось в открытых источниках — мы не будем этого делать. Также мы
                        нигде не размещаем информацию о том, кто именно принимал участие на форуме. С особым вниманием к
                        конфиденциальности мы относимся к участникам из России
                    </Paragraph>
                    <Paragraph>
                        Форум готов к сотрудничеству с активистами, которые приехали из России и приняли участие офлайн.
                        Мы окажем методическую поддержку и, при необходимости, поделимся контактами организаций, которые
                        помогут со срочной и безопасной (на сколько это возможно в современных реалиях) индивидуальной
                        релокации.

                    </Paragraph>
                    <Paragraph>
                        Телеграм-канал - <a
                        href="https://t.me/againstwar_antalya_news"></a> https://t.me/againstwar_antalya_news
                    </Paragraph>
                    <Paragraph>
                        Друзья, присоединяйтесь к 3-му Антивоенному форуму! Будем рады знакомству, общению и совместным
                        действиям! </Paragraph>
                    <Paragraph>
                        Если у вас или у вашей команды, есть свой опыт антивоенной деятельности, мысли и идеи, которые
                        вы хотите донести и обсудить — расскажите об этом на форуме.
                    </Paragraph>

                    <Paragraph>
                        <h3>Регистрация участников <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdZqPctIXXhG51EdP62fpqYnR-ZxR6rrCB5_wL6ksKPZYRlSA/viewform">https://docs.google.com/forms/d/e/1FAIpQLSdZqPctIXXhG51EdP62fpqYnR-ZxR6rrCB5_wL6ksKPZYRlSA/viewform</a>
                        </h3>

                    </Paragraph>
                    <Paragraph>
                        До встречи!
                        Команда RAWA.
                    </Paragraph>
                    <Paragraph>

                    </Paragraph>
                    <Paragraph>

                    </Paragraph>
                    Наши контакты:
                    <ul>
                        <li><Link href="https://www.instagram.com/russians_against_war_antalya"
                                  passHref><SectionLink target="_blank">Instagram</SectionLink></Link>
                        </li>
                        <li><Link href="https://t.me/againstwar_antalya_news" passHref><SectionLink
                            target="_blank">Telegram-канал</SectionLink></Link>
                        </li>
                        <li><Link href="https://t.me/againstwar_antalya" passHref><SectionLink
                            target="_blank">Telegram-чат</SectionLink></Link>
                        </li>
                        <li><Link href="https://t.me/rus_antalya" passHref><SectionLink target="_blank">Чат помощи
                            переезжающим россиянам</SectionLink></Link>
                        </li>
                        <li><Link href="https://www.facebook.com/groups/6169338913096340" passHref><SectionLink
                            target="_blank">Facebook</SectionLink></Link>
                        </li>
                        <li><Link href="mailto:antalya_against_war@proton.me" passHref><SectionLink
                            target="_blank">Email</SectionLink></Link>
                        </li>
                    </ul>
                </Page>
            </Container>
        </>
    )
};

export default Forum;
