import { FiSearch } from 'react-icons/fi';

const Input = () => {
  return (
    <div className='flex w-4/12'>
      <input type='text' className='border rounded-l w-full p-2' placeholder='Cari Supplier, Franchise, dll' />
      <button className='p-2 px-3 bg-vgreen text-vwhite rounded-r hover:bg-green-600 transition-all duration-300'>
        <FiSearch />
      </button>
    </div>
  );
};

export default Input;
