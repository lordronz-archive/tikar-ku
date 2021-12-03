import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

const Item = ({ image, alt, liked, rating, slot, price, index }: { image: string, alt: string, liked: boolean, rating: string, slot: number, price: string, index: number }) => {
  const [like, setLike] = useState(liked);

  return (
    <div>
      <Card sx={{ display: 'flex', width: '70rem', mb: 4 }} className='p-3 rounded-xl'>
        <CardMedia
          component="img"
          sx={{ width: 800 }}
          image={image}
          alt={alt}
        />
        <div>
          <Box sx={{ display: 'flex', alignItems: '', pl: 0, pb: 0, justifyContent: 'space-between', width: '100%' }}>
            <CardContent sx={{ flex: '0 1 auto'}}>
              <Typography component="div" variant="h6" fontWeight='bold'>
                {alt}
              </Typography>
              <div className='flex items-center'>
                <MdLocationPin />
                <Typography component="div">
                  Jakarta
                </Typography>
              </div>
              <div className='flex items-center'>
                <BsStarFill className='text-vyellow' />
                <Typography component="div">
                  {rating}
                </Typography>
              </div>
              <Typography component='div' className='text-vgreen'>
                {slot} Slot tersisa
              </Typography>
              <Typography component='p'>
                Akang Group adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh purus, lacinia vel tempor interdum, finibus ac nulla. Vestibulum consectetur magna eu eros consectetur, vel commodo sem vestibulum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh purus, lacinia vel tempor interdum, finibus ac nulla. Vestibulum consectetur magna eu eros consectetur, vel commodo sem vestibulum.
              </Typography>
              <Typography component="div" className='text-vgreen' fontWeight='bold'>
                Rp {price}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <div className='flex flex-col justify-between items-end'>
                {
                  like
                  ? <BsHeartFill size={28} className='text-vgreen cursor-pointer'  onClick={ () => setLike(!like) }/>
                  : <BsHeart size={28} className='cursor-pointer'  onClick={ () => setLike(!like) }/>
                }
              </div>
            </CardContent>
          </Box>
          <Box sx={{ display: 'flex', alignItems: '', pl: 0, pb: 0, justifyContent: 'space-between', width: '100%' }}>
            <CardContent className='flex justify-between w-full'>
              <button className='bg-vgreen text-vwhite py-1 px-8 rounded-xl hover:bg-green-600 transition-all duration-300'>
                <Link href={`/payment/${index}`}>
                  <a>
                    Beli Sekarang
                  </a>
                </Link>
              </button>
              <button className='bg-vwhite text-vgreen border border-vgreen py-1 px-8 rounded-xl hover:bg-gray-200 transition-all duration-300'>
                Hubungi Penjual
              </button>
            </CardContent>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default Item;
