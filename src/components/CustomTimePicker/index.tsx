import styles from "./style.module.scss";
import CustomModal from "../Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { setBS_TimePicker } from "../../store/Event/slice";
import Input from "../Input";
import { localTexts } from "../../locals/text";
import Button from "../Button";
import {
  set_EventsHour,
  selectEvents_Hour,
  set_EventsMinutes,
  selectEvents_Minutes,
} from "../../store/Event/slice";

const CustomTimePicker = () => {
  const dispatch = useAppDispatch();
  const selectHour = useAppSelector(selectEvents_Hour);
  const selectMinutes = useAppSelector(selectEvents_Minutes);

  const getHour = (event: any) => {
    dispatch(set_EventsHour(event));
  };
  const getMinutes = (event: any) => {
    dispatch(set_EventsMinutes(event));
  };

  const showValue = () => {
    return `${selectHour}${selectMinutes}`;
  };

  return (
    <div className="">
      <div onClick={() => dispatch(setBS_TimePicker(true))}>
        <Input
          inputWrapperClass={"mt-6"}
          type="number"
          labelTitle={localTexts.Time}
          placeholder={localTexts.hourAndMinutes}
          value={showValue()}
        />
      </div>
      <CustomModal>
        <div className={`${styles.time_wrapper} mb-6`}>
          <div className={styles.custom_wrapper}>
            <Input
              inputWrapperClass={"mt-6"}
              type="number"
              labelTitle={localTexts.Hour}
              onChange={getHour}
            />
          </div>
          <div className={styles.custom_wrapper}>
            <Input
              inputWrapperClass={"mt-6"}
              type="number"
              labelTitle={localTexts.Minutes}
              onChange={getMinutes}
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
