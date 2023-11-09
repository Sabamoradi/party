import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue } from "react-modern-calendar-datepicker";

import { Dispatch, SetStateAction } from "react";

interface Props {
  selectedDate: DayValue | null;
  setSelectedDate: Dispatch<SetStateAction<DayValue>>;
  labelTitle:string
}

const CustomDatePicker = (props: Props) => {
  const { selectedDate, setSelectedDate } =
    props;

  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        inputPlaceholder="Select a day"
        shouldHighlightWeekends
      />
    </div>
  );
};
export default CustomDatePicker;
