import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Input from '@/components/form/Input';

import tikarku from '../../../public/tikarku.png';

const AvatarPopup = ({ name, avatar, signOut }: { name: string | null, avatar: string | null, signOut: () => Promise<void> }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className='flex justify-center items-center'>
      <button onClick={handleClick}>
        <Avatar
          alt={name || 'User'}
          src={avatar || ''}
        />
      </button>
      <Typography className='hover:bg-vgreen cursor-pointer'>
        {name}
      </Typography>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1 }} className='hover:bg-vgreen cursor-pointer' onClick={() => {signOut();} }>
          Sign out
        </Typography>
      </Popover>
    </div>
  );
};

const Header = ({ name, avatar, email, signOut }: { name: string | null, avatar: string | null, email: string | null, signOut: () => Promise<void> }) => {
  console.log(avatar);
  return (
    <header className='transition-shadow sticky top-0 z-50 bg-vwhite'>
      <nav className='flex items-center justify-center border-b-4 border-vblack border-opacity-30 space-x-4'>
        <div className='flex p-4'>
          <Link href='/'>
            <a><Image src={tikarku} alt='Logo TikarKU' height={tikarku.height / 10} width={tikarku.width / 10} /></a>
          </Link>
        </div>
        <Input />
        <FaBell size='1.5em' className='cursor-pointer' />
        <FiShoppingCart size='1.5em' className='cursor-pointer' />
        {
          email
          ?
          <AvatarPopup name={name} avatar={avatar} signOut={signOut} />
          :
          <Link href='/login'>
            <a className='animated-underline link'>
              Login
            </a>
          </Link>
        }
      </nav>
    </header>
  );
};

export default Header;
