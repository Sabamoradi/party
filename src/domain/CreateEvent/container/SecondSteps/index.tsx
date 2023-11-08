import styles from "./style.module.scss";
import Input from "../../../../components/Input";
import { localTexts } from "../../../../locals/text";

const SecondSteps = () => {
  return (
    <div className={styles.second_container}>
      <Input type="text" labelTitle={localTexts.eventName} />
    </div>
  );
};

export default SecondSteps;
