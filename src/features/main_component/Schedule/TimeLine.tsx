import { Steps } from "antd";
import styles from "@/shared/css/Home/Schedule/TimeLine.module.css";

const TimeLine = () => {
  const current = 0; //백엔드 맡기기 or 시간보고 계산해서 하기?

  const steps = [
    { subject: "운영체제", period: "1교시" },
    { subject: "운영체제", period: "2교시" },
    { subject: "수학", period: "3교시" },
    { subject: "영어", period: "4교시" },
  ];

  return (
    <Steps
      direction="vertical"
      current={current} //현재 몇교시에 있는지 나타냄
      className={styles.customStep}
      items={steps.map((step, index) => {
        // 상태 판단
        const status =
          index == current
            ? "done"
            : "pending";

        return {
          title: (
            <div className={styles.step_box}>{step.subject}
              <p>수업내용</p>
            </div>
          ),
          icon: (
            <div
              className={`${styles.customIcon} ${
                styles[`status_${status}`]
              }`}
            >
              {step.period}
            </div>
          ),
        };
      })}
    />
  );
};

export default TimeLine;
