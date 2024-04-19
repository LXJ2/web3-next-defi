/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-12-12 17:56:50
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-04-20 04:25:59
 * @FilePath: /defi/pages/market/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from "@/styles/Home.module.css"

const market = () => {
    const dogs = [
        { name: "Buddy", price: "$500", imageUrl: "https://via.placeholder.com/150" },
        { name: "Max", price: "$600", imageUrl: "https://via.placeholder.com/150" },
        { name: "Charlie", price: "$700", imageUrl: "https://via.placeholder.com/150" },
        { name: "Bella", price: "$550", imageUrl: "https://via.placeholder.com/150" },
        { name: "Lucy", price: "$650", imageUrl: "https://via.placeholder.com/150" },
        { name: "Cooper", price: "$750", imageUrl: "https://via.placeholder.com/150" },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to marketplace</h1>
            </header>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {dogs.map((dog, index) => (
                        <div key={index} className={styles.card}>
                            <img src={dog.imageUrl} alt={dog.name} className={styles.image} />
                            <h2>{dog.name}</h2>
                            <p>{dog.price}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default market;
