import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import {
  Project as ProjectWrapper,
  Info,
  Title,
  Description
} from './styled';

interface Props {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}

export default function Project({ title, description, link, image }: Props) {
  return (
    <Link href={link}>
      <ProjectWrapper>
        <Image
          src={image}
          alt={title}
        />
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      </ProjectWrapper>
    </Link>
  )
}