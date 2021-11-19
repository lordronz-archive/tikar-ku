import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const items = [
  {
    src: '/laris-1.png',
    type: 'Franchise',
  },
  {
    src: '/laris-2.png',
    type: 'Dropship',
  },
  {
    src: '/laris-3.png',
    type: 'Resell',
  },
  {
    src: '/laris-4.png',
    type: 'Franchise',
  },
  {
    src: '/laris-5.png',
    type: 'Resell',
  },
];

const Showcase = () => {
  return (
    <div className='w-full'>
      <Typography component='h2' variant='h4' className='mb-4'>
        <Box fontWeight='fontWeightBold'>
          Produk Terlaris!
        </Box>
      </Typography>
      <div className='flex justify-between items-center'>
        {
          items.map(({ src, type }, i) => (
            <div className='h-40 w-40 bg-no-repeat bg-cover flex justify-center items-center relative rounded cursor-pointer' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("${src}")` }} key={i}>
              <Image src={`/${i + 1}.png`} width={90} height={90} alt={`${i + 1}`} />
              <div className='absolute bottom-0 bg-vgreen h-1/6 w-full rounded-md'>
                <Typography align='center' justifyContent='center' alignContent='center'>
                  <Box color='white' fontSize={14}>
                    {type}
                  </Box>
                </Typography>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Showcase;
