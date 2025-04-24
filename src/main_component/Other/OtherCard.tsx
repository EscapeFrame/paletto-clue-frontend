import styles from '../../css/Other/OtherCard.module.css';
import { Link } from 'react-router-dom';

type OtherCardType = {
  href: string;
  src?: string;
};

const OtherCard = ({ href, src = '/default.jpeg' }: OtherCardType) => {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.logoBox}>
        <img
          src={src}
          alt="샘플"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.text}>
        <p>공식 홈페이지</p>
      </div>
    </Link>
  );
};

export default OtherCard;
