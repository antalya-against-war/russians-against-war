import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import styles from './styles/Project.module.css';

interface Props {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}

export default function Project({ title, description, link, image }: Props) {
  return (
    <Link href={link}>
      <div className={styles.Project}>
        <Image
          src={image}
          alt={title}
        />
        <div className={styles.Project__info}>
          <h3 className={styles.Project__title}>{title}</h3>
          <p className={styles.Project__description}>{description}</p>
        </div>
      </div>
    </Link>
  )
}