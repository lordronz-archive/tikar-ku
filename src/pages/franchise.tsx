import type { NextPage } from 'next';
import Head from 'next/head';

import Filter from '@/components/form/Filter';
import Header from '@/components/layout/Header';
import SearchResult from '@/components/SearchResult';
import styles from '@/styles/Home.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Franchise - TikarKU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-initial flex-row justify-between py-8 px-0 md:px-24">
        <Filter />
        <SearchResult />
      </main>
    </div>
  );
};

export default Login;
