import React from 'react';

function Button({ onClick, text }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-36 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
    >
      {text}
    </button>
  );
}

export default Button;
