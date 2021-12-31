import SubmitButtonClassic from '../Buttons/Submit/SubmitButtonClassic';
import AddButtonRound from '../Buttons/Add/AddButtonRound';
import DeleteButtonClassic from '../Buttons/Delete/DeleteButtonClassic';
import DeleteButtonRound from '../Buttons/Delete/DeleteButtonRound';
import CloseButtonRound from '../Buttons/Close/CloseButtonRound';
import Card from '../Cards/CardWithItems/CardWithItems';
import SimplePopup from '../Popups/SimplePopup/SimplePopup';
import CloseButtonClassic from '../Buttons/Close/CloseButtonClassic';
import { MCard } from '../Cards/MonsterCard/MonsterCardComponent';
import SearchBox from '../SearchBox/SearchBox';

export function ButtonsShowCase() {
  return (
    <div>
      <fieldset className='py-10 mx-2 sm:mx-5 md:mx-5 lg:mx-16 xl:mx-10 border-4 border-gray-500-dark rounded-2xl'>
        <legend className='text-on-background-dark text-4xl ml-10 px-5'>
          Buttons
        </legend>

        <div className='sm:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-1  items-center'>
          <div className=' text-center mb-10'>
            <SubmitButtonClassic text='Add a card' />
            <p className='text-on-background-dark mt-3 text-center'>
              SubmitButtonClassic
            </p>
          </div>

          <div className='text-center mb-10'>
            <AddButtonRound text='Add a card' />
            <p className='text-on-background-dark mt-3 text-center'>
              AddButtonRound
            </p>
          </div>
          <div className='text-center mb-10'>
            <DeleteButtonClassic text='Delete a card' />
            <p className='text-on-background-dark mt-3 text-center'>
              DeleteButtonClassic
            </p>
          </div>
          <div className='text-center mb-10'>
            <DeleteButtonRound text='Delete a card' />
            <p className='text-on-background-dark mt-3 text-center'>
              DeleteButtonRound
            </p>
          </div>
          <div className='text-center mb-10'>
            <CloseButtonClassic text='Close' />
            <p className='text-on-background-dark mt-3 text-center'>
              CloseButtonClassic
            </p>
          </div>
          <div className='text-center mb-10'>
            <CloseButtonRound text='Delete a card' />
            <p className='text-on-background-dark mt-3 text-center'>
              CloseButtonRound
            </p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

const person = {
  name: 'Antalex',
  email: 'alex@antalex.ro',
  id: 4,
};

export function CardsShowCase() {
  return (
    <div>
      <fieldset className='py-10  my-10 mx-2 sm:mx-5 lg:mx-16 xl:mx-10 border-4 border-gray-500-dark rounded-2xl'>
        <legend className='text-on-background-dark text-4xl ml-10 px-5'>
          Cards
        </legend>
        <div className='flex justify-center'>
          <div className='grid  2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20 '>
            <div className=''>
              <Card />
            </div>
            <div className=''>
              <MCard key={person.id} monster={person} />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export function PopupShowCase() {
  return (
    <div>
      <fieldset className='py-10  my-10 mx-2 sm:mx-5 lg:mx-16 xl:mx-10 border-4 border-gray-500-dark rounded-2xl items-center'>
        <legend className='text-on-background-dark text-4xl ml-10 px-5'>
          Popups
        </legend>
        <div className='text-center'>
          <SimplePopup />
        </div>
      </fieldset>
    </div>
  );
}

export function SearchBoxShowCase() {
  return (
    <div>
      <fieldset className='py-10  my-10 mx-2 sm:mx-5 lg:mx-16 xl:mx-10 border-4 border-gray-500-dark rounded-2xl items-center'>
        <legend className='text-on-background-dark text-4xl ml-10 px-5'>
          Search-boxes
        </legend>
        <div className='text-center'>
          <SearchBox placeholder='Search-box component' />
        </div>
      </fieldset>
    </div>
  );
}
