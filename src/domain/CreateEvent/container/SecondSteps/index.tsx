import styles from "./style.module.scss";
import Input from "../../../../components/Input";
import { localTexts } from "../../../../locals/text";
import { useState } from "react";
import CustomDatePicker from "../../../../components/DatePicker";
import { DayValue, DayRange, Day } from "react-modern-calendar-datepicker";
import CustomTimePicker from "../../../../components/CustomTimePicker";

const SecondSteps = () => {
  const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);

  return (
    <div className={styles.second_container}>
      <Input type="text" labelTitle={localTexts.eventName} />

      {/* <CustomDatePicker
        labelTitle={localTexts.Date}
        selectedDate={selectedDay}
        setSelectedDate={setSelectedDay}

        
      /> */}

      <CustomTimePicker />
      <Input
        inputWrapperClass={"mt-6"}
        type="text"
        labelTitle={localTexts.eventName}
      />
    </div>
  );
};

export default SecondSteps;
