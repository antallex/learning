import { Link } from 'react-router-dom';

function FirstPageCard({ title, link }) {
  return (
    <div className=''>
      <Link
        to={link}
        className='bg-surface-dark px-24 py-28 sm:px-16 lg:px-28 2xl:px-48 2xl:py-36 hover:bg-primary-dark mb-10 rounded-2xl flex items-center justify-center  text-on-primary hover:text-on-primary-dark font-bold text-xl lg:text-3xl xl:text-6xl text-center'
      >
        {title}
      </Link>
    </div>
  );
}

export default FirstPageCard;
