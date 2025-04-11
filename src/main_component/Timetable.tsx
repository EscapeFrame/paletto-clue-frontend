import styles from '../css/Timetable.module.css';

const TableRow = ({ period, subjects }: { period: string; subjects: string[] }) => {
  return (
    <tr>
      <td>{period}</td>
      {subjects.map((subject, index) => (
        <td key={index}>{subject}</td>
      ))}
    </tr>
  );
};

const Timetable = () => {
  const periods = ['1교시', '2교시', '3교시', '4교시', '5교시', '6교시', '7교시'];
  const subjects = [
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '과목'],
    ['과목', '과목', '과목', '과목', '-'],
  ];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
          </tr>
        </thead>
        <tbody>
          {periods.map((period, index) => (
            <TableRow key={index} period={period} subjects={subjects[index]} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
