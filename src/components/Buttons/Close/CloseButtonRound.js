import { IoClose } from 'react-icons/io5';

function CloseButtonRound({click, label}) {
  return (
    <div className=''>
      <button onClick={click} aria-label={label} className='bg-gray-dark hover:bg-gray rounded-3xl '>
        <IoClose className='text-on-gray-dark hover:text-on-gray w-8 h-8 p-1' />
      </button>
    </div>
  );
}

export default CloseButtonRound;
