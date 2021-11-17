import Image from 'next/image';
import { FaBell } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

import Input from '@/components/form/Input';

import tikarku from '../../../public/tikarku.png';

const Header = () => {
  return (
    <header className='transition-shadow sticky top-0 z-50'>
      <nav className='flex items-center justify-center border-b-4 border-vblack border-opacity-30 space-x-4'>
        <div className='flex p-4'>
          <Image src={tikarku} alt='Logo TikarKU' height={tikarku.height / 10} width={tikarku.width / 10} />
        </div>
        <Input />
        <FaBell size='1.5em' className='cursor-pointer' />
        <FiShoppingCart size='1.5em' className='cursor-pointer' />
      </nav>
    </header>
  );
};

export default Header;
