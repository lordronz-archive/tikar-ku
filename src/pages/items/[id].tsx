import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import Item from '@/components/Item';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

const items = [
  {
    image: '/item-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Akang Group',
    liked: true,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
  {
    image: '/item-1.png',
    alt: 'Janji Jiwa',
    liked: false,
    rating: '4.69 (200 Reviews)',
    slot: 69,
    price: '69.420.000',
  },
];

const ParticularItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const AuthUser = useAuthUser();

  if (!id) {
    return <></>;
  }

  const itemId = parseInt(Array.isArray(id) ? id[0] : id);

  return (
    <div className={styles.container}>
      <Seo title='Item - TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className={`${styles.main} py-8 px-0`}>
        <Item {...items[itemId]} />
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(ParticularItem);
