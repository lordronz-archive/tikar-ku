import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import dropship from '../../public/dropship.png';
import franchise from '../../public/franchise.png';
import resell from '../../public/resell.png';

const Card = ({ src, alt }: { src: StaticImageData, alt: string }) => {
  return (
    <div className='flex flex-col items-center justify-center w-60 h-60 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20 cursor-pointer'>
      <div className='flex justify-center items-center p-4'>
        <Image src={src} alt={alt} />
      </div>
      <div className='flex'>
        <Typography>
          <Box fontWeight='fontWeightBold'>
            {alt}
          </Box>
        </Typography>
      </div>
    </div>
  );
};

const items = [
  {
    src: dropship,
    alt: 'Dropship',
  },
  {
    src: franchise,
    alt: 'Franchise',
  },
  {
    src: resell,
    alt: 'Resell',
  },
];

const Menu = () => {
  return (
    <div className='flex justify-between items-center w-full'>
      {
        items.map(({src, alt}, i) => <Card src={src} alt={alt} key={i} />)
      }
    </div>
  );
};

export default Menu;
