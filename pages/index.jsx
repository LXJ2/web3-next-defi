/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-07-13 14:38:56
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2023-12-21 22:10:34
 * @FilePath: /defi/pages/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "../styles/Home.module.css"
import { useAccount } from 'wagmi'

const Home = () => {
  const { address } = useAccount()
  return (
    <>
      <div>
        Home
      </div>
    </>
  )
}

export default Home
