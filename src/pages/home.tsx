import styles from '../css/home.module.css'
import MySchedule from '../main_component/Schedule/MySchedule';
import GoToClass from '../main_component/Class/GoToClass';
import Navbar from '../Navbar';
import NotSubmitted from '../main_component/Homework/NotSubmitted';
import Announcement from '../main_component/Announcement/Announcement';
import Other from '../main_component/Other/Other';
import TeamFooter from '../main_component/Footer/TeamFooter';

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