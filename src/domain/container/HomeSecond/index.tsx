import styles from "./style.module.scss";
import Button from "../../../components/Button";
import { localTexts } from "../../../locals/text";

const img = require('../../../assets/images/svg/checklist.svg').default;

const HomeSecond = () => {
  return (
    <div className={styles.home_second_container}>
      <div className={styles.home_card_wrapper}>
        <div className={styles.left}>
          <h6>{localTexts.noHouseParty}</h6>
          <p>{localTexts.planYourParty}</p>
          <Button title={localTexts.createNewEvent} />
        </div>
        <div className={styles.right}>
          <img src={img} alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
