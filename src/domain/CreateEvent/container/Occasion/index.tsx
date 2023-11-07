import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import { occasion } from "../../../../configs/occasion";
import { useState } from "react";
import Button from "../../../../components/Button";

const Occasion = () => {
  const [Brcolor, setBrColor] = useState(-1);
  const [occasionType, setOccasionType] = useState("");

  const changeColor = (id: number, title: string) => {
    if (id === Brcolor) {
      setBrColor(-1);
      setOccasionType("");
    } else {
      setBrColor(id);
      setOccasionType(title);
    }
  };

  return (
    <div className={styles.first_container}>
      <div className={styles.header}>
        <p>{localTexts.occasion}</p>
      </div>
      <div className={styles.items_wrapper}>
        <ul>
          {occasion.map((el) => {
            return (
              <li
                className={styles.item_wrapper}
                key={el.id}
                onClick={() => changeColor(el.id, el.title)}
              >
                <div
                  className={styles.item}
                  style={{
                    borderColor: el.id === Brcolor ? `${el.borderColor}` : "",
                    backgroundColor: el.id === Brcolor ? `${el.bgColor}` : "",
                  }}
                >
                  <i>
                    <img src={el.icon} alt={el.title} />
                  </i>
                  <p>{el.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.btn_wrapper}>
        <Button
          title={localTexts.next}
          disabled={occasionType ? false : true}
        />
      </div>
    </div>
  );
};

export default Occasion;
