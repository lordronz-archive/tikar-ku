import type { NextPage } from 'next';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { useState } from 'react';

import Filter from '@/components/form/Filter';
import Header from '@/components/layout/Header';
import SearchResult from '@/components/SearchResult';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

const Franchise: NextPage = () => {
  const AuthUser = useAuthUser();
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState<{ label: string; } | null>(null);
  const [rating, setRating] = useState(1);

  return (
    <div className={styles.container}>
      <Seo title='Franchise - TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className="flex justify-between py-8 px-8 md:px-20">
        <div className='hidden md:block'>
          <Filter price={price} setPrice={setPrice} location={location} setLocation={setLocation} rating={rating} setRating={setRating} />
        </div>
        <SearchResult price={price} location={location} rating={rating} />
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Franchise);
