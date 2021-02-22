
import { useState } from 'react';
import { ExperienceBar } from './components/ExperienceBar'
import './styles/global.css'

function App() {
  const [currenXP, setCurrenXP] = useState(0);
  function incrementa() {
    setCurrenXP(currenXP + 10)
  }
  function reset() {
    setCurrenXP(0)
  }

  return (
    <div className='container' >
      <ExperienceBar currentXP={currenXP} ></ExperienceBar>
      <button className='button-xp' onClick={incrementa} >Incrementa XP</button>
      <button className='button-xp' onClick={reset} >Zera XP</button>
    </div>
  );
}

export default App;
