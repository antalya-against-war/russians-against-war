import Link from 'next/link';
import { Container } from 'styles/common';
import {
  Wrapper,
  Content,
  Section,
  SectionTitle,
  SectionLink,
} from './styled';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Section>
            <SectionTitle>Мы в Telegram</SectionTitle>
            <Link href="https://t.me/againstwar_antalya" passHref><SectionLink target="_blank">Антивоенный чат</SectionLink></Link>
            <Link href="https://t.me/againstwar_antalya_news" passHref ><SectionLink target="_blank">Канал анонсов мероприятий</SectionLink></Link>
            <Link href="https://t.me/rus_antalya" passHref><SectionLink target="_blank">Помощь в переезде</SectionLink></Link>
            <Link href="https://t.me/antalya_it" passHref><SectionLink target="_blank">Чат IT-специалистов</SectionLink></Link>
            <Link href="https://t.me/antalya_it" passHref><SectionLink target="_blank">Чат для родителей</SectionLink></Link>
          </Section>
          <Section>
            <SectionTitle>Проекты</SectionTitle>
            <Link href="/shelter" passHref><SectionLink>Шелтер</SectionLink></Link>
            <Link href="/emergency" passHref><SectionLink>Скорая помощь</SectionLink></Link>
            <Link href="/ukraine" passHref><SectionLink>Помощь Украине</SectionLink></Link>
            <Link href="/communication" passHref><SectionLink>Информационная работа</SectionLink></Link>
          </Section>
          <Section>
            <SectionTitle>Связаться с нами</SectionTitle>
            <Link href="https://www.instagram.com/russians_against_war_antalya" passHref><SectionLink target="_blank">Instagram</SectionLink></Link>
            <Link href="mailto:antalya_against_war@proton.me" passHref><SectionLink target="_blank">Email</SectionLink></Link>
          </Section>
        </Content>
      </Container>
    </Wrapper>
  )
}