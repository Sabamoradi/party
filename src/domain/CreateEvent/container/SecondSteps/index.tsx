import styles from "./style.module.scss";
import Input from "../../../../components/Input";
import { localTexts } from "../../../../locals/text";
import { useState } from "react";
import CustomDatePicker from "../../../../components/DatePicker";
// import { DayValue, DayRange, Day } from "react-modern-calendar-datepicker";
// import CustomTimePicker from "../../../../components/CustomTimePicker";
import type { DatePickerProps, TimePickerProps } from "antd";
import { DatePicker, Space, TimePicker } from "antd";
import Button from "../../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useDispatch";
import { set_StepEvent, selectStep_Event } from "../../../../store/Event/slice";

type PickerType = "time" | "date";
const PickerWithType = ({
  type,
  onChange,
}: {
  type: PickerType;
  onChange: TimePickerProps["onChange"] | DatePickerProps["onChange"];
}) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

const SecondSteps = () => {
  const dispatch = useAppDispatch();
  // const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);
  const [timeType, setType] = useState<PickerType>("time");
  const [disableBtn, setDisableBtn] = useState(0);
  const [eventName, setEventName] = useState("");
  const [timeData, setTimeData] = useState("");
  const [dateData, setDateData] = useState("");
  const [budgetData, setBudget] = useState("");
  const select_step = useAppSelector(selectStep_Event);
  const setData = () => {
    dispatch(set_StepEvent((Number(select_step) + 1).toString()));
  };

  const getName = (event: string) => {
    sessionStorage.setItem("eventName", event);
    setEventName(event);
  };
  const getBudget = (event: string) => {
    sessionStorage.setItem("budget", event);
    setBudget(event);
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    sessionStorage.setItem("date", dateString);
    setDateData(dateString);
  };

  const onChangeTime: DatePickerProps["onChange"] = (date, dateString) => {
    sessionStorage.setItem("time", dateString);
    setTimeData(dateString);
  };

  return (
    <div className={styles.second_container}>
      <Input type="text" labelTitle={localTexts.eventName} onChange={getName} />

      {/* <CustomDatePicker
        labelTitle={localTexts.Date}
        selectedDate={selectedDay}
        setSelectedDate={setSelectedDay}
      /> */}
      <Space direction="vertical">
        <p className={styles.date_label}>{localTexts.Date}</p>
        <DatePicker onChange={onChangeDate} />
      </Space>

      {/* <CustomTimePicker /> */}
      <p className={styles.date_label}>{localTexts.Time}</p>
      <Space direction="vertical">
        <PickerWithType type={timeType} onChange={onChangeTime} />
      </Space>
      <Input
        inputWrapperClass={"mt-6"}
        type="text"
        labelTitle={localTexts.budget}
        onChange={getBudget}
      />
      <div className={styles.btn_wrapper}>
        <Button
          title={localTexts.next}
          disabled={
            budgetData && timeData && dateData && eventName ? false : true
          }
          onClick={() => setData()}
        />
      </div>
    </div>
  );
};

export default SecondSteps;
