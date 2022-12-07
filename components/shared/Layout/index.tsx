import type { PropsWithChildren } from 'react';
import type { NavigationItem } from 'components/shared/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';

interface LayoutProps {
  navigation?: Array<NavigationItem>;
}

export default function Layout({
  children,
  navigation,
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer />
    </>
  )
}