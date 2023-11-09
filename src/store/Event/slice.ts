import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  BS_TimePicker: boolean;
  Step_Event: string | null;
}

const initialState: State = {
  BS_TimePicker: false,
  Step_Event: sessionStorage.getItem("step") || "0",
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
  },
});

export const { setBS_TimePicker, set_StepEvent } = eventSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectBS_TimePicker = (state: RootState) =>
  state.eventCreate.BS_TimePicker;
export const selectStep_Event = (state: RootState) =>
  state.eventCreate.Step_Event;
export default eventSlice.reducer;
