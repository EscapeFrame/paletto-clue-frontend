import styles from '../css/Timetable.module.css';

interface Subjects {
  [day: string]: string[];
};

const TableRow = ({ period, subjects }: { period: string; subjects: string[] }) => {
  return (
    <tr>
      <td className={styles.td_smaller}>{period}</td>
      {subjects.map((subject, index) => (
        <td key={index}>{subject}</td>
      ))}
    </tr>
  );
};

const Timetable = () => {
  const periods: string[] = ['1교시', '2교시', '3교시', '4교시', '5교시', '6교시', '7교시'];
  const subjects: Subjects = {
    "월요일": ["국어", "수학", "사회", "과학", "영어", "체육", "디자인"],
    "화요일": ["수학", "과학", "체육", "미술", "국어", "코딩", "자율학습"],
    "수요일": ["과학", "영어", "국어", "체육", "디자인", "수학", "자율학습"],
    "목요일": ["국어", "사회", "수학", "체육", "과학", "영어", "코딩"],
    "금요일": ["디자인", "미술", "국어", "수학", "체육", "영어", "자율학습"]
  };

  const days: string[] = ['월요일', '화요일', '수요일', '목요일', '금요일'];

  const getSubjects = (periodIndex: number): string[] => {
    return days.map(day => subjects[day][periodIndex]);
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>2학년2반</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
          </tr>
        </thead>
        <tbody>
          {periods.map((period, index) => (
            <TableRow key={index} period={period} subjects={getSubjects(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
