import { setMaxListeners } from 'process'
import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState((25 * 60) + 15);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const [leftDigitMinutes, rightDigitMinutes] = paddedMinutes.split('')

  const paddedSecondsString = String(seconds).padStart(2, '0');
  const [leftDigitSeconds, rightDigitSeconds] = paddedSecondsString.split('')

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    }

  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer} >
        <div>
          <span>{leftDigitMinutes}</span>
          <span>{rightDigitMinutes}</span>
        </div>
        <span>:</span>
        <div>
          <span>{leftDigitSeconds}</span>
          <span>{rightDigitSeconds}</span>
        </div>
      </div>

      <button
        type='button'
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}