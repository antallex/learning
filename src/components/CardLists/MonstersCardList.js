import React from 'react';
import { MCard } from '../Cards/MonsterCard/MonsterCardComponent';



export const MonstersCardList = (props) => {
  return (
    <div className=''>
		<div className= ' sm:w-85vw sm:my-0 mx-auto md:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
      {props.monsters.map((monster) => (
           <MCard key={monster.id} monster={monster}/>
          ))}
    </div>
	</div>
  );
};
