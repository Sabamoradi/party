import styles from "./style.module.scss";
import { Cake } from "../../../../assets/icons";

const HomePrevious = () => {
  return (
    <div className={styles.previous_container}>
      <ul className={styles.previous_items}>
        <li className={styles.previous_item}>
          <div className={styles.previous_item_wrap}>
          <i className={styles.img_wrapper}>
            <Cake />
          </i>
          <p className={styles.name}>Shravya’s Birthday</p>
          <div className={styles.time_wrapper}>
            <p className={styles.date}>14-07-2021</p>
            <p className={styles.time}>8:00 PM</p>
          </div>
          </div>
        </li>
        <li className={styles.previous_item}>
          <div className={styles.previous_item_wrap}>
          <i className={styles.img_wrapper}>
            <Cake />
          </i>
          <p className={styles.name}>Shravya’s Birthday</p>
          <div className={styles.time_wrapper}>
            <p className={styles.date}>14-07-2021</p>
            <p className={styles.time}>8:00 PM</p>
          </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePrevious;
