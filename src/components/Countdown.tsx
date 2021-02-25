import { useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const paddedMinutes = String(minutes).padStart(2, '0');
  const [leftDigitMinutes, rightDigitMinutes] = paddedMinutes.split('')

  const paddedSecondsString = String(seconds).padStart(2, '0');
  const [leftDigitSeconds, rightDigitSeconds] = paddedSecondsString.split('')

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

      {hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>

      ) : (
          <>
            {isActive ? (
              <button
                type='button'
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>

            ) : (
                <button
                  type='button'
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                </button>

              )}


          </>
        )}

    </div>
  )
}
