import { useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head'
import styles from 'styles/HowToTurkey.module.css'

const HowToTurkey: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          // @ts-ignore
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <>
      <Head>
        <title>How to Turkey | Russians against war Antalya</title>
        <meta name="description" content="Handbook to settle in Turkey" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.HowToTurkey__container}>
        <h2 className={styles.HowToTurkey__pageTitle}>ТУРЕЦКИЙ ХЭНДБУК</h2>

        <div className={styles.HowToTurkey__handbook}>
          <div className={styles.HowToTurkey__content}>
            <section id="buy_sim" className={styles.HowToTurkey__section}>
              <h3 className={styles.HowToTurkey__heading1}>Покупка SIM карты</h3>
              <p className={styles.HowToTurkey__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className={styles.HowToTurkey__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
            <section id="residence" className={styles.HowToTurkey__section}>
              <h3 className={styles.HowToTurkey__heading1}>Получение ВНЖ</h3>
              <p className={styles.HowToTurkey__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className={styles.HowToTurkey__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <section id="residence--rent" className={styles.HowToTurkey__subSection}>
                <h3 className={styles.HowToTurkey__heading2}>Аренда жилья</h3>
                <p className={styles.HowToTurkey__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
            </section>
          </div>

          <nav className={styles.HowToTurkey__toc}>
            <ul className={styles.HowToTurkey__tocList}>
              <li><a href="#buy_sim">Покупка SIM карты</a></li>
              <li>
                <a href="#residence">Получение ВНЖ</a>
                <ul>
                  <li><a href="#residence--rent">Аренда жилья</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
};

export default HowToTurkey;
