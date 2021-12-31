import CloseButtonRound from '../../Buttons/Close/CloseButtonRound';
import React, {  useRef } from 'react';
// import { useSpring, } from 'react-spring';
import SubmitButtonClassic from '../../Buttons/Submit/SubmitButtonClassic';


function SimplePopupElement({ showPopup, setShowPopup }) {
  const popupRef = useRef();
  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showPopup ? 1 : 0,
  //   transofrm: showPopup ? `translateY(0%)` : `translateY(-100%)`,
  // });

  //   !!!!!! GENERATES ERROR !!!!!!! ----------> Check console
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setShowPopup(false);
    }
  };
  return (
    <>
      {showPopup ? (
        <div>
          {/* below div  !!!!!! GENERATES ERROR !!!!!!! ----------> Check console */}
          <div
            className='w-screen h-screen fixed flex top-0 left-0 justify-center items-center bg-gray-dark'
            ref={popupRef}
            onClick={closePopup}
          >
            <div className='w-90vw  sm:mx-5 sm:w-[800px]  shadow-xl shadow-background-dark bg-surface-dark relative rounded-2xl z-10'>
              <div className='block text-right mt-5 mr-5'>
                <CloseButtonRound
                  label='close popup'
                  click={() => setShowPopup((prev) => !prev)}
                />
              </div>
              <div className='px-10 pt-5'>
                <h1 className='text-on-surface-dark text-3xl sm:text-5xl text-center'>
                  The Popup
                </h1>
                <p className='mt-10 text-on-surface-dark text-md sm:text-xl text-left '>
                  Popup Description: Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <p className='mt-10 text-on-surface-dark text-md sm:text-xl text-left '>
                  Popup Description: It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className='items-center text-center  pt-10  px-16'>
                  <div className='py-10'>
				  <SubmitButtonClassic
                      text={'Submit'}
                      click={() => setShowPopup((prev) => !prev)}
                    />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SimplePopupElement;
