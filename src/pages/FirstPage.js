import FirstPageCard from '../components/Buttons/BigProjButton/BigProjButton'

function FirstPage() {
	return (
		<div className='h-screen w-full bg-background-dark'>
      <div className='h-full items-center sm:flex sm:justify-around'>
        <FirstPageCard title='Stable Projects' link='/home' />
        <FirstPageCard  title='Sandbox Projects' link='/sandbox'/>
      </div>
    </div>
	)
}

export default FirstPage
