import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./style.module.scss";
import Button from "../../../../components/Button";
import { localTexts } from "../../../../locals/text";
import { useEffect } from "react";
import { eventsItem } from "../../../../configs/type";
import { useAppSelector } from "../../../../hooks/useDispatch";
import { selectLater_Events } from "../../../../store/Event/slice";

const img = require("../../../../assets/images/svg/checklist.svg").default;
const calenderImg = require("../../../../assets/images/svg/date.svg").default;

const HomeSecond = () => {
  const navigate = useNavigate();
  const [checkData, setCheckData] = useState(false);
  const [eventsData, setEventsData] = useState<eventsItem[]>([]);
  const laterEvents = useAppSelector(selectLater_Events);

  useEffect(() => {
    const checkArrayLength = localStorage.getItem("eventsItem");
    let eventsItem: eventsItem[] =
      (checkArrayLength && JSON.parse(checkArrayLength)) || [];

    if (eventsItem.length > 0) {
      setCheckData(true);
      setEventsData(eventsItem);
    }
  }, []);
  return (
    <div className={styles.home_second_container}>
      {checkData ? (
        <>
          <div className={styles.home_card_top}>
            <p>{localTexts.upcoming}</p>
            <div className={styles.btn_wrapper}>
              <Button
                title={localTexts.createNew}
                onClick={() => navigate("/create")}
                customClass={styles.btn_custom}
              />
            </div>
          </div>
          {laterEvents.map((el) => {
            return (
              <div
                key={el.dataId}
                className={`${styles.home_card_wrapper} mb-6`}
                onClick={() => navigate(`/checkList/${el.dataId}`)}
              >
                <div className={styles.left}>
                  <h6>{el.eventName}</h6>
                  <p>10 Days to go</p>
                </div>
                <div className={styles.right}>
                  <img src={calenderImg} alt="img" />
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className={styles.home_card_wrapper}>
          <div className={styles.left}>
            <h6>{localTexts.noHouseParty}</h6>
            <p>{localTexts.planYourParty}</p>
            <Button
              title={localTexts.createNewEvent}
              onClick={() => navigate("/create")}
            />
          </div>
          <div className={styles.right}>
            <img src={img} alt="img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSecond;
