import BigProjButton from '../../components/Buttons/BigProjButton/BigProjButton'

function SandBox() {
  return (
    <div className='h-screen w-full bg-background-dark'>
    <div className='h-full items-center sm:flex sm:justify-around'>
      <BigProjButton title='Components' link='/components' />
      <BigProjButton  title='Monsters Projects' link='/monsters'/>
    </div>
  </div>
  );
}

export default SandBox;
