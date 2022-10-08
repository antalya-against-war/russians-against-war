import type { NextPage } from 'next';
import Head from 'next/head';
import styles from 'styles/Shelter.module.css';

const Shelter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shelter | Russians against war Antalya</title>
        <meta name="description" content="Shelter for ukrainian refugees and russian activists" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.Shelter__container}>
        <h2 className={styles.Shelter__title}>ШЕЛТЕР</h2>
      </div>
    </>
  )
};

export default Shelter;
