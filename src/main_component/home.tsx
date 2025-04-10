import Header from '../Navbar';
import Demo from './TimeLine';
import styles from '../css/main.module.css';

export default function Home() {
    return (
        <div >
            <Header />
            <div className={styles.container}>
                <h1>안녕</h1>
                <p>본문</p>
            </div>
            <Demo />
        </div>
    );
}
