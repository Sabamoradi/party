import HomeHeader from "./container/HomeHeader";
import HomePrevious from "./container/HomePrevious";
import HomeSecond from "./container/HomeSecond";
import { useEffect, useState } from "react";
import { eventsItem } from "../../configs/type";
import { set_laterEvents, set_previousEvents } from "../../store/Event/slice";
import { useAppDispatch } from "../../hooks/useDispatch";
import moment from "moment";

const HomePage = () => {
  const dispatch = useAppDispatch();

  let checkArrayLength = localStorage.getItem("eventsItem");
  let eventsData: eventsItem[] =
    (checkArrayLength && JSON.parse(checkArrayLength)) || [];

  useEffect(() => {
    const checkArrayLength: any = localStorage.getItem("eventsItem");
    let eventsItem: eventsItem[] = JSON.parse(checkArrayLength) || [];
    if (eventsItem.length > 0) {
      checkDateItem();
    }
  }, []);
  const checkDateItem = () => {
    const todayDate = moment(new Date()).format("YYYY/MM/DD");
    const todayDateTime = new Date(todayDate).getTime();
    const previousArray: eventsItem[] = [];
    const laterArray: eventsItem[] = [];

    eventsData.forEach((el) => {
      let convertedValue = moment(el.date, "YYYY-MM-DD").format("YYYY/MM/DD");
      let dateConverted = new Date(convertedValue).getTime();
      if (dateConverted < todayDateTime) {
        previousArray.push(el);
      } else {
        laterArray.push(el);
      }
    });

    dispatch(set_previousEvents(previousArray));
    dispatch(set_laterEvents(laterArray));
  };
  return (
    <>
      <HomeHeader />
      <HomeSecond />
      <HomePrevious />
    </>
  );
};

export default HomePage;
