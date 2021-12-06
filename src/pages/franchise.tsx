import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import type { NextPage } from 'next';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { MouseEvent, useState } from 'react';

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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <Seo title='Franchise - TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className="flex flex-col md:flex-row justify-between py-8 px-8 md:px-20">
        <div className='hidden md:block'>
          <Filter price={price} setPrice={setPrice} location={location} setLocation={setLocation} rating={rating} setRating={setRating} />
        </div>
        <div className='block md:hidden'>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Filter
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Filter price={price} setPrice={setPrice} location={location} setLocation={setLocation} rating={rating} setRating={setRating} />
          </Menu>
        </div>
        <SearchResult price={price} location={location} rating={rating} />
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Franchise);
