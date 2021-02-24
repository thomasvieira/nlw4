import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer} >
      <img src="http://github.com/thomasvieira.png" alt="Foto do perfil" />
      <div>
        <strong>Thomas Vieira</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level {level}
        </p>
      </div>
      <button style={{ background: 'blue' }}>Texto do botão</button>
      <button style={{ background: 'blue', color: 'yellow' }}>Texto do botão</button>
    </div>
  );
}
