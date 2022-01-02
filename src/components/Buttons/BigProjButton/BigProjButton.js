import { Link } from 'react-router-dom';

function FirstPageCard({ title, to }) {
  return (
    <div className=''>
      {/* <Link
        to={to}
        className='bg-surface-dark mx-10 px-24 py-28 sm:px-16 lg:px-28 2xl:px-48 2xl:py-36 hover:bg-primary-dark mb-10 rounded-2xl flex items-center justify-center  text-on-primary hover:text-on-primary-dark font-bold text-xl lg:text-3xl xl:text-6xl text-center'
      >
        {title}
      </Link> */}
      <Link
        to={to}
        className=' py-16 text-on-surface-dark text-xl font-bold hover:text-on-primary-dark bg-surface-dark rounded-xl flex justify-center items-center hover:bg-primary-900-dark scale-100 hover:scale-105 shadow-surface-dark shadow-lg hover:shadow-primary-900-dark "'
      >
        {title}
      </Link>
    </div>
  );
}

export default FirstPageCard;
