import React from 'react';
import '../App.css';

const ControleModo = ({ modo, setModo }) => {
  const modos = ['ventilar', 'refrigerar', 'aquecer'];

  return (
    <div className="controle-modo">
      <h2>Modo: {modo}</h2>
      <div className="modos">
        {modos.map((m) => (
          <button key={m} onClick={() => setModo(m)}>
            {m}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControleModo;
