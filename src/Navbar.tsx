import { useState } from 'react';
import styles from './css/Navbar.module.css';
import images from "./assets/CLUE_Icons.svg";

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <a href="/" className={styles.brand}><img src={images} alt="My Image" className={styles.image}/></a>

                {/* 네비게이션 바 내부 */}
                <nav className={styles.navbarNav}>
                    {/* 네비게이션 링크 */}
                    <ul className={styles.navLinks}>
                        <li><a href="#action1" className={styles.navItem}>학습실로 가기</a></li>
                        <li><a href="#action2" className={styles.navItem}>수강신청</a></li>
                        <li><a href="#action3" className={styles.navItem}>서비스 소개</a></li>
                    </ul>

                    {/* 드롭다운 */}
                    <div className={styles.dropdownContainer}>
                        <button
                            onClick={toggleDropdown}
                            className={styles.dropdownButton}
                        >
                            톱니바퀴
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