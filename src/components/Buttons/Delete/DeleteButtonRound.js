import { IoRemove } from 'react-icons/io5';

function DeleteButtonRound() {
  return (
    <div className=''>
      <button className='bg-error-dark hover:bg-error rounded-3xl '>
        <IoRemove className='text-on-error-dark hover:text-on-error w-11 h-11' />
      </button>
    </div>
  );
}

export default DeleteButtonRound;
