import React, { useState } from 'react';
import SubmitButtonClassic from '../../Buttons/Submit/SubmitButtonClassic';
import SimplePopupElement from './SimplePopupElement';

function SimplePopup() {
  const [showPopup, setShowPopup] = useState(false);

	const openPopup = () => {
		setShowPopup(prev => !prev)
	}

  return (
    <div>
		<div className=''>
			<SubmitButtonClassic click={openPopup} text='toggle popup' />
			<SimplePopupElement showPopup = {showPopup} setShowPopup={setShowPopup}/>
		</div>
      
    </div>
  );
}

export default SimplePopup;
