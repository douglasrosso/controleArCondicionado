import React, { useState } from 'react';
import ControleTemperatura from './ControleTemperatura';
import ControleModo from './ControleModo';
import ControleVelocidade from './ControleVelocidade';
import '../App.css';

const ArCondicionado = () => {
  const [temperatura, setTemperatura] = useState(24);
  const [modo, setModo] = useState('ventilar');
  const [velocidade, setVelocidade] = useState(1);

  return (
    <div className="painel-controle">
      <ControleTemperatura temperatura={temperatura} setTemperatura={setTemperatura} />
      <ControleModo modo={modo} setModo={setModo} />
      <ControleVelocidade velocidade={velocidade} setVelocidade={setVelocidade} />
    </div>
  );
};

export default ArCondicionado;
