import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const SearchResult = () => {
  return (
    <div>
      <Typography variant='h5'>
        <Box fontWeight='fontWeightBold'>
          Semua hasil pencarian untuk Franchise
        </Box>
      </Typography>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/search-1.png"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
};

export default SearchResult;
