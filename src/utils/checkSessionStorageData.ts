import { checkListData } from "../configs/type";

export function checkSessionStorageData() {
  const getSessionData: any = sessionStorage.getItem("checkListMock");
  const checkListData: checkListData[] = JSON.parse(getSessionData) || [];

  return checkListData;
}

export function setDataInSessionStorage(checkListData: checkListData[]) {
  const checkListMock = JSON.stringify(checkListData);
  sessionStorage.setItem("checkListMock", checkListMock);
}
