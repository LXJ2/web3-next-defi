/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-07-13 14:38:56
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-04-20 04:33:25
 * @FilePath: /defi/pages/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "../styles/Home.module.css"
import { useAccount } from 'wagmi'

const Home = () => {
  const { address } = useAccount()
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hello Doggy!</h1>
      </header>
      <main className={styles.main}>
        <p className={styles.description}>
          Welcome to my website. I'm a friendly and playful doggy who loves to explore new things and make friends. Woof!
        </p>
        <p className={styles.description}>
          I'm here to share my adventures with you. Whether it's chasing squirrels in the park or lounging in the sun, life is always exciting with me around.
        </p>
        <p className={styles.description}>
          Feel free to look around and get to know me better. If you have any questions or just want to say hello, don't hesitate to reach out. I'm always wagging my tail with excitement to meet new friends!
        </p>
      </main>
      <footer className={styles.footer}>
        <p>
          Your address: {address}
        </p>
      </footer>
    </div>
  )
}

export default Home
