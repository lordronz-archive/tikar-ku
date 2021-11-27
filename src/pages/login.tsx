import type { NextPage } from 'next';

import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo />

      <Header />

      <main className={`${styles.main} py-8 px-0 md:px-48`}>

      </main>
    </div>
  );
};

export default Login;
