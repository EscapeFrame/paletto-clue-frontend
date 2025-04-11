import { Steps } from "antd";

const description = "수업내용";
const TimeLine = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: "운영체제",
        description,
      },
      {
        title: "운영체제",
        description,
      },
      {
        title: "수학",
        description,
      },
      {
        title: "영어",
        description,
      },
    ]}
  />
);

export default TimeLine;
