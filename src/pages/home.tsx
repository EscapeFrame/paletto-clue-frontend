import styles from '@/shared/css/Home/home.module.css';
import MySchedule from '@/features/main_component/Schedule/MySchedule';
import GoToClass from '@/features/main_component/Class/GoToClass';
import Navbar from '@/widgets/Navbar';
import NotSubmitted from '@/features/main_component/Homework/NotSubmitted';
import Announcement from '@/features/main_component/Announcement/Announcement';
import Other from '@/features/main_component/Other/Other';
import TeamFooter from '@/features/main_component/Footer/TeamFooter';

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