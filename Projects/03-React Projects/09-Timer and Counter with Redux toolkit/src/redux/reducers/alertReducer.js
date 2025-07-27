import { createSlice } from "@reduxjs/toolkit";
import { startTimer, pauseTimer, resetTimer } from "./timerReducer";

const INITIAL_STATE = { message: null };

const alertSlice = createSlice({
  name: "alert",
  initialState: INITIAL_STATE,
  reducers: {
    reset: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(startTimer, (state) => {
      state.message = "Timer has started.";
    });
    builder.addCase(pauseTimer, (state) => {
      state.message = "Timer is paused.";
    });
    builder.addCase(resetTimer, (state) => {
      state.message = "Timer set to 0.";
    });
  },
});

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;

export const resetAlert = alertSlice.actions.reset;
// create and export alert selector function here
export const alertSelector = (state) => state.alertReducer;
