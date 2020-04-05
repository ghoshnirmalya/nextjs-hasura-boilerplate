import { combineReducers } from "@reduxjs/toolkit";
import { currentUserReducer } from "slices/current-user";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
