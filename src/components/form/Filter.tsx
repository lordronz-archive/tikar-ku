import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Filter = () => {
  const [harga, setHarga] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setHarga(event.target.value);
  };

  return (
    <div className='p-6 border rounded-xl border-vblack border-b-2 border-r-2 border-l-2 border-t-0 shadow-lg border-opacity-20'>
      <div className='flex items-center justify-between mb-2'>
        <Typography variant='h5'>
          <Box fontWeight='fontWeightBold' color='#989898'>
            Filter
          </Box>
        </Typography>
        <Typography>
          <Box fontWeight='fontWeightBold' className='text-vgreen cursor-pointer hover:underline'>
            reset
          </Box>
        </Typography>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">Urutkan Harga</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={harga}
            onChange={handleChange}
            label="Urutkan Harga"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">Lokasi</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={harga}
            onChange={handleChange}
            label="Lokasi"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="standard" sx={{ my: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={harga}
            onChange={handleChange}
            label="Rating"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filter;
