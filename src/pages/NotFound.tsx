import styles from '@/shared/css/NotFound.module.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className={styles.container}>
            <img src="/NotFound.svg" alt="에러페이지" />
            <br />
            <br />
            <Link to="/" className={styles.gotomain}>&lt;&nbsp; 이전 페이지로 이동하기</Link>
        </div>
    )
}

export default NotFound