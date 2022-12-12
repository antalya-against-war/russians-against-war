import {
  IconWrapper,
  LineMinus,
  LinePlus,
} from './styled';

interface AccordionIconProps {
  opened: boolean;
  className?: string;
}

export function AccordionIcon({ opened, className }: AccordionIconProps) {
  return (
    <IconWrapper className={className}>
      <LineMinus />
      <LinePlus opened={opened} />
    </IconWrapper>
  )
}