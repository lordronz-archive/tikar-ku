import type { NextPage } from 'next';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import Header from '@/components/layout/Header';
import MainCarousel from '@/components/MainCarousel';
import Menu from '@/components/Menu';
import Seo from '@/components/Seo';
import Showcase from '@/components/Showcase';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  const AuthUser = useAuthUser();

  return (
    <div className={styles.container}>
      <Seo />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className={`${styles.main} py-8 px-4 md:px-48`}>
        <MainCarousel />
        <Menu />
        <Showcase />
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Home);
