import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import Button from "../../../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";
import { eventsItem, checkListData } from "../../../../configs/type";
import {
  checkLocalStorageData,
  setLocalStorageData,
} from "../../../../utils/checkLocalStorageData";
import {
  checkSessionStorageData,
  setDataInSessionStorage,
} from "../../../../utils/checkSessionStorageData";

interface Item {
  id: number;
  title: string;
  sessionTitle: string;
}

interface Props {
  img: string;
  title: string;
  items: Item[];
}
const ThirdSteps = (props: Props) => {
  const { img, title, items } = props;
  const [changeStyle, setchangeStyle] = useState(-1);
  const [selectedItem, setSelectedItem] = useState("");
  const dispatch = useAppDispatch();
  const select_step = useAppSelector(selectStep_Event);
  const navigate = useNavigate();

  const setData = () => {
    if (select_step === "8") {
      arrangeData();
      navigate("/");
      dispatch(set_StepEvent("1"));
      sessionStorage.clear();
    } else {
      dispatch(set_StepEvent((Number(select_step) + 1).toString()));
      setchangeStyle(-1);
      setSelectedItem("");
    }
  };
  const arrangeData = () => {
    let eventsItem: eventsItem[] = checkLocalStorageData();
    let checkListData: checkListData[] = checkSessionStorageData();

    const data = {
      dataId: eventsItem ? eventsItem.length : 0,
      occasion: sessionStorage.getItem("occasion"),
      guestList: sessionStorage.getItem("guestList"),
      budget: sessionStorage.getItem("budget"),
      eventName: sessionStorage.getItem("eventName"),
      date: sessionStorage.getItem("date"),
      time: sessionStorage.getItem("time"),
      eventColor: sessionStorage.getItem("eventColor") || "",
      checkList: checkListData,
    };
    eventsItem.push(data);
    setLocalStorageData(eventsItem);
  };
  const checkItem = (id: number, title: string, sessionTitle: string) => {
    if (id === changeStyle) {
      setchangeStyle(-1);
      setSelectedItem("");
    } else {
      setchangeStyle(id);
      setSelectedItem(title);
      let sessionData: any = {
        done: false,
        title: sessionTitle,
        value: title,
      };

      const checkListData: checkListData[] = checkSessionStorageData();
      checkListData.push(sessionData);
      setDataInSessionStorage(checkListData);
    }
  };

  return (
    <div className={styles.third_conatiner}>
      <i>
        <img src={img} alt={title} />
      </i>
      <div className={styles.text}>
        <p>{title}</p>
        <ul className={styles.item_list}>
          {items.map((el) => {
            return (
              <li
                key={el.id}
                onClick={() => {
                  checkItem(el.id, el.title, el.sessionTitle);
                }}
              >
                <div
                  className={`${styles.text_item_wrap} ${
                    el.id === changeStyle ? styles.selected_data : ""
                  }`}
                >
                  {el.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.btn_wrapper}>
        <Button
          title={select_step === "8" ? localTexts.submit : localTexts.next}
          disabled={selectedItem ? false : true}
          onClick={() => setData()}
        />
      </div>
    </div>
  );
};

export default ThirdSteps;
