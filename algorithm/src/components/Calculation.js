import React from 'react';
import { useEffect } from 'react';

function Calculation({ vector, weights, recalculate }) {
  const calculation = weights[0] * 1 + weights[1] * vector[0] + weights[2] * vector[1];
  const output = calculation > -1 ? 1 : 0;
  const correctOutput = output === vector[2];

  const newWeights = [
    weights[0] + 1 * (vector[2] - output) * 1,
    weights[1] + 1 * (vector[2] - output) * vector[0],
    weights[2] + 1 * (vector[2] - output) * vector[1],
  ];

  useEffect(() => {
    if(vector) {
      if (!correctOutput) {               
        recalculate(newWeights);
      } else {
        recalculate(weights);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vector]);

  return (
    <div className='flex flex-row gap-20'>
      {vector &&
        <div className="flex flex-col">
          <span className="text-xl text-black text-start">
            Net = w0x0 + w1x1 + w2x2
          </span>
          <span className="text-xl text-black text-start">
            Net = ({weights[0]}) . (1) + ({weights[1]}) . ({vector[1]}) + ({weights[2]}) . ({vector[2]})
          </span>
          <span className="text-xl text-black text-start">
            Net = {calculation}
          </span>
          <span className="text-xl text-black text-start pt-2">
            Logo, se Net = {calculation}
          </span>
          <span className={`text-xl text-black text-start pt-2 ${correctOutput ? 'text-green-600' : 'text-red-600'}`}>
            out = {output}, {correctOutput ? 'os pesos permanecem' : 'os pesos devem ser reajustados'}
          </span>
        </div>
      }
      <div className='flex flex-col'>
          <span className="text-xl text-black text-start">
            w0(novo) = w0(antigo) + α(d - y)x0 = {weights[0]} + 1 * ({vector[2]} - {output}) * 1 = {newWeights[0]}
          </span>
          <span className="text-xl text-black text-start">
            w1(novo) = w1(antigo) + α(d - y)x1 = = {weights[1]} + 1 * ({vector[2]} - {output}) * {vector[0]} = {newWeights[1]}
          </span>
          <span className="text-xl text-black text-start">
            w2(novo) = w2(antigo) + α(d - y)x2 = = {weights[2]} + 1 * ({vector[2]} - {output}) * {vector[1]} = {newWeights[2]}
          </span>
      </div>
    </div>
  );
}

export default Calculation;
