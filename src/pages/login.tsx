import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import {
  AuthAction,
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';

import FirebaseAuth from '@/components/FirebaseAuth';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

// type Inputs = {
//   email: string,
//   password: string,
//   confirmPassword: string,
// };

// const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login: NextPage = () => {
  const AuthUser = useAuthUser();

  return (
    <div className={styles.container}>
      <Seo title='Login | TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className={`${styles.main} py-8 px-0 md:px-48`}>
        <div className='w-96 p-4 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
          <Typography variant='h5' component='div' fontWeight='bold'>
            Sign In
          </Typography>
          <FirebaseAuth />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(Login);
