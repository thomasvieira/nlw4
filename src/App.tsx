import { ExperienceBar } from './components/ExperienceBar'
import './styles/global.css'

function App() {
  const currentXP = 80;

  return (
    <div className='container' >
      <ExperienceBar currentXP={currentXP} ></ExperienceBar>
    </div>
  );
}

export default App;
