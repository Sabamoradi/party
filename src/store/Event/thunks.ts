import { createAppAsyncThunk } from "../appAsyncThunk";
import { getSomeData } from "./api";

export const getHomePageThunk = createAppAsyncThunk(
  "general/getSomeData",
  async () => {
    const response = (await getSomeData()).data;
    return response;
  }
);
