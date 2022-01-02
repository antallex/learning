function CloseButtonClassic({ click, to, text }) {
  return (
    <div>
      <button
        to={to}
        onClick={click}
        className="bg-surface-dark w-32 h-9 rounded-3xl font-semibold hover:bg-gray-500-dark text-on-gray-500-dark hover:text-on-gray-500-dark"
      >
        {text}
      </button>
    </div>
  );
}

export default CloseButtonClassic;
