import styles from "./style.module.scss";
import CustomModal from "../Modal";
import { useAppDispatch } from "../../hooks/useDispatch";
import { setBS_TimePicker } from "../../store/Event/slice";
import Input from "../Input";
import { localTexts } from "../../locals/text";
import Button from "../Button";

const CustomTimePicker = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <div onClick={() => dispatch(setBS_TimePicker(true))}>
        <Input
          inputWrapperClass={"mt-6"}
          type="number"
          labelTitle={localTexts.Time}
          placeholder={localTexts.hourAndMinutes}
        />
      </div>
      <CustomModal>
        <div className={`${styles.time_wrapper} mb-6`}>
          <div className={styles.custom_wrapper}>
            <Input
              inputWrapperClass={"mt-6"}
              type="number"
              labelTitle={localTexts.Hour}
            />
          </div>
          <div className={styles.custom_wrapper}>
            <Input
              inputWrapperClass={"mt-6"}
              type="number"
              labelTitle={localTexts.Minutes}
            />
          </div>
        </div>
        <div className={styles.custom_btn}>
        <Button title={localTexts.next} />
        </div>
      </CustomModal>
    </div>
  );
};
export default CustomTimePicker;
