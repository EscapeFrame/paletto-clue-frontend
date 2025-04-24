import styles from '../css/home.module.css'
import MySchedule from './Schedule/MySchedule';
import GoToClass from './Class/GoToClass';
import Navbar from '../Navbar';
import NotSubmitted from './Homework/NotSubmitted';
import Announcement from './Announcement/Announcement';
import Other from './Other/Other';
import TeamFooter from './Footer/TeamFooter';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <MySchedule />
            <GoToClass />
            <NotSubmitted/>
            <Announcement />
            <Other />
            <TeamFooter />
        </div>
    );
}