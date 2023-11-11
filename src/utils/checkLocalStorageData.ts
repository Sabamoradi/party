import { eventsItem } from "../configs/type";

export function checkLocalStorageData() {
  const checkArrayLength: any = localStorage.getItem("eventsItem");
  let eventsItem: eventsItem[] = JSON.parse(checkArrayLength) || [];
  return eventsItem;
}

export function setLocalStorageData(eventsItem: eventsItem[]) {
  let eventsItemMock = JSON.stringify(eventsItem);
  localStorage.setItem("eventsItem", eventsItemMock);
}
