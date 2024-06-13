import React from "react";
// import { useState } from "react";

function Button({ thisColor, onClick }) {
  //   const [color, setColor] = useState(thisColor);

  // console.log(thisColor);

  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: thisColor }}
    >
      {thisColor}
    </button>
  );
}
export default Button;
