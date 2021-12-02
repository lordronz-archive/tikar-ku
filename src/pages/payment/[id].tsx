import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import styles from '@/styles/Home.module.css';

import bca from '../../../public/bca.png';
import bni from '../../../public/bni.png';
import bri from '../../../public/bri.png';
import mandiri from '../../../public/mandiri.png';

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

const paymentMethods = [
  {
    name: 'BCA',
    img: bca,
    desc: 'Bank BCA',
  },
  {
    name: 'BNI',
    img: bni,
    desc: 'Bank BNI',
  },
  {
    name: 'BRI',
    img: bri,
    desc: 'Bank BRI',
  },
  {
    name: 'Mandiri',
    img: mandiri,
    desc: 'Bank Mandiri',
  }
];

const PaymentMethod = () => {
  return (
    <div className='px-8 py-4 border w-96 my-6 rounded-xl border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
      <div className='mb-2'>
        <Typography variant='h5' component='h2' className='text-vblack text-center' fontWeight='bold'>
          Pilih Metode Pembayaran
        </Typography>
      </div>
      <div className='mb-2'>
        {
          paymentMethods.map(({ name, img, desc }, i) => (
            <div className='flex border rounded-xl border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow border-opacity-20 justify-between items-center p-2 mb-1' key={i}>
              <div className='flex items-center flex-grow max-w-3/4'>
                <div className='flex w-24 items-center'>
                  <Image src={img} alt={name} />
                </div>
                <Typography variant='h6' component='h3' className='text-vblack text-right' fontWeight='bold' fontSize={16}>
                  {desc}
                </Typography>
              </div>
              <IoIosArrowDroprightCircle className='h-6 w-6 text-vblue' />
            </div>
          ))
        }
      </div>
      <div>
        <Typography component='h4' className='text-vblack'>
          Silahkan transfer sebelum 24 jam dari waktu pemesanan dan perhatikan tiga digit paling belakang.
        </Typography>
      </div>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <div className='border w-96 mb-4 rounded-xl border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
      <div className='p-3'>
        <Typography variant='h5' component='h2' className='text-vblack text-center' fontWeight='bold'>
          Rincian Pembayaran
        </Typography>
      </div>
      <div className='border-vblack border-b-2 border-r-0 border-l-0 border-t-0 border-opacity-20'>
        <div className='flex justify-between items-center p-4'>
          <div>
            <Typography component='h3' className='text-vblack'>
              Paket Franchise Akang Group
            </Typography>
            <Typography component='h3' className='text-vblack'>
              Kode Unik
            </Typography>
          </div>
          <div>
            <Typography component='h3' className='text-vblack text-right'>
              Rp75.000.000
            </Typography>
            <Typography component='h3' className='text-vblack text-right'>
              Rp099
            </Typography>
          </div>
        </div>
      </div>
      <div className='p-3 flex justify-between items-center'>
        <Typography variant='h5' component='h4' className='text-vblack' fontWeight='bold'>
          Total
        </Typography>
        <Typography variant='h5' component='h4' className='text-vgreen' fontWeight='bold'>
          Rp75.000.<span className='text-vyellow'>099</span>
        </Typography>
      </div>
    </div>
  );
};

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
      <Seo title='Payment - TikarKU' />

      <Header name={AuthUser.displayName} avatar={AuthUser.photoURL} email={AuthUser.email} signOut={AuthUser.signOut} />

      <main className='flex flex-col items-center'>
        <PaymentMethod />
        <PaymentDetails />
        <div className='flex justify-center items-center w-96 mb-4'>
          <input
            name='isAgreed'
            type='checkbox'
            className='mr-2' />
          <Typography component='h3' className='text-vblack'>
            Saya telah membaca dan setuju dengan <span className='text-vgreen'>syarat dan ketentuan</span> yang ada
          </Typography>
        </div>
        <button className='bg-vgreen text-vwhite py-1 rounded-lg w-80 mb-4'>
          <Typography component='h3'>
            <Link href='/order-success'>
              <a>
                Bayar Sekarang
              </a>
            </Link>
          </Typography>
        </button>
      </main>
    </div>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(ParticularItem);
