import styles from "./style.module.scss";
import { Cake } from "../../../../assets/icons";
import { localTexts } from "../../../../locals/text";
import { useAppSelector } from "../../../../hooks/useDispatch";
import { selectPrevious_Events } from "../../../../store/Event/slice";

const HomePrevious = () => {
  const previousEvents = useAppSelector(selectPrevious_Events);

  return (
    <>
      {previousEvents.length > 0 ? (
        <div className={styles.previous_container}>
          <p className={styles.title}>{localTexts.previousHouseParties}</p>
          <ul className={styles.previous_items}>
            {previousEvents?.map((el) => {
              return (
                <li className={styles.previous_item} key={el.dataId}>
                  <div className={styles.previous_item_wrap}>
                    <i className={styles.img_wrapper}>
                      <Cake />
                    </i>
                    <p className={styles.name}>{el.eventName}</p>
                    <div className={styles.time_wrapper}>
                      <p className={styles.date}>{el.date}</p>
                      <p className={styles.time}>{el.time}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomePrevious;
