/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-12-11 01:51:35
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2023-12-13 04:25:33
 * @FilePath: /vite-wagmi-starter/src/components/layout/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Flex } from '@radix-ui/themes';
import Link from "next/link"
import styles from '../../styles/header.module.css'

const Header = ({ action }) => {
    return (
        <div className="h-16 border-b-1 border-white box-border">
            <div className="max-w-7xl m-auto h-full flex justify-between items-center sm:px-8 lt-sm:px-4">
                <div className="flex items-center font-bold cursor-pointer">
                    <img className="h-12 w-12" src="../logo.png" />
                </div>
                <Flex gap="3">
                    <Link className={styles.routeText} href='/'>Home</Link>
                    <Link className={styles.routeText} href='/deploy'>Deploy</Link>
                    <Link className={styles.routeText} href='/defi'>Defi</Link>
                    <Link className={styles.routeText} href='/inscribe'>Inscribe</Link>
                    <Link className={styles.routeText} href='/merge'>Merge</Link>
                    <Link className={styles.routeText} href='/market'>Market</Link>
                    <Link className={styles.routeText} href='/wallet'>Wallet</Link>
                </Flex>
                <div className="flex items-center gap-2">
                    {action}
                    <a
                        href="https://github.com/fisand/vite-antd-seed"
                        target="_blank"
                        className="flex-col-center text-primary transition-all hover:scale-95"
                    >
                        <span className="inline-flex w-8 h-8 i-carbon:logo-github"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header