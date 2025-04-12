import Header from '../Navbar';
import Demo from './TimeLine';
import Timetable from './Timetable';
import styles from '../css/main.module.css';


export default function Home() {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <Header />
                <div>
                    <h1>
                        나의 일과알아보기
                    </h1>
                    <p>빠르게 나의 수업을 확인하세요</p>
                </div>
                <div className={styles.side_by_side}>
                    <div>
                        <h2 style={{ textAlign: 'center' }}>시간표</h2>
                        <Timetable />
                    </div>
                    <div className={styles.divider}></div>
                    <div>
                        <p>학습 타임라인</p>
                        <div>
                            <Demo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}