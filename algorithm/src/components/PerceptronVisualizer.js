import React, { useState } from 'react';
import CustomTable from './CustomTable';
import WeightsTable from './WeightsTable';
import Calculation from './Calculation';

function PerceptronVisualizer() {
  const [ weights, setWeights ] = useState({data: [0, 3, 3]});
  const [ start, setStart ] = useState(false);
  const [ verifier, setVerifier ] = useState({verify: [false, false, false, false]});
  const [ newWeights, setNewWeights ] = useState(null);
  const [ vector, setVector ] = useState({data: [[0,0,0],[0,1,0],[1,0,0],[1,1,1]], actual: 0});

  const recalculate = (vector) => {
    setNewWeights(vector);
  };
  
  const nextCalculum = (value) => {
    if (value === "START") {
      setStart(true);
    } else if (value === "APPLY") {
      if (weights.data.every((weight, index) => weight === newWeights[index])) {
        setVerifier(prevVerifier => {
          const updatedVerifier = [...prevVerifier.verify];
          updatedVerifier[vector.actual] = true;
          return { verify: updatedVerifier };
        });
      }

      setWeights({ data: newWeights });
      setVector(prevVector => ({
        ...prevVector,
        actual: prevVector.actual === 3 ? 0 : prevVector.actual + 1
      }));
    }
  };

  const allWeightsCorrect = verifier.verify.every(correct => correct);

  return (
    <div>
    <div className="flex flex-row justify-center pt-10">
      <div className="flex flex-row justify-between gap-10 items-start h-auto w-2/4">
        <CustomTable vector={vector.data} actual={vector.actual}/>
        <WeightsTable weights={weights.data} text={"START"} onClick={nextCalculum}/>
        {!newWeights && <div className="w-48"></div>}
        {newWeights && <WeightsTable weights={newWeights} text={"APPLY"} onClick={nextCalculum} disabled={allWeightsCorrect}/>}
      </div>
    </div>
        <div className="flex flex-row ml-20 mt-12 justify-start gap-20">
        <div className="pt-2">
          <img className="h-36 overflow-hidden" src="./function.png" alt="function"></img>
        </div>
      {start && 
        <div className="flex flex-row justify-start gap-10 items-start pt-10 h-auto w-3/4">
          <Calculation vector={vector.data[vector.actual]} weights={weights.data} recalculate={recalculate} endCalculum={nextCalculum}/>
        </div>        
      }
      </div>
      {allWeightsCorrect &&
        <div className='mt-28 bg-green-300 bottom-0 fixed w-full py-6'>
          <span>PESOS VÁLIDO PARA TODAS AS AMOSTRAS</span>
        </div>
      }
    </div>
  );
}

export default PerceptronVisualizer;
