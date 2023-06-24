import { combineReducers } from 'redux';
import hoppy from './hoppy';
const rootReducer = combineReducers({
  hoppy: hoppy,
});
export default rootReducer;
