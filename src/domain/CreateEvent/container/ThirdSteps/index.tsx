import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import Button from "../../../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";

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
    if (select_step === "7") {
      arrangeData()
      navigate("/");
    }
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  };
  const arrangeData = () => {
    let eventsItem = [];
    const data = {
      occasion: sessionStorage.getItem("occasion"),
      guestList: sessionStorage.getItem("guestList"),
      eInvite: sessionStorage.getItem("eInvite"),
      arrangements: sessionStorage.getItem("arrangements"),
      alcohol: sessionStorage.getItem("alcohol"),
      decorator: sessionStorage.getItem("decorator"),
    };
    eventsItem.push(data);

    let eventsItemMock = JSON.stringify(eventsItem);
    localStorage.setItem("eventsItem", eventsItemMock);
  };
  const checkItem = (id: number, title: string, sessionTitle: string) => {
    if (id === changeStyle) {
      setchangeStyle(-1);
      setSelectedItem("");
    } else {
      setchangeStyle(id);
      setSelectedItem(title);
      sessionStorage.setItem(sessionTitle, title);
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
          title={localTexts.next}
          disabled={selectedItem ? false : true}
          onClick={() => setData()}
        />
      </div>
    </div>
  );
};

export default ThirdSteps;
