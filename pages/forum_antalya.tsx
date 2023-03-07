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
                      content="Russians in Antalya help Ukrainian refugees and Russian political activists in tough situations"/>
            </Head>

            <Container>
                <Page>
                    <PageTitle>АНТИВОЕННЫЙ ФОРУМ</PageTitle>
                    <Paragraph>
                        1-й Антивоенный форум прошел в январе в Анталье и собрал около <b>80</b> участников из разных
                        регионов Турции.
                    </Paragraph>
                    <Paragraph>
                        Спикеры из Анталии, Украины, Сербии, Армении и Литвы представили уникальные кейсы — как
                        объединяться и противостоять войне, как помогать нуждающимся и бороться за мир:

                    </Paragraph>
                    <ul>
                        <li>Гуманитарная аренда (сообщество собирает донаты и на эти деньги оплачивает временное жилье
                            для украинских беженцев)
                        </li>
                        <li>Возможности мини-грантовой поддержки волонтерских антивоенных проектов и опыт организации
                            шелтеров для украинских беженцев и политических активистов
                        </li>
                        <li>Донаты на ВСУ</li>
                        <li>Война от первого лица. Рассказ Димы из Мариуполя о жизни под бомбежками в зоне боевых
                            действий
                        </li>
                        <li>Адресная помощь украинским беженцам, как помогать.</li>
                        <li>Опыт массового вывоза людей, подлежащих мобилизации</li>
                        <li>Почему важно разговаривать с местными в разных странах и как аргументировать свою точку
                            зрения
                        </li>
                        <li>Почему нужно разговаривать со сторонниками войны</li>
                        <li>Война в Украине как следствие шовинизма в России, этноцид меньшинств, Свободная Якутия</li>
                        <li>Как делать агитационные материалы, которые увидят</li>
                        <li>Сопротивление и интеграция через творческие проекты</li>
                        <li>Портал Activatica: информационная поддержка антивоенной деятельности</li>
                        <li>Усиление преследования ЛГБТ в России после начала войны</li>
                    </ul>
                    <Paragraph>
                        Также участники Форума поучаствовали в эфире на канале SOTAvision — <b>Всемирная акция из разных
                        стран «Свободу Навальному и всем политзаключенным»</b>
                    </Paragraph>
                    <Paragraph>
                        После форума, мы определили несколько направлений по развитию инициатив, где каждый желающий,
                        мог присоединиться к подходящей ему рабочей группе и творить антивоенные проекты. По некоторым
                        уже есть интересные и результативные кейсы, остальные в работе.
                    </Paragraph>
                    <Title>
                        Направления работы после 1го форума
                    </Title>
                    <Paragraph>

                    </Paragraph>
                    <ul>
                        <li><i>Творческий чат. Креативим, ищем новые формы антивоенного творчества.</i>
                            <br/>
                            Сделали трансляцию в барах Анталии и Фетхие, благотворительного концерта VOICES OF PEACE
                            прошедшего 24 февраля в Стамбуле (Noize MC и Монеточка), где помимо встречи
                            единомышленников, собрали донаты на благотворительные нужды.
                        </li>
                        <li><i>Помощь ВСУ.</i> На Бога надейся - а на ВСУ донать</li>
                        <li><i>Гуманитарная аренда.</i> Помогаем людям найти жилье</li>
                        <li><i>Блогеры и журналисты. Прокачиваем соцсети для себя и окружающих</i></li>
                        <li><i>Связи с сообществами. </i>
                            Коннектимся с другими инициативами, обмениваемся опытом, опыляем друг друга - и цветем
                        </li>
                        <li><i>Распространение информации об инициативах на концертах и прочих мероприятиях. Общаемся с
                            артистами/площадками/организаторами — и рекламируемся как в последний раз.</i>
                            Распространили мерч сообщества на Забеге Влади (Каста), благотворительном концерт VOICES OF
                            PEACE 24 февраля в Стамбуле (Noize MC и Монеточка), на антивоенном митинге 25 февраля в
                            анталии.
                        </li>
                    </ul>

                    <Paragraph>
                        <h2>Присоединяйтесь на 2-ой Форум, будем рады знакомству! </h2>

                        Если у вас или у вашей команды, есть свой опыт в антивоенном движении, есть мысли, которые вы
                        хотите донести и обсудить — расскажите об этом на Форуме. Ждем участников из других городов
                        Турции и из-за рубежа - виза в Турцию не нужна!

                        <h3>Регистрируйтесь по ссылке как участник или как спикер: <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfomxJocdZNx-">https://docs.google.com/forms/d/e/1FAIpQLSfomxJocdZNx-</a>
                        </h3>

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
                                пережающим россиянам</SectionLink></Link>
                            </li>
                            <li><Link href="https://www.facebook.com/groups/6169338913096340" passHref><SectionLink
                                target="_blank">Facebook</SectionLink></Link>
                            </li>
                            <li><Link href="mailto:antalya_against_war@proton.me" passHref><SectionLink
                                target="_blank">Email</SectionLink></Link>
                            </li>
                        </ul>
                    </Paragraph>
                </Page>
            </Container>
        </>
    )
};

export default Forum;
