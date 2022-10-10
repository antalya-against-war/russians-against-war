import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import background from './images/background.png';
import {
  Header,
  StandWithUkraine,
  BackgroundWrapper,
  MainTitle,
  HeaderCaption,
} from './styled';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <StandWithUkraine>We stand with Ukraine</StandWithUkraine>
        <BackgroundWrapper>
          <Image
            src={background}
            alt="background"
            objectFit="cover"
          />
        </BackgroundWrapper>
        <MainTitle>
          <Link href="/">RUSSIANS AGAINST WAR</Link>
        </MainTitle>
        <HeaderCaption>
          <Link href="/">Комьюнити Антальи</Link>
        </HeaderCaption>
      </Header>
      <main>{children}</main>
    </>
  )
}