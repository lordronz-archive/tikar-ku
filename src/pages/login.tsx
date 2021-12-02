import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { SubmitHandler, useForm } from 'react-hook-form';

import FirebaseAuth from '@/components/FirebaseAuth';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string,
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const AuthUser = useAuthUser();

  console.log(watch('email'));

  return (
    <div className={styles.container}>
      <Seo />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className={`${styles.main} py-8 px-0 md:px-48`}>
        <div className='w-96 p-4 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
          <Typography variant='h5' component='div' fontWeight='bold'>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <label className='block mb-2'>Email</label>
            <input className='block w-full p-1 mb-2 border rounded-md border-vgreen' type='email' {...register('email', { required: true, pattern: emailRegex })} />

            {/* include validation with required or other standard HTML validation rules */}
            <label className='block mb-2'>Password</label>
            <input className='block w-full p-1 mb-2 border rounded-md border-vgreen' type='password' {...register('password', { required: true })} />

            <label className='block mb-2'>Confirm Password</label>
            <input className='block w-full p-1 mb-4 border rounded-md border-vgreen' type='password' {...register('confirmPassword', { required: true, validate: (value) => value === watch('password') })} />

            {/* errors will return when field validation fails  */}

            {errors.email && <span>This email field is required</span>}
            {errors.password && <span>This field is required</span>}
            {errors.confirmPassword && <span>This confirmPassword field is required</span>}

            <input className='block bg-vgreen text-vwhite py-1 px-8 rounded-xl' type='submit' value='Sign In' />
          </form>
          <FirebaseAuth />
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Login);
