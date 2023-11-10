import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { eventsItem } from "../../configs/type";

export interface State {
  BS_TimePicker: boolean;
  Step_Event: string | null;
  eventHour: string;
  eventMinutes: string;
  previousEvents: eventsItem[];
  laterEvents: eventsItem[];
}

const initialState: State = {
  BS_TimePicker: false,
  Step_Event: sessionStorage.getItem("step") || "1",
  eventHour: "",
  eventMinutes: "",
  previousEvents: [],
  laterEvents:[]
};

export const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    setBS_TimePicker: (state, action) => {
      state.BS_TimePicker = action.payload;
    },
    set_StepEvent: (state, action) => {
      state.Step_Event = action.payload;
      sessionStorage.setItem("step", action.payload);
    },
    set_EventsHour: (state, action) => {
      state.eventHour = action.payload;
    },
    set_EventsMinutes: (state, action) => {
      state.eventMinutes = action.payload;
    },
    set_previousEvents: (state, action) => {
      state.previousEvents = action.payload;
    },
    set_laterEvents: (state, action) => {
      state.laterEvents = action.payload;
    },
  },
});

export const {
  setBS_TimePicker,
  set_StepEvent,
  set_EventsHour,
  set_EventsMinutes,
  set_previousEvents,
  set_laterEvents
} = eventSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectBS_TimePicker = (state: RootState) =>
  state.eventCreate.BS_TimePicker;
export const selectStep_Event = (state: RootState) =>
  state.eventCreate.Step_Event;
export const selectEvents_Hour = (state: RootState) =>
  state.eventCreate.eventHour;
export const selectEvents_Minutes = (state: RootState) =>
  state.eventCreate.eventMinutes;
export const selectPrevious_Events = (state: RootState) =>
  state.eventCreate.previousEvents;
export const selectLater_Events = (state: RootState) =>
  state.eventCreate.laterEvents;
export default eventSlice.reducer;
