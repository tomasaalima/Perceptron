import React from 'react';

function CustomTable({ vector, actual,  }) {
  return (
    <div>
      {vector &&
        <div>
          <div className="flex flex-row">
            <div className="w-28 border border-black border-collapse text-2xl">inputs</div>
            <div className="w-14 border border-black border-collapse text-2xl">out</div>
          </div>
          {vector.map((rowVector, rowIndex) => (
            <div className="flex flex-row" key={rowIndex}>
              {rowVector.map((cellvector, cellIndex) => (
                <div className={`w-14 border ${actual === rowIndex ? 'bg-gray-300' : 'bg-white'} border-black  border-collapse text-2xl`} key={cellIndex}>
                  {cellvector}
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default CustomTable;
