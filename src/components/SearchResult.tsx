import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

const Item = ({ image, alt, liked }: { image: string, alt: string, liked: boolean }) => {
  return (
    <Card sx={{ display: 'flex', width: '50rem' }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image}
        alt={alt}
      />
      <Box sx={{ display: 'flex', alignItems: '', pl: 1, pb: 1, justifyContent: 'space-between', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" fontWeight='bold'>
            {alt}
          </Typography>
          <div className='flex items-center'>
            <MdLocationPin />
            <Typography component="div">
              Jakarta
            </Typography>
          </div>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto', justifyContent: 'center' }}>
          {
            liked
            ? <BsHeartFill size={28} className='text-vgreen' />
            : <BsHeart size={28} />
          }
          Tes
        </CardContent>
      </Box>
    </Card>
  );
};

const items = [
  {
    image: '/search-1.png',
    alt: 'Akang Group',
    liked: true,
  },
  {
    image: '/search-2.png',
    alt: 'Janji Jiwa',
    liked: false,
  },
];

const SearchResult = () => {
  return (
    <div>
      <Typography variant='h5'>
        <Box fontWeight='fontWeightBold'>
          Semua hasil pencarian untuk Franchise
        </Box>
      </Typography>
      {
        items.map(({ image, alt, liked }, i) => (
          <Item image={image} alt={alt} liked={liked} key={i} />
        ))
      }
    </div>
  );
};

export default SearchResult;
