import styles from '../styles/components/ExperienceBar.module.css'

interface ExperienceBarProps {
  currentXP: number;
}

export function ExperienceBar(props: ExperienceBarProps) {
  const maxXP = 600;
  const percentCurrentXP = (props.currentXP / maxXP) * 100;

  return (
    <header className={styles.experienceBar} >
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentCurrentXP}%` }}></div>
        <span className={styles.currentXp} style={{ left: `${percentCurrentXP}%` }} >{props.currentXP}</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}