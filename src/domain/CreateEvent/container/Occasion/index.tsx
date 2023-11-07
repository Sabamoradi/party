import styles from "./style.module.scss";
import { localTexts } from "../../../../locals/text";
import { occasion } from "../../../../configs/occasion";
import { useState } from "react";

const Occasion = () => {
  const [Brcolor, setBrColor] = useState(-1);

  const changeColor = (id: number) => {
    if (id === Brcolor) {
      setBrColor(-1);
    } else {
      setBrColor(id);
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
                onClick={() => changeColor(el.id)}
              >
                <div
                  className={styles.item}
                  style={{
                    borderColor: el.id === Brcolor ? `${el.borderColor}` : "",
                    backgroundColor:
                      el.id === Brcolor ? `${el.borderColor}` : "",
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
    </div>
  );
};

export default Occasion;
