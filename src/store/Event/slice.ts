import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  BS_TimePicker: boolean;
  Step_Event: string | null;
  eventHour:string;
  eventMinutes:string;
}

const initialState: State = {
  BS_TimePicker: false,
  Step_Event: sessionStorage.getItem("step") || "0",
  eventHour:"",
  eventMinutes:""
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
  },
});

export const { setBS_TimePicker, set_StepEvent,set_EventsHour,set_EventsMinutes } = eventSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectBS_TimePicker = (state: RootState) =>
  state.eventCreate.BS_TimePicker;
export const selectStep_Event = (state: RootState) =>
  state.eventCreate.Step_Event;
export const selectEvents_Hour = (state: RootState) =>
  state.eventCreate.eventHour;
export const selectEvents_Minutes = (state: RootState) =>
  state.eventCreate.eventMinutes;
export default eventSlice.reducer;
