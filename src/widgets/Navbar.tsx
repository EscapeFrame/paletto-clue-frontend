import { useState } from 'react';
import styles from '@/shared/css/Home/Navbar.module.css'

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <a href="/" className={styles.brand}><img src="/clue.svg" alt="My Image" className={styles.image}/></a>
                <nav className={styles.navbarNav}>
                    <ul className={styles.navLinks}>
                        <li><a href="/class" className={styles.navItem}>학습실로 가기</a></li>
                        <li><a href="#action2" className={styles.navItem}>학습실 추가</a></li>
                        <li><a href="#action3" className={styles.navItem}>수강신청</a></li>
                        <li><a href="#action3" className={styles.navItem}>서비스 소개</a></li>
                    </ul>
                    <div className={styles.dropdownContainer}>
                        <button
                            onClick={toggleDropdown}
                            className={styles.dropdownButton}
                        >
                            사람모양
                        </button>
                        {dropdownVisible && (
                            <div className={styles.dropdownMenu}>
                                <a href="#action3" className={styles.dropdownItem}>프로필설정</a>
                                <a href="#action4" className={styles.dropdownItem}>채팅보관함</a>
                                <a href="#action5" className={styles.dropdownItem}>알림설정</a>
                                <a href="#action6" className={styles.dropdownItem}>학교서비스</a>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}