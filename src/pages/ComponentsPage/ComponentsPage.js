import NavBar from '../../components/NavBar/NavBar';
import {
  CardsShowCase,
  ButtonsShowCase,
  PopupShowCase,
  SearchBoxShowCase,
} from '../../components/ComponentsShowCase/ComponentsShowCase';

function ComponentsPage() {
  return (
    <div className='bg-background-dark h-full pb-10'>
      <NavBar />
      <div className='my-24'>
       
        <ButtonsShowCase />
        <CardsShowCase />
        <PopupShowCase />
        <SearchBoxShowCase />
      </div>
    </div>
  );
}

export default ComponentsPage;
