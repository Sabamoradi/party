import styles from "./style.module.scss";
import { checkList } from "../../configs/checkList";

const CheckList = () => {
  const checkItem = (id: number, selected: boolean | undefined) => {
    const data = checkList.find(element => element.id === id);
  };
  return (
    <div className={styles.check_container}>
      <div className={styles.header_counter}>
        <div className={styles.left}>
          <p className={styles.name}>Sara’s Birthday Bash</p>
          <p className={styles.date}>10 Days to go</p>
        </div>
        <div className={styles.right}>
          <div className={styles.right_item}>
            <p className={styles.days}>0</p>
            <p className={styles.title}>Done</p>
          </div>
          <div className={styles.right_item}>
            <p className={styles.days}>5</p>
            <p className={styles.title}>To DO</p>
          </div>
        </div>
      </div>

      <div className={styles.check_items}>
        <ul>
          {checkList.map(el => {
            return (
              <li className={styles.check_item} key={el.id}>
                <div className={styles.wrapper}>
                  <div className={styles.check_box}>
                    <span
                      className={`${styles.check_box_item} ${el.selected
                        ? styles.selected_item
                        : ""}`}
                      onClick={() => checkItem(el.id, el.selected)}
                    >
                      <i />
                    </span>
                  </div>
                  <div className={styles.text_wrapper}>
                    <p className={styles.title}>
                      {el.title}
                    </p>
                    {el.description &&
                      <p className={styles.desc}>
                        {el.description}
                      </p>}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
