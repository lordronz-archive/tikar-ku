import { FiSearch } from 'react-icons/fi';

const Input = () => {
  return (
    <div className='flex w-1/5'>
      <input type='text' className='border rounded-l w-full' placeholder='Cari Supplier, Franchise, dll' />
      <button className='p-1 bg-vgreen text-vwhite rounded-r'>
        <FiSearch />
      </button>
    </div>
  );
};

export default Input;
