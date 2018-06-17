import { combineReducers } from "redux";
import comments from "reducers/comment";
import auth from "reducers/auth";

export default combineReducers({
  comments,
  auth
});
