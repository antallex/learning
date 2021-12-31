function SearchBox(props) {
	return (
		<div className=''>
			<input onChange={props.onChange} placeholder={props.placeholder} type='search' className='w-80 py-3  px-6 font-medium rounded-full border-0 bg-surface-dark text-on-surface-dark focus:outline-primary-dark focus:text-on-surface-dark  focus:bg-surface-dark focus:placeholder:text-on-surface-dark hover:bg-primary-dark hover:placeholder:text-on-background-dark hover:shadow-primary-dark shadow-md shadow-surface-dark transition-all' />
		</div>
	)
}

export default SearchBox
