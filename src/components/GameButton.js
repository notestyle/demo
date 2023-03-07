import React from "react";

function GameButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-red-500 text-white rounded-lg text-6xl hover:bg-red-400 "
    >
      {children}
    </button>
  );
}

export default GameButton;
