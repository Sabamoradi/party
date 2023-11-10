// types . . .
import { checkListData } from "../../configs/type";
export interface previousEvents {
  dataId: number;
  occasion: string;
  guestList: string;
  budget: string;
  eventName: string;
  date: string;
  time: string | null;
  checkList: checkListData[];
}
export interface State {
  status: "idle" | "loading" | "failed";
}
