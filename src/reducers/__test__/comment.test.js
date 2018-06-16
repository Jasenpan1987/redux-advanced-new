import commentReducer from "reducers/comment";
import { SAVE_COMMENT } from "actions/types";

describe("test reducers", () => {
  it("handle SAVE_COMMENT actions", () => {
    const action = { type: SAVE_COMMENT, payload: "test" };
    const newState = commentReducer([], action);

    expect(newState).toEqual(["test"]);
  });

  it("unknown action type returns the default state", () => {
    const state = commentReducer([], { type: "Unknown" });
    expect(state).toEqual([]);
  });
});
