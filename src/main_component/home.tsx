import styles from '../css/home.module.css';
import MySchedule from './MySchedule';
import GoToClass from './GoToClass';
import Navbar from '../Navbar';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <MySchedule />
            <GoToClass />
            

        </div>
    );
}