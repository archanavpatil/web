import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  main: LoginReducer,
});

export default rootReducer;
