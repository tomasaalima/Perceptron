import React, { useState } from 'react';

function WeightsTable({ weights, text, onClick, disabled}) {
  const [ clicked, setClicked ] = useState(false);
  return (
    <div className="flex flex-col">
      {weights &&
        <div className="flex flex-row">
          {weights.map((rowWeights, rowIndex) => (
            <div className={`w-28 h-28 border flex flex-col justify-around border-black  border-collapse text-2xl`} key={rowIndex}>
              <div className="text-xs">W{rowIndex}</div>              
              <div>{rowWeights}</div>
            </div>
          ))}
        </div>
      }
      <button 
      className={`w-full h-12 text-2xl text-black text-center mt-2 ${(clicked && text === "START") || disabled ? 'bg-gray-300' : 'bg-green-400'}`}
      onClick={() => { 
        onClick(text)
        setClicked(true)
        }}
      disabled={(clicked && text === "START") || disabled}
      >
          {text}
      </button>
    </div>
  );
}

export default WeightsTable;
