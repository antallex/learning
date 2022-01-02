import { IoClose } from "react-icons/io5";

function CloseButtonRound({ click, label }) {
  return (
    <div className="">
      <button
        onClick={click}
        aria-label={label}
        className="bg-surface-dark hover:bg-gray-500-dark rounded-3xl "
      >
        <IoClose className="text-on-surface-dark hover:text-on-gray-500-dark w-8 h-8 p-1" />
      </button>
    </div>
  );
}

export default CloseButtonRound;
