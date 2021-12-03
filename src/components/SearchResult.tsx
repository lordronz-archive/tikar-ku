import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useState } from 'react';
import { BsHeart, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

import { searchResult } from '@/data/data';
import { FilterArgsNoSet } from '@/types/filter';

const Item = ({ image, alt, liked, rating, slot, price, id, location }: { image: string, alt: string, liked: boolean, rating: string, slot: number, price: string, id: number, location: string }) => {
  const [like, setLike] = useState(liked);

  return (
    <Card sx={{ display: 'flex', width: '50rem', mb: 4 }}>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={image}
        alt={alt}
      />
      <Box sx={{ display: 'flex', alignItems: '', pl: 0, pb: 0, justifyContent: 'space-between', width: '100%' }}>
        <CardContent sx={{ flex: '0 0 auto' }}>
          <Typography component="div" variant="h6" fontWeight='bold'>
            {alt}
          </Typography>
          <div className='flex items-center'>
            <MdLocationPin />
            <Typography component="div">
              {location}
            </Typography>
          </div>
          <div className='flex items-center'>
            <BsStarFill className='text-vyellow' />
            <Typography component="div">
              {rating}
            </Typography>
          </div>
          <Typography component="div">
            {slot} Slot tersisa
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
            <button className='bg-vgreen text-vwhite py-1 px-8 rounded-xl hover:bg-green-600 transition-all duration-300'>
              <Link href={`/items/${id}`}>
                <a>Pilih</a>
              </Link>
            </button>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

const items = searchResult;

// const items = [
//   {
//     image: '/search-1.png',
//     alt: 'Akang Group',
//     liked: true,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-2.png',
//     alt: 'Janji Jiwa',
//     liked: false,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-1.png',
//     alt: 'Akang Group',
//     liked: true,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-2.png',
//     alt: 'Janji Jiwa',
//     liked: false,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-1.png',
//     alt: 'Akang Group',
//     liked: true,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-2.png',
//     alt: 'Janji Jiwa',
//     liked: false,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-1.png',
//     alt: 'Akang Group',
//     liked: true,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
//   {
//     image: '/search-2.png',
//     alt: 'Janji Jiwa',
//     liked: false,
//     rating: '4.69 (200 Reviews)',
//     slot: 69,
//     price: '69.420.000',
//   },
// ];

const SearchResult = ({ price, location, rating }: FilterArgsNoSet) => {
  const getItems = ({ price, location, rating }: FilterArgsNoSet) => {
    let localItems = [...items];

    if (price === 'desc') {
      localItems.sort((a, b) => {
        const intA = parseInt(a.price.replace('.', ''));
        const intB = parseInt(b.price.replace('.', ''));
        return intB - intA;
      });
    } else if (price === 'asc') {
      localItems.sort((a, b) => {
        const intA = parseInt(a.price.replace('.', ''));
        const intB = parseInt(b.price.replace('.', ''));
        return intA - intB;
      });
    }

    if (location) {
      localItems = localItems.filter((item) => item.location === location.label);
    }

    if (rating > 1) {
      localItems = localItems.filter((item) => {
        const r = Math.floor(parseFloat(item.rating.split(' ')[0]));
        return r >= rating;
      });
    }

    return localItems.map(({ image, alt, liked, rating, slot, price, location }, i) => (
      <Item image={image} alt={alt} liked={liked} rating={rating} slot={slot} price={price} id={i} location={location} key={i} />
    ));
  };

  return (
    <div>
      <Typography variant='h5'>
        <Box fontWeight='fontWeightBold'>
          Semua hasil pencarian untuk Franchise
        </Box>
      </Typography>
      {
        getItems({price, location, rating})
      }
    </div>
  );
};

export default SearchResult;
