import styles from './about.module.css'
import { Footer, Header } from '@/components'
import { aboutNavigation } from '@/constants/navigations'

export default function Home() {
    return (
      <main className={styles.main}>
        <div className={styles.highlight}>
          <Header navGroup={aboutNavigation}/>
          <section>
            <div className={styles.content}>
              <span className={styles.date}>February, 11 2023 | 16:14</span>
              <p className={styles.text}>
                Hey! I&apos;m <span>Thiago Campos</span>, a software engineer and design enthusiast based in <span>Brazil</span>. 
                Currently, I&apos;m working on developing and maintaining React Application for a brazilian software house, 
                I&apos;m also co-founder, lead designer and front-end developer in <span>Scopo Studio</span>.
                <br/><br/>
                I&apos;ve always been inspired by the tech industry, computers and software. 
                In my spare time I explore adjacent areas to software development, mainly design and hardware.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    )
  }