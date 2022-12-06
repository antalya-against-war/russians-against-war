import {Container, PageTitle} from 'styles/commonStyles';

import {useEffect, useState, useCallback, MouseEventHandler} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head'
import Image from 'next/image';
import scrollTopImage from 'images/top-arrow.png';
import menuImage from 'images/menu-burger.png';
import closeImage from 'images/close.png';
import {
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

const UkraineHelp: NextPage = () => {
    return (
        <>
            <Head>
                <title>HelpUkraint | Russians against war Antalya</title>
                <meta name="description" content="Help to ukrainians"/>
            </Head>

            <Container>
                <PageTitle>Помощь Украине</PageTitle>
                <HandBook>
                    <HandbookContent>
                        <Section id="bus_1">
                            <Heading1>Бус для перевозки раненых - сделано</Heading1>
                            <Text>
                                Россияне в Анталии собрали и отправили в Украину БУС для ВСУ!
                                Машина уже на месте.
                            </Text>
                            <Text>
                                <a href="https://youtu.be/o8dqj0l8RPI">Смотрите в видео, как это было:</a>
                                <a href="https://t.me/againstwar_antalya_news/60">Кадры доставки буса в Украину</a>
                                <a href="https://t.me/againstwar_antalya_news/60">Интервью наших активистов про сбор</a>
                            </Text>
                        </Section>
                        <Section id="bus_2">
                            <Heading1>Бус для перевозки раненых - сделано</Heading1>
                            <Text>
                                Этот бус используется <b>только</b> в гуманитарных целях - для перевозки раненых,
                                обогрева солдат, доставки продуктов и т.д.
                            </Text>
                            <Text>
                                <a href="https://www.facebook.com/val.bee.5458?mibextid=LQQJ4d">Валдас
                                    Барткявичюс</a> и <a href="https://www.facebook.com/ayder.muzhdabaev">Айдер
                                Муждабаев</a> записали видео специально для нас!
                                А позади них стоит НАШ НОВЫЙ БУС. Он совсем скоро отправится в путь, и при
                                помощи Айдера Муждабаева поступит в распоряжение крымско-татарского добровольческого
                                батальона.
                            </Text>
                        </Section>
                        <Section id="bratslav_generator_1">
                            <Heading1>Генератор для приюта в Брацлаве - сделано</Heading1>
                            <Text>
                                <a href="https://instagram.com/gulidin_official?igshid=Zjc2ZTc4Nzk=">Антон Гулидин</a>,
                                через <a href="https://uafriendsfoundation.org/">фонд</a> которого генератор будет
                                доставлен до места,
                                записал <a href="https://youtu.be/QM8w9AKiz9Q">видеообращение</a> ко всем неравнодушным
                                из обесточенного Брацлава.
                            </Text>
                            <Text>
                                Брацлав - населенный пункт, в котором до войны было 6000 жителей, а сейчас туда
                                переселились еще 4000 беженцев.
                            </Text>
                            <Text>
                                Наш генератор будет отправлен туда и будет использоваться для обогрева в здании, где на
                                текущий момент находятся инвалиды - пострадавшие от войны.

                                Стоимость: <b>1500 евро</b>.
                                Средства собраны!
                            </Text>
                        </Section>
                    </HandbookContent>
                </HandBook>
            </Container>
        </>
    )
};

export default UkraineHelp;
