import React from 'react';
import type { PropsWithChildren } from 'react';
import { AccordionWrapper } from './styled';

export function Accordion({ children }: PropsWithChildren) {
  return (
    <AccordionWrapper>
      {children}
    </AccordionWrapper>
  )
}
  
export { AccordionItem } from './components/AccordionItem';