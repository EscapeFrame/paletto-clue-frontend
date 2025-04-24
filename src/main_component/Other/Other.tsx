import styles from '../../css/Other/Other.module.css';
import Card from './OtherCard';


export default function Other(): React.ReactNode {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <h1>학교 서비스로 바로가기</h1>
                <div style={{ display: 'flex', flexDirection: 'row', gap:'15px'}}>
                    <Card href='dd' src='public/sample.jpg'></Card>
                    <Card href='dd' src='public/sample.jpg'></Card>
                    <Card href='dd' src='public/sample.jpg'></Card>
                    <Card href='dd'></Card>
                </div>
            </div>
        </div>
    );
}
