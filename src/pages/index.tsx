import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const currentXP = 80;

  return (
    <div className={styles.container} >
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar currentXP={currentXP} ></ExperienceBar>
      <section >
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>direita</div>
      </section>
    </div>
  );
}
