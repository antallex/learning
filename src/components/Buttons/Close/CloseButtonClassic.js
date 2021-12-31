function CloseButtonClassic({ click, to, text }) {
	return (
	  <div>
		<button
		  to={to}
		  onClick={click}
		  className='bg-gray-dark w-32 h-9 rounded-3xl font-semibold hover:bg-gray text-on-gray-dark hover:text-on-gray'
		>
		  {text}
		</button>
	  </div>
	);
  }
  
  export default CloseButtonClassic;
  