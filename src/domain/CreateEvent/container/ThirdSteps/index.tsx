import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import Button from "../../../../components/Button";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";

interface Item {
  id: number;
  title: string;
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
  const setData = () => {
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  };

  const checkItem = (id: number, title: string) => {
    if (id === changeStyle) {
      setchangeStyle(-1);
      setSelectedItem("");
    } else {
      setchangeStyle(id);
      setSelectedItem(title);
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
                  checkItem(el.id, el.title);
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
