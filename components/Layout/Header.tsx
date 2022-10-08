import Link from 'next/link';
import styles from './styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__support}>
        We stand with Ukraine
      </div>
      <h1 className={styles.Header__title}>
        <Link href="/">RUSSIANS AGAINST WAR</Link>
      </h1>
      <p className={styles.Header__caption}>
        <Link href="/">Комьюнити Антальи</Link>
      </p>
    </header>
  );
};