import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/todosReducer";

const reducers = combineReducers({
  todos: todosReducer,
});

export const store = configureStore({
  reducer: reducers,
});