import { FiSearch } from 'react-icons/fi';

const Input = () => {
  return (
    <div className='flex'>
      <input type='text' className='border' />
      <button className='p-1 bg-vgreen text-vwhite'>
        <FiSearch />
      </button>
    </div>
  );
};

export default Input;
