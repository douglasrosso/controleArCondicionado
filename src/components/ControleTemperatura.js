import React from 'react';
import '../App.css';

const ControleTemperatura = ({ temperatura, setTemperatura }) => {
  return (
    <div className="controle-temperatura">
      <h2>Temperatura: {temperatura}°C</h2>
      <button onClick={() => setTemperatura(temperatura + 1)}>+</button>
      <button onClick={() => setTemperatura(temperatura - 1)}>-</button>
    </div>
  );
};

export default ControleTemperatura;
