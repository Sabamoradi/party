import styles from "./style.module.scss";
import Input from "../../../../components/Input";
import { localTexts } from "../../../../locals/text";
import { useState } from "react";
import CustomDatePicker from "../../../../components/DatePicker";
// import { DayValue, DayRange, Day } from "react-modern-calendar-datepicker";
import CustomTimePicker from "../../../../components/CustomTimePicker";
import Button from "../../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";

const SecondSteps = () => {
  const dispatch = useAppDispatch();
  // const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);
  const select_step = useAppSelector(selectStep_Event);
  const setData = () => {
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  };

  const getName = (event: any) => {
    console.log(event);
    sessionStorage.setItem("eventName", event);
  };
  const getBudget = (event: any) => {
    sessionStorage.setItem("budget", event);
  };

  return (
    <div className={styles.second_container}>
      <Input type="text" labelTitle={localTexts.eventName} onChange={getName} />

      {/* <CustomDatePicker
        labelTitle={localTexts.Date}
        selectedDate={selectedDay}
        setSelectedDate={setSelectedDay}
      /> */}

      <CustomTimePicker />
      <Input
        inputWrapperClass={"mt-6"}
        type="text"
        labelTitle={localTexts.budget}
        onChange={getBudget}
      />
      <div className={styles.btn_wrapper}>
        <Button title={localTexts.next} onClick={() => setData()} />
      </div>
    </div>
  );
};

export default SecondSteps;
