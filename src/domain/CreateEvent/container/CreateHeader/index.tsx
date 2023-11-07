import styles from "./style.module.scss";
import { BackIcon } from "../../../../assets/icons";

const CreateHeader = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.top}>
        <i>
          <BackIcon />
        </i>
        <p>Create a New Event</p>
      </div>
    </div>
  );
};

export default CreateHeader;
