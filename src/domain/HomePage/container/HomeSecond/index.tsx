import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import Button from "../../../../components/Button";
import { localTexts } from "../../../../locals/text";
import { useAppSelector } from "../../../../hooks/useDispatch";
import { selectLater_Events } from "../../../../store/Event/slice";
import moment from "moment";
import { checkListData } from "../../../../configs/type";

const img = require("../../../../assets/images/svg/checklist.svg").default;
const calenderImg = require("../../../../assets/images/svg/date.svg").default;

const HomeSecond = () => {
  const navigate = useNavigate();
  const laterEvents = useAppSelector(selectLater_Events);

  const getDays = (date: string | null) => {
    const dayNumber = moment(`${date}`, "YYYY-MM-DD").format("DD");
    const todayDay = moment(new Date()).format("DD");
    return Number(dayNumber) - Number(todayDay);
  };

  const getDone = (checklist: checkListData[]) => {
    let counter = 0;
    checklist.forEach((el) => {
      if (el.done) {
        counter = ++counter;
      }
    });
    return counter;
  };

  const getToDo = (checklist: checkListData[]) => {
    let counter = 0;
    checklist.forEach((el) => {
      if (!el.done) {
        counter = ++counter;
      }
    });
    return counter;
  };

  return (
    <div className={styles.home_second_container}>
      {laterEvents.length > 0 ? (
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
          {laterEvents?.map((el) => {
            return (
              <div
                key={el.dataId}
                className={`${styles.home_card_wrapper} mb-6`}
                onClick={() => navigate(`/checkList/${el.dataId}`)}
              >
                <div className={styles.left}>
                  <div className={styles.left_top}>
                    <h6>{el.eventName}</h6>
                    <p>
                      {getDays(el.date)} {getDays(el.date) > 1 ? "Days" : "Day"}{" "}
                      to go
                    </p>
                  </div>
                  <div className={styles.left_bottom}>
                    <div className={styles.wrapper}>
                      <p className={styles.days}>{getDone(el.checkList)}</p>
                      <p className={styles.title}>Done</p>
                    </div>
                    <div className={styles.wrapper}>
                      <p className={styles.days}>{getToDo(el.checkList)}</p>
                      <p className={styles.title}>Done</p>
                    </div>
                  </div>
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
