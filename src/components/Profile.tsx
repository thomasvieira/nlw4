import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer} >
      <img src="http://github.com/thomasvieira.png" alt="Foto do perfil" />
      <div>
        <strong>Thomas Vieira</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 1000
        </p>
      </div>
    </div>
  );
}