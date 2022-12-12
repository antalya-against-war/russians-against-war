import type { PropsWithChildren } from 'react';
import {
  FeedItemWrapper,
  ItemTime,
  ItemContent,
} from './styled';

interface FeedItemProps {
  date: string;
}

export function FeedItem({ date, children }: PropsWithChildren<FeedItemProps>) {
  return (
    <FeedItemWrapper>
      <ItemTime>{date}</ItemTime>
      <ItemContent>{children}</ItemContent>
    </FeedItemWrapper>
  )
}