import './BackgroundAnimation.styles.css';

function BackgroundAnimation() {
  return (
    <div>
      <div className='background-animation w-screen h-screen '>
        <h1 className='text-on-background-dark text-5xl text-center font-bold pt-11 mb-10 '>
          Color Gradient
        </h1>
        <blockquote class='text-2xl font-semibold italic text-center text-gray-100'>
          When you look
          <span class=' before:block before:absolute before:-inset-0.5 before:-skew-y-3 before:bg-cyan-500 relative inline-block'>
            <span class='relative text-primary-dark'>annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>
      </div>
    </div>
  );
}

export default BackgroundAnimation;
