function SubmitButtonClassic({click, to, text}) {
	return (
		<div>
			<button to={to} onClick={click} className='bg-primary-dark px-14 py-3 rounded-3xl font-semibold hover:bg-primary-900-dark text-on-primary-dark hover:text-on-primary-900-dark'>{text}</button>
		</div>
	)
}

export default SubmitButtonClassic
