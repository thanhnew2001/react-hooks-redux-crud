import { combineReducers } from "redux";
import tutorials from "./tutorials";
import students from "./students";

import editStudent from "./editStudent";

export default combineReducers({
  tutorials, students, editStudent
});
