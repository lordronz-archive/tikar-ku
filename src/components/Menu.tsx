import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

import dropship from '../../public/dropship.png';
import franchise from '../../public/franchise.png';
import resell from '../../public/resell.png';

const Card = ({ src, alt, link }: { src: StaticImageData, alt: string, link: string }) => {
  return (
    <Link href={link}>
      <a>
        <div className='flex flex-col items-center justify-center md:w-60 md:h-60 w-24 h-24 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20 cursor-pointer mb-4'>
          <div className='flex justify-center items-center p-4'>
            <Image src={src} alt={alt} />
          </div>
          <div className='flex'>
            <Typography variant='h5'>
              <Box fontWeight='fontWeightBold'>
                {alt}
              </Box>
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  );
};

const items = [
  {
    src: dropship,
    alt: 'Dropship',
    link: '/',
  },
  {
    src: franchise,
    alt: 'Franchise',
    link: '/franchise',
  },
  {
    src: resell,
    alt: 'Resell',
    link: '/',
  },
];

const Menu = () => {
  return (
    <div className='flex justify-between items-center w-full'>
      {
        items.map(({src, alt, link}, i) => <Card src={src} alt={alt} link={link} key={i} />)
      }
    </div>
  );
};

export default Menu;
