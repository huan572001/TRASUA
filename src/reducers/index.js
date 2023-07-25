import { combineReducers } from "redux";
import hoppy from "./hoppy";
import card from "./card";
const rootReducer = combineReducers({
  hoppy: hoppy,
  card: card,
});
export default rootReducer;
