/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-07-13 14:38:56
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2023-12-13 04:03:58
 * @FilePath: /dapp-forge-main/pages/_app.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "../styles/globals.css"
import '@radix-ui/themes/styles.css';
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Web3Provider } from "providers/Web3"
import Header from '../components/layout/header'


function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Header
        action={
          <ConnectButton />
        }
      />
      <div className="container">
        <Component {...pageProps} />
      </div>

    </Web3Provider>

  )
}

export default MyApp
