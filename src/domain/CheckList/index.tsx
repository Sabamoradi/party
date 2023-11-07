import styles from "./style.module.scss";

const CheckList = () => {
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
          <li className={styles.check_item}>
            <div className={styles.wrapper}>
              <div className={styles.check_box}></div>
              <div className={styles.text_wrapper}>
                <p className={styles.title}>Create an e-invite</p>
                <p className={styles.desc}>Tap to create an e-invite </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
