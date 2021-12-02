import type { NextPage } from 'next';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import Filter from '@/components/form/Filter';
import Header from '@/components/layout/Header';
import SearchResult from '@/components/SearchResult';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

const Franchise: NextPage = () => {
  const AuthUser = useAuthUser();

  return (
    <div className={styles.container}>
      <Seo title='Franchise - TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className="flex justify-between py-8 px-0 md:px-20">
        <div>
          <Filter />
        </div>
        <SearchResult />
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Franchise);
