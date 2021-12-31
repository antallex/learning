function DeleteButtonClassic({ click, to, text }) {
  return (
    <div>
      <button
        to={to}
        onClick={click}
        className='bg-error-dark w-52 h-9 rounded-3xl font-semibold hover:bg-error text-on-error-dark hover:text-on-error'
      >
        {text}
      </button>
    </div>
  );
}

export default DeleteButtonClassic;
