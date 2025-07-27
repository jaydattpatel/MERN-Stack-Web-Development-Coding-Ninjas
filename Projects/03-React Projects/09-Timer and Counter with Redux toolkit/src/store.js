import { configureStore } from "@reduxjs/toolkit";

const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
const { alertReducer } = require("./redux/reducers/alertReducer");

export const store = configureStore({
  reducer: { timerReducer, counterReducer, alertReducer },
});
