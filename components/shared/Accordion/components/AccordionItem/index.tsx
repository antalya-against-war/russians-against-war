import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  AccordionItemWrapper,
  QuestionWrapper,
  Question,
  ItemContent,
} from './styled';
import { AccordionIcon } from '../AccordionIcon';

interface AccordionItemProps {
  question: string;
}

export function AccordionItem({
  question,
  children,
}: PropsWithChildren<AccordionItemProps>) {
  const [opened, setOpened] = React.useState(false);

  const onClick = () => setOpened(prevValue => !prevValue);

  return (
    <AccordionItemWrapper>
      <QuestionWrapper onClick={onClick}>
        <AccordionIcon opened={opened} />
        <Question>{question}</Question>
      </QuestionWrapper>
      <ItemContent opened={opened}>{children}</ItemContent>
    </AccordionItemWrapper>
  )
}