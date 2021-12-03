import AutoComplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { FilterArgs } from '@/types/filter';

const locations = [
  {
    label: 'Jakarta',
  },
  {
    label: 'Surabaya',
  },
  {
    label: 'Yogyakarta',
  },
  {
    label: 'Surakarta',
  },
  {
    label: 'Medan',
  },
  {
    label: 'Bandung',
  },
  {
    label: 'Semarang',
  },
  {
    label: 'Palembang',
  },
];

const ratingOptions = [
  {
    label: '2 Keatas',
    rating: 2,
  },
  {
    label: '3 Keatas',
    rating: 3,
  },
  {
    label: '4 Keatas',
    rating: 4,
  },
  {
    label: '5',
    rating: 5,
  },
];

const Filter = ({ price, setPrice, location, setLocation, rating, setRating }: FilterArgs) => {

  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value);
  };

  const handleRatingChange = (event: SelectChangeEvent) => {
    setRating(parseInt(event.target.value));
  };

  const reset = () => {
    setPrice('');
    setLocation(null);
    setRating(1);
  };

  return (
    <div className='fixed p-6 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
      <div className='flex items-center justify-between mb-2'>
        <Typography variant='h5'>
          <Box fontWeight='fontWeightBold' color='#989898'>
            Filter
          </Box>
        </Typography>
        <Typography>
          <Box fontWeight='fontWeightBold' className='text-vgreen cursor-pointer hover:underline'>
            <span onClick={reset}>reset</span>
          </Box>
        </Typography>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">Urutkan Harga</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={price}
            onChange={handlePriceChange}
            label="Urutkan Harga"
          >
            <MenuItem value={'asc'}>Menaik</MenuItem>
            <MenuItem value={'desc'}>Menurun</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <AutoComplete
            value={location}
            onChange={(event, newLocation: { label: string; } | null) => {
              setLocation(newLocation);
            }}
            options={locations}
            renderInput={(params) => <TextField {...params} label='Lokasi' />}
          />
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={`${rating}`}
            onChange={handleRatingChange}
            label="Rating"
          >
            {
              ratingOptions.map(({label, rating}, i) => (
                <MenuItem value={rating} key={i}>{label}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
