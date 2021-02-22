
import { useState } from 'react';
import { ExperienceBar } from './components/ExperienceBar'
import './styles/global.css'

function App() {
  const [currentXP, setCurrenXP] = useState(0);
  function incrementa() {
    if (currentXP <= 590) {
      setCurrenXP(currentXP + 10)
    }
  }
  function reset() {
    setCurrenXP(0)
  }

  return (
    <div className='container' >
      <ExperienceBar currentXP={currentXP} ></ExperienceBar>
      <button className='button-xp' onClick={incrementa} >Incrementa XP</button>
      <button className='button-xp' onClick={reset} >Zera XP</button>
    </div>
  );
}

export default App;
