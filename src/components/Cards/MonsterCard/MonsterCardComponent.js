import React from 'react';

export const MCard = (props) => {
  return (
    <div>
      <div className=' my-10 md:my-0 py-16 mx-10 sm:mx-0  bg-surface-dark  rounded-md cursor-pointer scale-100 hover:scale-105 shadow-md shadow-surface-dark hover:shadow-primary-dark hover:bg-primary-dark transition-transform'>
        <div className='mb-10'>
          <img
            className=' mx-auto'
            alt='monster'
            src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}
          />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl text-on-surface-dark font-bold mb-2'>
            {props.monster.name}
          </h1>
          <p className='text-md text-on-surface-dark font-medium'>
            {props.monster.email}
          </p>
        </div>
      </div>
    </div>
  );
};
