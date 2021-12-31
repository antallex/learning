import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='w-full h-24 px-16 bg-surface-dark text-center items-center flex justify-between'>
      <div>
        <NavLink to='/' className='text-on-surface-dark text-xl mx-4 hover:text-primary-dark'>
         Antalex
        </NavLink>
      </div>
      <div className=''>

        <NavLink
          to='/components'
          className='text-on-surface-dark text-xl mx-4 hover:text-primary-dark'
        >
          Components
        </NavLink>
        
      </div>
      <div>
        <NavLink to='/' className='text-on-surface-dark text-xl mx-4 hover:text-primary-dark'>
          CTA
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
