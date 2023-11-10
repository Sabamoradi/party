export interface checkListData {
  done: boolean | null;
  title: string | null;
  value: string | null;
}

export interface eventsItem {
  dataId: number | null;
  occasion: string | null;
  guestList: string | null;
  checkList: checkListData[];
  eventName: string | null;
  budget: string | null;
}
