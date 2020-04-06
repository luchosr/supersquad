import { combineReducers } from "redux";
import characters from "./characters_reducer";
import heroes from "./herores_reducer";

const rootReducer = combineReducers({
  characters,
  heroes,
});
export default rootReducer;
