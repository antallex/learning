import CloseButtonRound from '../../Buttons/Close/CloseButtonRound';
import SubmitButtonClassic from '../../Buttons/Submit/SubmitButtonClassic';

function Card() {
  return (
   <div className=' w-80 sm:w-96  pt-5 pb-10 bg-surface-dark rounded-xl'>
      <div className=' '>
       <div className='text-right mr-5 mb-5'>
       <CloseButtonRound />
       </div>
      <h1 className='text-on-background-dark text-3xl sm:text-5xl text-center mb-3'>Card</h1>
      <p className='text-on-background-dark text-lg sm:text-xl text-center  px-10 mb-10'>
        Card under header description, this is the #1 card
      </p>
      <div>
        <p className='text-on-background-dark text-sm sm:text-lg text-left ml-10 mb-6'>Card Item 1</p>
        <p className='text-on-background-dark text-sm sm:text-lg text-left ml-10 mb-6'>Card Item 2</p>
        <p className='text-on-background-dark text-sm sm:text-lg text-left ml-10 mb-6'>Card Item 3</p>
        <p className='text-on-background-dark text-sm sm:text-lg text-left ml-10 mb-6'>Card Item 4</p>
        <p className='text-on-background-dark text-sm sm:text-lg text-left ml-10 mb-6'>Card Item 5</p>
      </div>
      <div className=' flex justify-center mt-20'>
        <SubmitButtonClassic text='Submit' />
       
      </div>
    </div>
   </div>
  );
}

export default Card;


