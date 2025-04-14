import React from 'react';
import styles from '../css/GoToClass.module.css';

export default function GoToClass(): React.ReactNode {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <h1>
                    수업 찾기
                </h1>
            </div>

        </div>
    );
}