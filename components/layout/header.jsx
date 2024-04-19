/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-12-11 01:51:35
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-04-20 04:18:46
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
                    {/* 替换为可爱的猫猫图标 */}
                    <span role="img" aria-label="logo" className="text-3xl">🐱</span>
                </div>
                <Flex gap="3">
                    <Link className={styles.routeText} href='/'>Home</Link>
                    <Link className={styles.routeText} href='/market'>Market</Link>
                    <Link className={styles.routeText} href='/wallet'>Wallet</Link>
                </Flex>
                <div className="flex items-center gap-2">
                    {action}
                    {/* 修改为网上链接的图片 */}
                    <a
                        href="https://github.com/LXJ2/web3-next-defi"
                        target="_blank"
                        className="flex-col-center text-primary transition-all hover:scale-95"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                            alt="GitHub"
                            className="w-8 h-8"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
