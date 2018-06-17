import { CHANGE_AUTH } from "actions/types";

export default function(state = false, action) {
  if (action.type === CHANGE_AUTH) {
    return action.payload;
  }
  return state;
}
