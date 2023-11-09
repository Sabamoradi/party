import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  BS_TimePicker: boolean;
}

const initialState: State = {
  BS_TimePicker: false,
};

export const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    setBS_TimePicker: (state, action) => {
      state.BS_TimePicker = action.payload;
    },
  },
});

export const { setBS_TimePicker } = eventSlice.actions;

export const selectFetchingStatus = (state: RootState) => state.general.status;
export const selectBS_TimePicker = (state: RootState) =>
  state.eventCreate.BS_TimePicker;
export default eventSlice.reducer;
