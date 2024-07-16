import React from 'react';
import '../App.css';

const ControleVelocidade = ({ velocidade, setVelocidade }) => {
  return (
    <div className="controle-velocidade">
      <h2>Velocidade: {velocidade}</h2>
      <div className="velocidades">
        <button onClick={() => setVelocidade(1)}>1</button>
        <button onClick={() => setVelocidade(2)}>2</button>
        <button onClick={() => setVelocidade(3)}>3</button>
      </div>
    </div>
  );
};

export default ControleVelocidade;
