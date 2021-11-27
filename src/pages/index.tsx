import type { NextPage } from 'next';

import Header from '@/components/layout/Header';
import MainCarousel from '@/components/MainCarousel';
import Menu from '@/components/Menu';
import Seo from '@/components/Seo';
import Showcase from '@/components/Showcase';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo />

      <Header />

      <main className={`${styles.main} py-8 px-0 md:px-48`}>
        <MainCarousel />
        <Menu />
        <Showcase />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
