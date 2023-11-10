import styles from "./style.module.scss";
import { Cake, Anniversary, Dinner, MeetUp } from "../../../../assets/icons";
import { localTexts } from "../../../../locals/text";
import { useAppSelector } from "../../../../hooks/useDispatch";
import { selectPrevious_Events } from "../../../../store/Event/slice";
import { occasionEnum } from "../../../../enums/globalEnums";

const HomePrevious = () => {
  const previousEvents = useAppSelector(selectPrevious_Events);

  const renderIcon = (occasionValue: string | null) => {
    switch (occasionValue) {
      case occasionEnum.birthday:
        return <Cake />;
      case occasionEnum.anniversary:
        return <Anniversary />;
      case occasionEnum.dinner:
        return <Dinner />;
      case occasionEnum.meetUp:
        return <MeetUp />;
    }
  };
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
                    <i
                      className={styles.img_wrapper}
                      style={{
                        borderColor: el.eventColor,
                      }}
                    >
                      {renderIcon(el.occasion)}
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
