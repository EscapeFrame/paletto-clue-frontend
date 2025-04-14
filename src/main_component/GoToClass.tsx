import React from 'react';
import styles from '../css/GoToClass.module.css';

export default function GoToClass(): React.ReactNode {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <h1>학습실 바로가기</h1>
                <p>간편하게 수업에 함께 참여해 보세요!</p>
            </div>
            {/* <MiniCard /> 3개의 카드 */}
        </div>
    );
}