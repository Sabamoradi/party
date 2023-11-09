import styles from "./style.module.scss";
import { useState } from "react";

interface Props {
  placeholder?: string;
  type: string;
  inputClassName?: string;
  labelTitle: string;
  inputWrapperClass?:string
}

function Input(props: Props) {
  const { placeholder, type, inputClassName, labelTitle ,inputWrapperClass } = props;
  return (
    <div className={`${styles.input_wrapper} ${inputWrapperClass}`}>
      <div className={styles.label_text}>
        <p>
          {labelTitle}
        </p>
      </div>
      <input type={type} placeholder={placeholder} className={inputClassName} />
    </div>
  );
}

export default Input;
