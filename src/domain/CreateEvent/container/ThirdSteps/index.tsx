import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import Button from "../../../../components/Button";
import { useState } from "react";

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
        <Button title={localTexts.next} disabled={selectedItem ? false : true} />
      </div>
    </div>
  );
};

export default ThirdSteps;
