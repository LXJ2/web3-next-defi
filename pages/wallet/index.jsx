/*
 * @Author: lxj 1851816672@qq.com
 * @Date: 2023-12-11 02:47:57
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2024-04-20 04:30:22
 * @FilePath: /vite-wagmi-starter/src/pages/my/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react';
import { Button, Input } from 'antd';

const Wallet = () => {
    const [balance, setBalance] = useState(100);

    const handleDeposit = () => {
        setBalance(balance + 50);
    };

    const handleWithdraw = () => {
        if (balance >= 50) {
            setBalance(balance - 50);
        } else {
            alert("Insufficient balance!");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Wallet</h1>
            <p>Your current balance: {balance} USD</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button type="primary" onClick={handleDeposit}>Deposit</Button>
                <Button type="primary" danger onClick={handleWithdraw}>Withdraw</Button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Input placeholder="Enter amount" />
                <Button type="primary" style={{ marginLeft: '10px' }}>Transfer</Button>
            </div>
        </div>
    );
}

export default Wallet;
