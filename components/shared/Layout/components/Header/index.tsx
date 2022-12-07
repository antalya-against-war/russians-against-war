import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import type { NavigationItem } from 'components/shared/Navigation';
import Navigation from 'components/shared/Navigation';
import { Container } from 'styles/common';
import { HeaderWrapper, Content } from './styled';
import Logo from '../Logo';

interface HeaderProps {
  navigation?: Array<NavigationItem>;
}

export default function Header({
  navigation,
}: PropsWithChildren<HeaderProps>) {
  return (
    <HeaderWrapper>
      <Container>
        <Content>
          <Link href="/" passHref>
            <a><Logo /></a>
          </Link>
          {navigation && (
            <Navigation navigation={navigation} />
          )}
        </Content>
      </Container>
    </HeaderWrapper>
  )
}