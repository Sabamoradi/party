import generalReducer from "./general/slice";
import marketReducer from "./market/slice";
import socketReducer from './socket/slice'
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    market: marketReducer,
    socket:socketReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
