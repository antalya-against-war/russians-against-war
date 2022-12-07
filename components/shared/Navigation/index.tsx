import { NavigationWrapper, Item } from './styled';
import Link from 'next/link';

export interface NavigationItem {
  title: string;
  link: string;
}

interface NavigationProps {
  navigation: Array<NavigationItem>;
}

export default function Navigation({ navigation }: NavigationProps) {
  return (
    <NavigationWrapper>
      {navigation.map(({ title, link }) => (
        <Link key={title} href={link} passHref><Item>{title}</Item></Link>
      ))}
    </NavigationWrapper>
  )
}