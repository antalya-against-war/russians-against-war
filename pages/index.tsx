import type { NextPage } from 'next';
import Head from 'next/head';
import Project from 'components/Project';
import styles from 'styles/Home.module.css';

import HowToTurkeyImage from 'images/how-to-turkey.png';
import ShelterImage from 'images/shelter.png';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Russians against war Antalya</title>
        <meta name="description" content="Antalya anti-war community" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.Home__container}>
        <div className={styles.Home__paragraph}>
          <h2 className={styles.Home__title}>О НАС</h2>
          <p className={styles.Home__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className={styles.Home__paragraph}>
          <h2 className={styles.Home__title}>НАШИ ПРОЕКТЫ</h2>
          <div className={styles.Home__projects}>
            <Project
              title={`Гайд "How to Turkey"`}
              link="/how-to-turkey"
              description="Хендбук по переезду"
              image={HowToTurkeyImage}
            />
            <Project
              title="Шелтер"
              link="/shelter"
              description="Временное жильё для беженцев из Украины в сложной ситуации"
              image={ShelterImage}
            />
          </div>
        </div>
        <div className={styles.Home__paragraph}>
          <h2 className={styles.Home__title}>ДРУГАЯ ИНФОРМАЦИЯ</h2>
          <p className={styles.Home__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
