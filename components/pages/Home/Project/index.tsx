import Link from 'next/link';
import { StaticImageData } from 'next/image';
import {
  Project as ProjectWrapper,
  Image,
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
          src={image.src}
          alt={title}
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ProjectWrapper>
    </Link>
  )
}