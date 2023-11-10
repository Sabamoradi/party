import styles from "./style.module.scss";
import { useState } from "react";

interface Props {
  placeholder?: string;
  type: string;
  inputClassName?: string;
  labelTitle?: string;
  inputWrapperClass?: string;
  onChange?: any;
  onfocus?: any;
  value?:string
}

function Input(props: Props) {
  const {
    placeholder,
    type,
    inputClassName,
    labelTitle,
    inputWrapperClass,
    onChange,
    onfocus,
    value
  } = props;

  const inputChange = (input: string) => {
    onChange(input);
  };
  return (
    <div className={`${styles.input_wrapper} ${inputWrapperClass}`}>
      <div className={styles.label_text}>
        <p>{labelTitle}</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClassName}
        onChange={(e) => inputChange(e.target.value)}
        onFocus={() => onfocus}
        value={value}
      />
    </div>
  );
}

export default Input;
