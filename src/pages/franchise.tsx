import type { NextPage } from 'next';

import Filter from '@/components/form/Filter';
import Header from '@/components/layout/Header';
import SearchResult from '@/components/SearchResult';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title='Franchise - TikarKU' />

      <Header />

      <main className="flex justify-between py-8 px-0 md:px-20">
        <div>
          <Filter />
        </div>
        <SearchResult />
      </main>
    </div>
  );
};

export default Login;
