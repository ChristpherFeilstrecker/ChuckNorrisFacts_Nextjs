import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.back}>
        <Image
          className={styles.backimg}
          src='/images/chuck_back.jpg'
          width='1200px'
          height='800px'
          alt="chuck-logo"
        />
      </div>

      <Link href='/curiosidades'>
        <Image
          className={styles.logo}
          src='/images/Chuck-Norris.png'
          width='200px'
          height='200px'
          alt="chuck-logo"
        />
      </Link>

      <h1>Fatos sobre Chuck Norris</h1>
      <Link href='/curiosidades'>
        <div className={styles.btn}>VER FATOS</div>
      </Link>




    </div>
  )
}
