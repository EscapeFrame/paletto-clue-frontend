import styles from '@/shared/css/Home/Schedule/TimeTable.module.css';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Subjects {
  [day: string]: string[];
};

// interface ClassRoom {
//   grade:number;
//   classNumber:number;
// }

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
const TimeTable = () => {
  // const TimeTable = ({ grade, classNumber }:ClassRoom) => {
    const grade = 2;
    const classNumber = 3;
  const periods: string[] = ['1교시', '2교시', '3교시', '4교시', '5교시', '6교시', '7교시'];
  // const subjects: Subjects = {
  //   "월요일": ["국어", "수학", "사회", "과학", "영어", "체육", "디자인"],
  //   "화요일": ["수학", "과학", "체육", "미술", "국어", "코딩", "자율학습"],
  //   "수요일": ["과학", "영어", "국어", "체육", "디자인", "수학", "자율학습"],
  //   "목요일": ["국어", "사회", "수학", "체육", "과학", "영어", "코딩"],
  //   "금요일": ["디자인", "미술", "국어", "수학", "체육", "영어", "자율학습"]
  // };
  const days: string[] = ['1','2', '3', '4', '5'];

  const [schedule, setSchedule] = useState<Subjects | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6'; //임시로 아무거나 넣어놈
        const response: AxiosResponse<Subjects> = await axios.get('http://10.150.1.233:8080/api/schedules', { //로컬스토리지 저장하기
          params: {
            grade,
            classNumber,
          },
          // headers: {
          //   Authorization:`Bearer ${token}`, // Ouat 토큰받아오기
          // },
        });
        setSchedule(response.data)
        setLoading(false); // 로딩 완료
        console.log('서버 응답 확인',response.data)
      } catch (error) {
        console.error('시간표 불러오기 실패', error);
        setLoading(false); // 로딩 완료
      }
    };

    fetchSchedule();
  },[grade, classNumber])

  const getSubjects = (periodIndex: number): string[] => {
    return days.map(day => schedule?.[day]?.[periodIndex]||'안들어옴'); //값이 안들어오면 ''로 대체
  };

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 메시지
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{grade}학년{classNumber}반</th>
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

export default TimeTable;
