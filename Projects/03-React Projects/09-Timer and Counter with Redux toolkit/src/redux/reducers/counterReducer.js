import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state, action) => {
      ++state.count;
    },
    decrementCounter: (state, action) => {
      --state.count;
    },
    resetCounter: (state, action) => {
      state.count = 0;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

export const counterSelector = (state) => state.counterReducer;
