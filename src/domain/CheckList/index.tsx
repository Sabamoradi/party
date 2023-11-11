import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { eventsItem, checkListData } from "../../configs/type";
import { useParams } from "react-router-dom";
import { checkLocalStorageData } from "../../utils/checkLocalStorageData";
import CreateHeader from "../../components/CreateHeader";
import { localTexts } from "../../locals/text";
import { Vector } from "../../assets/icons";
import moment from "moment";

const CheckList = () => {
  const params = useParams();
  const [eventsName, setEventsName] = useState("");
  const [eventsDate,setEventsDate] = useState("")
  const [checkListData, setCheckListData] = useState<
    checkListData[] | undefined
  >([]);
  const [doneThings, setDoneThings] = useState(0);
  const [toDo, setToDo] = useState<number>(0);

  useEffect(() => {
    const eventsItem: eventsItem[] = checkLocalStorageData();
    checkDataId(eventsItem);
  }, []);

  const checkItem = (id: number) => {
    let checkData = checkListData;
    checkData?.forEach((el, index) => {
      if (index === id) {
        el.done = !el.done;
        if (el.done) {
          setDoneThings(doneThings + 1);
          setToDo(toDo - 1);
        } else {
          setDoneThings(doneThings - 1);
          setToDo(toDo + 1);
        }
      }
    });
    setCheckListData(checkData);
  };
  const checkDataId = (eventsItem: eventsItem[]) => {
    let checkData = eventsItem.find(
      (el) => el.dataId === Number(params.dataId)
    );
    setEventsDate(checkData?.date || "")
    setEventsName(checkData?.eventName || "");
    setCheckListData(checkData?.checkList);

    setToDo(checkData?.checkList.length || 0);
  };
  const getDays = (date:string) => {
    const dayNumber = moment(`${date}`, "YYYY-MM-DD").format("DD");
    const todayDay = moment(new Date()).format("DD");
    return Number(dayNumber) - Number(todayDay);
  };

  return (
    <div className={styles.check_container}>
      <CreateHeader title={localTexts.checkList} hasProgressBar={false} progressBarNumber={0} />
      <div className={styles.header_counter}>
        <div className={styles.left}>
          <p className={styles.name}>{eventsName}</p>
          <p className={styles.date}>{getDays(eventsDate)} {getDays(eventsDate) > 1 ? "Days" : "Day"}{" "}
                    to go</p>
        </div>
        <div className={styles.right}>
          <div className={styles.right_item}>
            <p className={styles.days}>{doneThings}</p>
            <p className={styles.title}>Done</p>
          </div>
          <div className={styles.right_item}>
            <p className={styles.days}>{toDo}</p>
            <p className={styles.title}>To DO</p>
          </div>
        </div>
      </div>

      <div className={styles.check_items}>
        <ul>
          {checkListData?.map((el, index) => {
            return (
              <li className={styles.check_item} key={`${index}-check`}>
                <div className={styles.wrapper}>
                  <div className={styles.check_box}>
                    <span
                      className={`${styles.check_box_item} ${
                        el.done ? styles.selected_item : ""
                      }`}
                      onClick={() => checkItem(index)}
                    >
                      <i>
                        <Vector/>
                      </i>
                    </span>
                  </div>
                  <div className={styles.text_wrapper}>
                    <p className={styles.title}>{el.title}</p>
                    <p className={styles.desc}>Tap to view vendors</p>
                    {/* {el. && (
                      <p className={styles.desc}>{el.description}</p>
                    )} */}
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
