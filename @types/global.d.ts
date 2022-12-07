import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { NavigationItem } from 'components/shared/Navigation';

declare global {
  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getNavigation?: () => Array<NavigationItem>;
  };
  
  export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  };
}