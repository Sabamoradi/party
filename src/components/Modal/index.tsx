import styles from "./style.module.scss";
import { ReactNode, useEffect, useState } from "react";
import { selectBS_TimePicker } from "../../store/Event/slice";
import { useAppSelector, useAppDispatch } from "../../hooks/useDispatch";
import { setBS_TimePicker } from "../../store/Event/slice";

interface Props {
  children: ReactNode;
  closeFunc?: any;
}

const CustomModal = (props: Props) => {
  const { children, closeFunc } = props;
  const BS_TimePicker = useAppSelector(selectBS_TimePicker);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${styles.modal_container} ${
        BS_TimePicker && styles.open_modal
      }`}
    >
      <div className={styles.modal_wrapper}>
        <div
          className={styles.close_icon}
          onClick={() => dispatch(setBS_TimePicker(false))}
        >
          <i>x</i>
        </div>
        {children}
      </div>
    </div>
  );
};
export default CustomModal;
